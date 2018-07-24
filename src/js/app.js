// import './style.scss';
import '../css/app.css';

(function(){
	var allTagsPkmn = document.querySelectorAll('.pkmn-slot');
	console.log(allTagsPkmn)
	Object.keys(allTagsPkmn).forEach(function(i){
		// console.log(allTagsPkmn[i].id)
		loadWrapper(allTagsPkmn[i].id)	
	})
	// loadWrapper('pkmn_slot_01')
})(); //end 

function loadWrapper(nametag){
	var wrapperPkmn = '<div class="pkmn-container"><div class="pa2 pkmn_col_principal first"><div class="pkmn-header-card"><div class="flex-align-center"> <svg id="svg2" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" height="30" width="30" viewBox="0 0 256 256"> <metadata id="metadata7"> <rdf:RDF> <cc:Work rdf:about=""> <dc:format>image/svg+xml</dc:format> <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" /> <dc:title/> </cc:Work> </rdf:RDF> </metadata> <path id="mainsymbolpath" style="opacity:0.9;fill:#FFFFFF;fill-opacity:1;stroke:none" d="m 154.54015,127.99605 c 0,14.65791 -11.88258,26.5405 -26.54049,26.5405 -14.65792,0 -26.5405,-11.88259 -26.5405,-26.5405 0,-14.65791 11.88258,-26.5405 26.5405,-26.5405 14.65791,0 26.54049,11.88259 26.54049,26.5405 z M 127.98849,38 C 82.019956,38 44.102136,72.45551 38.65601,116.95141 l 48.360613,0 c 4.858969,-18.07571 21.360667,-31.3734 40.971867,-31.3734 19.6112,0 36.13066,13.29769 40.99488,31.3734 l 48.36062,0 C 211.8949,72.45551 173.95702,38 127.98849,38 z M 38.65601,139.04859 C 44.102136,183.54449 82.019956,218 127.98849,218 c 45.96853,0 83.90641,-34.45551 89.3555,-78.95141 l -48.36062,0 c -4.86422,18.07571 -21.38368,31.37341 -40.99488,31.37341 -19.6112,0 -36.112898,-13.2977 -40.971867,-31.37341 l -48.360613,0 z" /> </svg> <span class="pkmn_name"></span></div><div class="flex-align-center"><div> Lv. <span class="pkmn_lv"></span></div> <span class="pkmn-sex-icon"> <i class="pkmn_img_icon"></i> </span></div></div><div class="pkmn-data-card"><div class="pkmn-left"> <img id="" class="pkm-img" src=""><div class="w_100 pkmn_types"> <span class="pkmn-type ty_1"></span> <span id="ty_2" class="pkmn-type ty_2"></span></div></div><div class="pkmn-right"><div class="pkmn-moves"><div class="pkmn_move move_one"></div><div class="pkmn_move move_two"></div><div class="pkmn_move move_three"></div><div class="pkmn_move move_four"></div></div></div></div><div class="pkmn-items-card"><div class="w_100"><div class="pkmn-ability"><span class="pkmn-title-bold">Habilidad:</span><span class="pl2 pkmn_ability"></span></div><div class="pkmn-item"> <span class="pkmn-title-bold">Objeto:</span><span class="pl2 pkmn_item"></span></div></div><div class="w_80px flex-align-center flex-justify-center pa3"> <img class="pkmn-item-img" src=""></div></div><div class="pkmn-nature"> <span class="pkmn-title-bold">Naturaleza:</span><span class="pl2 pkmn_nature"></span></div></div><div class="pa2 pkmn_col_principal"><div class="pkmn-title-statistics"> <svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" width="25" height="25" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 48 48" style="enable-background:new 0 0 48 48;" xml:space="preserve" inkscape:version="0.91 r13725" sodipodi:docname="new.svg"><metadata id="metadata19"><rdf:RDF><cc:Work rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" /></cc:Work></rdf:RDF></metadata><defs id="defs17" /><sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1" objecttolerance="10" gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2" inkscape:window-width="1920" inkscape:window-height="1017" id="namedview15" showgrid="false" inkscape:zoom="9.44" inkscape:cx="12.5" inkscape:cy="12.5" inkscape:window-x="0" inkscape:window-y="30" inkscape:window-maximized="1" inkscape:current-layer="Layer_1" /><circle style="fill:#ffffff" cx="20.5" cy="20.5" r="3.5" id="circle3" /><path style="fill:#ffffff" d="M44,9.75l-16.069,9.782C30.565,24.115,30.351,28.959,28,34l7,10L44,9.75z" id="path5" /><path style="fill:#ffffff" d="M13.083,21.558C13.034,21.211,13,20.86,13,20.5c0-4.142,3.358-7.5,7.5-7.5 c1.618,0,3.113,0.518,4.339,1.39l7.965-4.857C29.782,6.145,25.397,4,20.5,4C11.387,4,4,11.387,4,20.5 c0,2.089,0.404,4.079,1.112,5.918L13.083,21.558z" id="path7" /><path style="fill:#ffffff" d="M27.931,19.532C27.972,19.849,28,20.171,28,20.5c0,4.142-3.358,7.5-7.5,7.5 c-1.586,0-3.055-0.495-4.267-1.336l-7.98,4.866C11.273,34.881,15.634,37,20.5,37C29.613,37,37,29.613,37,20.5 c0-2.059-0.394-4.021-1.083-5.838L27.931,19.532z" id="path9" /><g id="g11"><path style="fill:#ffffff" d="M37.481,13.718l-1.561,1C36.607,16.533,37,18.493,37,20.549c0,6.165-3.387,11.531-8.396,14.363 l2.167,3.095C35.656,34.579,39,28.146,39,20.917C39,18.456,38.369,16.066,37.481,13.718z" id="path13" /></g> </svg> <span class="title-statistics">Estadisticas y Entrenamiento</span></div><div class="pkmn-stats-card"><table class="pkmn_table_stats" cellspacing="0"><tr><td class=""></td><td class="pkmn-title-bold ta-c ">BASE</td><td class="pkmn-title-bold ta-c ">EVS</td><td class="pkmn-title-bold ta-c ">IVS</td></tr><tr><td class="pkmn-title-bold stat_ps">PS</td><td class="base_ps ta-c"></td><td class="ev_hp ta-c"></td><td class="iv_hp ta-c">01</td></tr><tr><td class="pkmn-title-bold stat_att">Ataque</td><td class="base_att ta-c"></td><td class="ev_att ta-c"></td><td class="iv_att ta-c">01</td></tr><tr><td class="pkmn-title-bold stat_def">Defensa</td><td class="base_def ta-c"></td><td class="ev_def ta-c"></td><td class="iv_def ta-c">01</td></tr><tr><td class="pkmn-title-bold stat_spa">At. Esp</td><td class="base_spa ta-c"></td><td class="ev_spa ta-c"></td><td class="iv_spa ta-c">01</td></tr><tr><td class="pkmn-title-bold stat_spd">Def. Esp</td><td class="base_spd ta-c"></td><td class="ev_spd ta-c"></td><td class="iv_spd ta-c">01</td></tr><tr><td class="pkmn-title-bold bbn stat_vel">Vel.</td><td class="base_vel ta-c bbn"></td><td class="ev_vel ta-c bbn"></td><td class="iv_vel ta-c bbn">01</td></tr></table></div></div></div><div class="pkmn_footer"> Hecho con <i class="icon-footer-like"> <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="10" height="10" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <path style="fill:#D75A4A;" d="M24.85,10.126c2.018-4.783,6.628-8.125,11.99-8.125c7.223,0,12.425,6.179,13.079,13.543 c0,0,0.353,1.828-0.424,5.119c-1.058,4.482-3.545,8.464-6.898,11.503L24.85,48L7.402,32.165c-3.353-3.038-5.84-7.021-6.898-11.503 c-0.777-3.291-0.424-5.119-0.424-5.119C0.734,8.179,5.936,2,13.159,2C18.522,2,22.832,5.343,24.85,10.126z"/> </svg> </i> por <a href="https://kusillus.github.io/kusillus/" target="_blank">kusillus</a></div>';
	var divPkmnTarget = document.getElementById(nametag);
	// divPkmnTarget.innerHTML = wrapperPkmn
	loadPokemon(nametag);






	// loadPokemon('pkmn_slot_01');
}
function loadPokemon(nametag) {
		var el = document.getElementById(nametag);
		var pkmn = JSON.parse(el.dataset.pkmn);
		
		// return
		var genderF = '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="13" height="13" viewBox="0 0 477.141 477.141" style="enable-background:new 0 0 477.141 477.141;" xml:space="preserve"><g><path fill="#C33" d="M326.711,341.99h-64.628v-64.634c0-0.686-0.142-1.323-0.213-1.997c65.409-11.119,115.378-68.161,115.378-136.681	C377.249,62.208,315.044,0,238.571,0C162.103,0,99.892,62.208,99.892,138.678c0,68.521,49.973,125.562,115.375,136.681		c-0.059,0.674-0.204,1.312-0.204,1.997v64.634h-64.631c-12.983,0-23.501,10.527-23.501,23.502c0,12.98,10.518,23.507,23.501,23.507 h64.637v64.64c0,12.98,10.524,23.502,23.501,23.502c12.979,0,23.513-10.527,23.513-23.502v-64.64h64.628		c12.986,0,23.508-10.526,23.508-23.507C350.219,352.518,339.698,341.99,326.711,341.99z M146.904,138.678 c0-50.546,41.121-91.673,91.667-91.673c50.549,0,91.676,41.122,91.676,91.673s-41.127,91.667-91.676,91.667C188.031,230.346,146.904,189.224,146.904,138.678z"/></g></svg>'

		var genderM = '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 462.672 462.672" style="enable-background:new 0 0 462.672 462.672;" xml:space="preserve" width="10" height="10"><g><g><path style="fill:#004689;" d="M167.689,395.964c13.872,0,26.826-2.649,38.862-7.956c12.036-5.304,22.542-12.441,31.519-21.42 c8.975-8.976,16.014-19.479,21.113-31.518c5.1-12.036,7.648-24.99,7.648-38.862c0-13.464-2.551-26.214-7.648-38.25 c-5.102-12.036-12.141-22.542-21.113-31.518c-8.977-8.976-19.482-16.116-31.519-21.42c-12.036-5.304-24.99-7.956-38.862-7.956 c-13.464,0-26.214,2.652-38.25,7.956s-22.542,12.444-31.518,21.42c-8.976,8.976-16.116,19.48-21.42,31.518 c-5.304,12.036-7.956,24.786-7.956,38.25c0,13.872,2.652,26.826,7.956,38.862s12.444,22.542,21.42,31.518 c8.976,8.979,19.482,16.116,31.518,21.42C141.475,393.313,154.225,395.964,167.689,395.964z M460.837,79.56l-0.609-0.612v85.068 c0,8.568-3.063,15.912-9.184,22.032c-6.119,6.12-13.668,9.18-22.643,9.18c-8.568,0-16.32-3.06-23.256-9.18 c-6.121-6.12-9.184-13.464-9.184-22.032v-53.244l-91.188,91.188c9.385,13.464,16.627,28.152,21.727,44.064 c5.102,15.912,7.65,32.64,7.65,50.184c0,22.851-4.387,44.37-13.158,64.566c-8.771,20.193-20.707,37.842-35.803,52.938 c-15.096,15.099-32.742,27.03-52.938,35.805c-20.196,8.771-41.718,13.155-64.566,13.155c-22.848,0-44.37-4.386-64.566-13.155 c-20.196-8.772-37.842-20.706-52.938-35.805c-15.096-15.096-26.928-32.742-35.496-52.938c-8.566-20.196-12.85-41.717-12.85-64.566 c0-22.848,4.284-44.37,12.852-64.566s20.4-37.74,35.496-52.632s32.742-26.724,52.938-35.496s41.718-13.158,64.566-13.158 c17.136,0,33.252,2.346,48.348,7.038c15.096,4.692,29.171,11.322,42.23,19.89l-0.611-0.612l93.021-92.412h-53.854 c-8.979,0-16.32-3.264-22.033-9.792c-3.264-2.856-5.609-6.222-7.037-10.098s-2.143-8.058-2.143-12.546c0-8.976,3.061-16.524,9.18-22.644C280.093,3.06,287.436,0,296.821,0h78.336h20.195h65.483L460.837,79.56L460.837,79.56z"/></g></g></svg>'

		el.querySelectorAll('.pkmn_name')[0].textContent = pkmn.name;
		el.querySelectorAll('.pkmn_lv')[0].textContent = pkmn.level;
		switch(pkmn.gender) {
			case 'M':
				el.querySelectorAll('.pkmn_img_icon')[0].innerHTML= genderM;
				break
			case 'F':
				el.querySelectorAll('.pkmn_img_icon')[0].innerHTML= genderF;
				break
		}
		el.querySelectorAll('.pkmn_item')[0].textContent = pkmn.item;
		el.querySelectorAll('.pkmn-item-img')[0].src = 'https://nouthuca.com/img/item/'+pkmn.item_img+'.png?resize=82%2C74';
		el.querySelectorAll('.pkmn_ability')[0].textContent = pkmn.ability;
		var type1 = validateType(pkmn.type1)
		el.querySelectorAll('.pkmn_nature')[0].textContent = pkmn.nature;
		var type1 = validateType(pkmn.type1)
		el.querySelectorAll('.ty_1')[0].textContent = type1[0];
		el.querySelectorAll('.ty_1')[0].className += ' ' + type1[1];

		// Cuando no tiene segundo tipo se agrega none
		if(pkmn.type2 !== 'none'){
			var type2 = validateType(pkmn.type2)
			el.querySelectorAll('.ty_2')[0].textContent = type2[0];
			el.querySelectorAll('.ty_2')[0].className += ' ' + type2[1];
		} else {
			var delType = document.getElementById('ty_2')
			delType.parentNode.removeChild(delType);
		}

		el.querySelectorAll('.pkm-img')[0].src = 'https://nouthuca.com/img/pgl/'+pkmn.poke_img+'.png';

		// var move1 = validateMove()
		el.querySelectorAll('.move_one')[0].textContent = pkmn.skill1;
		el.querySelectorAll('.move_one')[0].className += ' bt_'+pkmn.skill1_c;

		el.querySelectorAll('.move_two')[0].textContent = pkmn.skill2;
		el.querySelectorAll('.move_two')[0].className += ' bt_'+pkmn.skill2_c;

		el.querySelectorAll('.move_three')[0].textContent = pkmn.skill3;
		el.querySelectorAll('.move_three')[0].className += ' bt_'+pkmn.skill3_c;

		el.querySelectorAll('.move_four')[0].textContent = pkmn.skill4;
		el.querySelectorAll('.move_four')[0].className += ' bt_'+pkmn.skill4_c;

		el.querySelectorAll('.base_ps')[0].textContent = pkmn.hp;
		el.querySelectorAll('.base_att')[0].textContent = pkmn.att;
		el.querySelectorAll('.base_def')[0].textContent = pkmn.def;
		el.querySelectorAll('.base_spa')[0].textContent = pkmn.spa;
		el.querySelectorAll('.base_spd')[0].textContent = pkmn.spd;
		el.querySelectorAll('.base_vel')[0].textContent = pkmn.vel;

		el.querySelectorAll('.ev_hp')[0].textContent = pkmn.ev_hp;
		el.querySelectorAll('.ev_att')[0].textContent = pkmn.ev_att;
		el.querySelectorAll('.ev_def')[0].textContent = pkmn.ev_def;
		el.querySelectorAll('.ev_spa')[0].textContent = pkmn.ev_spa;
		el.querySelectorAll('.ev_spd')[0].textContent = pkmn.ev_spd;
		el.querySelectorAll('.ev_vel')[0].textContent = pkmn.ev_vel;

		el.querySelectorAll('.iv_hp')[0].textContent = pkmn.iv_hp;
		el.querySelectorAll('.iv_att')[0].textContent = pkmn.iv_att;
		el.querySelectorAll('.iv_def')[0].textContent = pkmn.iv_def;
		el.querySelectorAll('.iv_spa')[0].textContent = pkmn.iv_spa;
		el.querySelectorAll('.iv_spd')[0].textContent = pkmn.iv_spd;
		el.querySelectorAll('.iv_vel')[0].textContent = pkmn.iv_vel;

		el.querySelectorAll('.'+pkmn.stat_buff)[0].className += ' buff-color';
		el.querySelectorAll('.'+pkmn.stat_debuff)[0].className += ' debuff-color';
	}

