package com.devsuperior.dsvendas.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsvendas.dto.SaleDTO;
import com.devsuperior.dsvendas.entities.Sale;
import com.devsuperior.dsvendas.repositories.SaleRepository;
import com.devsuperior.dsvendas.repositories.SellerRepository;

@Service //registrando como sendo um componente do sistema (podendo ser injetado em outros componentes)
public class SaleService {
	
	@Autowired
	private SaleRepository repository;
	
	@Autowired
	private SellerRepository sellerRepository;
	
	@Transactional(readOnly = true) //este argumento faz com tudo do banco seja resolvida AQUI neste Service, e true para não fazer lock no banco
	public Page<SaleDTO> findAll(Pageable pageable){ //adicionando pageable para paginação
		sellerRepository.findAll(); //buscando TODAS as informações e assim deixando em cache (não fazer para quando tiver muitas informações para PERFORMACE!!!!)
		Page<Sale> result = repository.findAll(pageable);
		return result.map(x -> new SaleDTO(x)); //como Page já é um stream, não precisamos do collects!!!
		}

}