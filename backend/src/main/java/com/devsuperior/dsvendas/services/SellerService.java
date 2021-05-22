package com.devsuperior.dsvendas.services;

import java.util.List;
import java.util.stream.Collector;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.devsuperior.dsvendas.dto.SellerDTO;
import com.devsuperior.dsvendas.entities.Seller;
import com.devsuperior.dsvendas.repositories.SellerRepository;

@Service //registrando como sendo um componente do sistema (podendo ser injetado em outros componentes)
public class SellerService {
	
	@Autowired
	private SellerRepository repository;
	
	public List<SellerDTO> findAll(){
		List<Seller> result = repository.findAll();
		return result.stream().map(x -> new SellerDTO(x)).collect(Collectors.toList());/*utilizar o stream e o map para converter a coleção para outra coleção
		Para cada x da minha coleção quero que converta para DTO, para fechar, utilizamos o collect para voltar do straem para a lista original*/
	}

}