function validateType(pkmn_type){
		switch(pkmn_type){
			case 'normal':
				return ['Normal','c_type_normal']
				break
			case 'fire':
				return ['Fuego','c_type_fire']
				break
			case 'water':
				return ['Agua','c_type_water']
				break
			case 'electric':
				return ['Elect.','c_type_electric']
				break
			case 'grass':
				return ['Planta','c_type_grass']
				break
			case 'ice':
				return ['Hielo','c_type_ice']
				break
			case 'fighting':
				return ['Lucha','c_type_fighting']
				break
			case 'poison':
				return ['Veneno','c_type_poison']
				break
			case 'ground':
				return ['Tierra','c_type_ground']
				break
			case 'flying':
				return ['Volad.','c_type_flying']
				break
			case 'psychic':
				return ['Psiqu.','c_type_psychic']
				break
			case 'bug':
				return ['Bicho','c_type_bug']
				break
			case 'rock':
				return ['Roca','c_type_rock']
				break
			case 'gost':
				return ['Fant.','c_type_gost']
				break
			case 'dragon':
				return ['Dragon','c_type_dragon']
				break
			case 'dark':
				return ['Sinies.','c_type_dark']
				break
			case 'steel':
				return ['Acero','c_type_steel']
				break
			case 'fairy':
				return ['Hada','c_type_fairy']
				break
			default:
				return ['Error', 'c_type_bug']
		}
	}