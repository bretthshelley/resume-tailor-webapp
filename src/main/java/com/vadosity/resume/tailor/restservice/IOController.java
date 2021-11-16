package com.vadosity.resume.tailor.restservice;

import java.io.IOException;
import java.util.Random;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;

import com.netflix.appinfo.InstanceInfo;
import com.netflix.discovery.EurekaClient;
import com.netflix.discovery.shared.Application;
import com.vadosity.resume.tailor.KeywordMatchResults;

@RestController
@RequestMapping("/resume")
public class IOController {
	
	@Autowired
	private RestTemplate restTemplate;
	
	@Autowired 
	private EurekaClient eurekaClient;
	
	@RequestMapping(path = "/download", method = RequestMethod.GET)
    public ResponseEntity<Resource> download(@RequestParam("filename") String filename) throws IOException {
       
		String baseUrl="http://resume-tailor-service/resume/download?filename="+filename;
		Resource resource = restTemplate.getForObject(baseUrl, Resource.class);
		HttpHeaders header = new HttpHeaders();
        header.add(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename="+filename);
        header.add("Cache-Control", "no-cache, no-store, must-revalidate");
        header.add("Pragma", "no-cache");
        header.add("Expires", "0");

        return ResponseEntity.ok()
                .headers(header)
                .contentLength(resource.contentLength())
                .contentType(MediaType.parseMediaType("application/vnd.openxmlformats-officedocument.wordprocessingml.document"))
                .body(resource);
    }
	
	@PostMapping("/upload")
	public ResponseEntity<KeywordMatchResults> upload(@RequestPart("file") MultipartFile multiPartFile,
			@RequestParam(value = "json", defaultValue = "{}") String json) {
		
		if (null == multiPartFile.getOriginalFilename()) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		
		try {
			
			HttpHeaders headers = new HttpHeaders();
			headers.setContentType(MediaType.MULTIPART_FORM_DATA);
			headers.set("Accept", "*/*");
			
			MultiValueMap<String, Object> body
			  = new LinkedMultiValueMap<>();
			body.add("file", multiPartFile.getResource());
			body.add("json", json);
			
			HttpEntity<MultiValueMap<String, Object>> requestEntity = new HttpEntity<>(body, headers);
			String baseUrl=obtainHostnameAndPort("resume-tailor-service");
			String serverUrl = "http://"+baseUrl+"/resume/tailor";
		
			RestTemplate restTemplate = new RestTemplate();
			KeywordMatchResults response = restTemplate.postForObject(serverUrl, requestEntity, KeywordMatchResults.class);
			return ResponseEntity.ok()
	                .contentType(MediaType.parseMediaType("application/json"))
	                .body(response);
			
		} catch (Exception e) {
			e.printStackTrace();
			System.out.println(e.getMessage());
			return ResponseEntity.notFound().build();
		}		
				
	}
	
	
	private String obtainHostnameAndPort(String applicationName) {
		Application application = eurekaClient.getApplication(applicationName);
		int index= getRandomNumberUsingInts(0, application.getInstances().size());	
        InstanceInfo instanceInfo = application.getInstances().get(index);
        String hostname = instanceInfo.getHostName();
        int port = instanceInfo.getPort();
        return hostname+":"+port;
	}
	
	private int getRandomNumberUsingInts(int min, int max) {
	    Random random = new Random();
	    return random.ints(min, max)
	      .findFirst()
	      .getAsInt();
	}	
	
}
