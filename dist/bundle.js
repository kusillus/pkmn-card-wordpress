!function(t){var e={};function n(o){if(e[o])return e[o].exports;var l=e[o]={i:o,l:!1,exports:{}};return t[o].call(l.exports,l,l.exports,n),l.l=!0,l.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var l in t)n.d(o,l,function(e){return t[e]}.bind(null,l));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/dist",n(n.s=0)}([function(t,e,n){"use strict";function o(t){switch(t){case"normal":return["Normal","c_type_normal"];case"fire":return["Fuego","c_type_fire"];case"water":return["Agua","c_type_water"];case"electric":return["Elect.","c_type_electric"];case"grass":return["Planta","c_type_grass"];case"ice":return["Hielo","c_type_ice"];case"fighting":return["Lucha","c_type_fighting"];case"poison":return["Veneno","c_type_poison"];case"ground":return["Tierra","c_type_ground"];case"flying":return["Volad.","c_type_flying"];case"psychic":return["Psiqu.","c_type_psychic"];case"bug":return["Bicho","c_type_bug"];case"rock":return["Roca","c_type_rock"];case"gost":return["Fant.","c_type_gost"];case"dragon":return["Dragon","c_type_dragon"];case"dark":return["Sinies.","c_type_dark"];case"steel":return["Acero","c_type_steel"];case"fairy":return["Hada","c_type_fairy"];default:return["Error","c_type_bug"]}}n(1),function(){var t=document.querySelectorAll(".pkmn-slot");console.log(t),Object.keys(t).forEach(function(e){!function(t){document.getElementById(t).innerHTML='<div class="pkmn-container"><div class="pa2 pkmn_col_principal first"><div class="pkmn-header-card"><div class="flex-align-center"> <svg id="svg2" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" height="30" width="30" viewBox="0 0 256 256"> <metadata id="metadata7"> <rdf:RDF> <cc:Work rdf:about=""> <dc:format>image/svg+xml</dc:format> <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" /> <dc:title/> </cc:Work> </rdf:RDF> </metadata> <path id="mainsymbolpath" style="opacity:0.9;fill:#FFFFFF;fill-opacity:1;stroke:none" d="m 154.54015,127.99605 c 0,14.65791 -11.88258,26.5405 -26.54049,26.5405 -14.65792,0 -26.5405,-11.88259 -26.5405,-26.5405 0,-14.65791 11.88258,-26.5405 26.5405,-26.5405 14.65791,0 26.54049,11.88259 26.54049,26.5405 z M 127.98849,38 C 82.019956,38 44.102136,72.45551 38.65601,116.95141 l 48.360613,0 c 4.858969,-18.07571 21.360667,-31.3734 40.971867,-31.3734 19.6112,0 36.13066,13.29769 40.99488,31.3734 l 48.36062,0 C 211.8949,72.45551 173.95702,38 127.98849,38 z M 38.65601,139.04859 C 44.102136,183.54449 82.019956,218 127.98849,218 c 45.96853,0 83.90641,-34.45551 89.3555,-78.95141 l -48.36062,0 c -4.86422,18.07571 -21.38368,31.37341 -40.99488,31.37341 -19.6112,0 -36.112898,-13.2977 -40.971867,-31.37341 l -48.360613,0 z" /> </svg> <span class="pkmn_name"></span></div><div class="flex-align-center"><div> Lv. <span class="pkmn_lv"></span></div> <span class="pkmn-sex-icon"> <i class="pkmn_img_icon"></i> </span></div></div><div class="pkmn-data-card"><div class="pkmn-left"> <img id="" class="pkm-img" src=""><div class="w_100 pkmn_types"> <span class="pkmn-type ty_1"></span> <span id="ty_2" class="pkmn-type ty_2"></span></div></div><div class="pkmn-right"><div class="pkmn-moves"><div class="pkmn_move move_one"></div><div class="pkmn_move move_two"></div><div class="pkmn_move move_three"></div><div class="pkmn_move move_four"></div></div></div></div><div class="pkmn-items-card"><div class="w_100"><div class="pkmn-ability"><span class="pkmn-title-bold">Habilidad:</span><span class="pl2 pkmn_ability"></span></div><div class="pkmn-item"> <span class="pkmn-title-bold">Objeto:</span><span class="pl2 pkmn_item"></span></div></div><div class="w_80px flex-align-center flex-justify-center pa3"> <img class="pkmn-item-img" src=""></div></div><div class="pkmn-nature"> <span class="pkmn-title-bold">Naturaleza:</span><span class="pl2 pkmn_nature"></span></div></div><div class="pa2 pkmn_col_principal"><div class="pkmn-title-statistics"> <svg xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:cc="http://creativecommons.org/ns#" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:svg="http://www.w3.org/2000/svg" xmlns="http://www.w3.org/2000/svg" xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd" xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape" width="25" height="25" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 48 48" style="enable-background:new 0 0 48 48;" xml:space="preserve" inkscape:version="0.91 r13725" sodipodi:docname="new.svg"> <metadata id="metadata19"> <rdf:RDF> <cc:Work rdf:about=""> <dc:format>image/svg+xml</dc:format> <dc:type rdf:resource="http://purl.org/dc/dcmitype/StillImage" /> </cc:Work> </rdf:RDF> </metadata> <defs id="defs17" /> <sodipodi:namedview pagecolor="#ffffff" bordercolor="#666666" borderopacity="1" objecttolerance="10" gridtolerance="10" guidetolerance="10" inkscape:pageopacity="0" inkscape:pageshadow="2" inkscape:window-width="1920" inkscape:window-height="1017" id="namedview15" showgrid="false" inkscape:zoom="9.44" inkscape:cx="12.5" inkscape:cy="12.5" inkscape:window-x="0" inkscape:window-y="30" inkscape:window-maximized="1" inkscape:current-layer="Layer_1" /> <circle style="fill:#ffffff" cx="20.5" cy="20.5" r="3.5" id="circle3" /> <path style="fill:#ffffff" d="M44,9.75l-16.069,9.782C30.565,24.115,30.351,28.959,28,34l7,10L44,9.75z" id="path5" /> <path style="fill:#ffffff" d="M13.083,21.558C13.034,21.211,13,20.86,13,20.5c0-4.142,3.358-7.5,7.5-7.5 c1.618,0,3.113,0.518,4.339,1.39l7.965-4.857C29.782,6.145,25.397,4,20.5,4C11.387,4,4,11.387,4,20.5 c0,2.089,0.404,4.079,1.112,5.918L13.083,21.558z" id="path7" /> <path style="fill:#ffffff" d="M27.931,19.532C27.972,19.849,28,20.171,28,20.5c0,4.142-3.358,7.5-7.5,7.5 c-1.586,0-3.055-0.495-4.267-1.336l-7.98,4.866C11.273,34.881,15.634,37,20.5,37C29.613,37,37,29.613,37,20.5 c0-2.059-0.394-4.021-1.083-5.838L27.931,19.532z" id="path9" /> <g id="g11"> <path style="fill:#ffffff" d="M37.481,13.718l-1.561,1C36.607,16.533,37,18.493,37,20.549c0,6.165-3.387,11.531-8.396,14.363 l2.167,3.095C35.656,34.579,39,28.146,39,20.917C39,18.456,38.369,16.066,37.481,13.718z" id="path13" /> </g> </svg> <span class="title-statistics">Estadisticas y Entrenamiento</span></div><div class="pkmn-stats-card"><table class="pkmn_table_stats" cellspacing="0"><tr><td class=""></td><td class="pkmn-title-bold ta-c ">BASE</td><td class="pkmn-title-bold ta-c ">IVS</td><td class="pkmn-title-bold ta-c ">EVS</td><td class="pkmn-title-bold ta-c ">FINAL</td></tr><tr><td class="pkmn-title-bold stat_ps">PS</td><td class="base_ps ta-c"></td><td class="iv_hp ta-c"></td><td class="ev_hp ta-c"></td><td class="final_hp ta-c"></td></tr><tr><td class="pkmn-title-bold stat_att">Ataque</td><td class="base_att ta-c"></td><td class="iv_att ta-c"></td><td class="ev_att ta-c"></td><td class="final_att ta-c"></td></tr><tr><td class="pkmn-title-bold stat_def">Defensa</td><td class="base_def ta-c"></td><td class="iv_def ta-c"></td><td class="ev_def ta-c"></td><td class="final_def ta-c"></td></tr><tr><td class="pkmn-title-bold stat_spa">At. Esp</td><td class="base_spa ta-c"></td><td class="iv_spa ta-c"></td><td class="ev_spa ta-c"></td><td class="final_spa ta-c"></td></tr><tr><td class="pkmn-title-bold stat_spd">Def. Esp</td><td class="base_spd ta-c"></td><td class="iv_spd ta-c"></td><td class="ev_spd ta-c"></td><td class="final_spd ta-c"></td></tr><tr><td class="pkmn-title-bold bbn stat_vel">Vel.</td><td class="base_vel ta-c bbn"></td><td class="iv_vel ta-c bbn"></td><td class="ev_vel ta-c bbn"></td><td class="final_vel ta-c bbn"></td></tr></table></div></div></div><div class="pkmn_footer"> Hecho con <i class="icon-footer-like"> <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="10" height="10" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <path style="fill:#D75A4A;" d="M24.85,10.126c2.018-4.783,6.628-8.125,11.99-8.125c7.223,0,12.425,6.179,13.079,13.543 c0,0,0.353,1.828-0.424,5.119c-1.058,4.482-3.545,8.464-6.898,11.503L24.85,48L7.402,32.165c-3.353-3.038-5.84-7.021-6.898-11.503 c-0.777-3.291-0.424-5.119-0.424-5.119C0.734,8.179,5.936,2,13.159,2C18.522,2,22.832,5.343,24.85,10.126z"/> </svg> </i> por <a href="https://kusillus.github.io/kusillus/" target="_blank">kusillus</a></div>',function(t){var e=document.getElementById(t),n=JSON.parse(e.dataset.pkmn);switch(e.querySelectorAll(".pkmn_name")[0].textContent=n.name,e.querySelectorAll(".pkmn_lv")[0].textContent=n.level,n.gender){case"M":e.querySelectorAll(".pkmn_img_icon")[0].innerHTML='<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 462.672 462.672" style="enable-background:new 0 0 462.672 462.672;" xml:space="preserve" width="10" height="10"><g><g><path style="fill:#004689;" d="M167.689,395.964c13.872,0,26.826-2.649,38.862-7.956c12.036-5.304,22.542-12.441,31.519-21.42 c8.975-8.976,16.014-19.479,21.113-31.518c5.1-12.036,7.648-24.99,7.648-38.862c0-13.464-2.551-26.214-7.648-38.25 c-5.102-12.036-12.141-22.542-21.113-31.518c-8.977-8.976-19.482-16.116-31.519-21.42c-12.036-5.304-24.99-7.956-38.862-7.956 c-13.464,0-26.214,2.652-38.25,7.956s-22.542,12.444-31.518,21.42c-8.976,8.976-16.116,19.48-21.42,31.518 c-5.304,12.036-7.956,24.786-7.956,38.25c0,13.872,2.652,26.826,7.956,38.862s12.444,22.542,21.42,31.518 c8.976,8.979,19.482,16.116,31.518,21.42C141.475,393.313,154.225,395.964,167.689,395.964z M460.837,79.56l-0.609-0.612v85.068 c0,8.568-3.063,15.912-9.184,22.032c-6.119,6.12-13.668,9.18-22.643,9.18c-8.568,0-16.32-3.06-23.256-9.18 c-6.121-6.12-9.184-13.464-9.184-22.032v-53.244l-91.188,91.188c9.385,13.464,16.627,28.152,21.727,44.064 c5.102,15.912,7.65,32.64,7.65,50.184c0,22.851-4.387,44.37-13.158,64.566c-8.771,20.193-20.707,37.842-35.803,52.938 c-15.096,15.099-32.742,27.03-52.938,35.805c-20.196,8.771-41.718,13.155-64.566,13.155c-22.848,0-44.37-4.386-64.566-13.155 c-20.196-8.772-37.842-20.706-52.938-35.805c-15.096-15.096-26.928-32.742-35.496-52.938c-8.566-20.196-12.85-41.717-12.85-64.566 c0-22.848,4.284-44.37,12.852-64.566s20.4-37.74,35.496-52.632s32.742-26.724,52.938-35.496s41.718-13.158,64.566-13.158 c17.136,0,33.252,2.346,48.348,7.038c15.096,4.692,29.171,11.322,42.23,19.89l-0.611-0.612l93.021-92.412h-53.854 c-8.979,0-16.32-3.264-22.033-9.792c-3.264-2.856-5.609-6.222-7.037-10.098s-2.143-8.058-2.143-12.546c0-8.976,3.061-16.524,9.18-22.644C280.093,3.06,287.436,0,296.821,0h78.336h20.195h65.483L460.837,79.56L460.837,79.56z"/></g></g></svg>';break;case"F":e.querySelectorAll(".pkmn_img_icon")[0].innerHTML='<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="13" height="13" viewBox="0 0 477.141 477.141" style="enable-background:new 0 0 477.141 477.141;" xml:space="preserve"><g><path fill="#C33" d="M326.711,341.99h-64.628v-64.634c0-0.686-0.142-1.323-0.213-1.997c65.409-11.119,115.378-68.161,115.378-136.681\tC377.249,62.208,315.044,0,238.571,0C162.103,0,99.892,62.208,99.892,138.678c0,68.521,49.973,125.562,115.375,136.681\t\tc-0.059,0.674-0.204,1.312-0.204,1.997v64.634h-64.631c-12.983,0-23.501,10.527-23.501,23.502c0,12.98,10.518,23.507,23.501,23.507 h64.637v64.64c0,12.98,10.524,23.502,23.501,23.502c12.979,0,23.513-10.527,23.513-23.502v-64.64h64.628\t\tc12.986,0,23.508-10.526,23.508-23.507C350.219,352.518,339.698,341.99,326.711,341.99z M146.904,138.678 c0-50.546,41.121-91.673,91.667-91.673c50.549,0,91.676,41.122,91.676,91.673s-41.127,91.667-91.676,91.667C188.031,230.346,146.904,189.224,146.904,138.678z"/></g></svg>'}e.querySelectorAll(".pkmn_item")[0].textContent=n.item,e.querySelectorAll(".pkmn-item-img")[0].src="https://nouthuca.com/img/item/"+n.item_img+".png?resize=82%2C74",e.querySelectorAll(".pkmn_ability")[0].textContent=n.ability;var l=o(n.type1);e.querySelectorAll(".pkmn_nature")[0].textContent=n.nature;var l=o(n.type1);if(e.querySelectorAll(".ty_1")[0].textContent=l[0],e.querySelectorAll(".ty_1")[0].className+=" "+l[1],"none"!==n.type2){var s=o(n.type2);e.querySelectorAll(".ty_2")[0].textContent=s[0],e.querySelectorAll(".ty_2")[0].className+=" "+s[1]}else{var r=document.getElementById("ty_2");r.parentNode.removeChild(r)}e.querySelectorAll(".pkm-img")[0].src="https://nouthuca.com/img/pgl/"+n.poke_img+".png",e.querySelectorAll(".move_one")[0].textContent=n.skill1,e.querySelectorAll(".move_one")[0].className+=" bt_"+n.skill1_c,e.querySelectorAll(".move_two")[0].textContent=n.skill2,e.querySelectorAll(".move_two")[0].className+=" bt_"+n.skill2_c,e.querySelectorAll(".move_three")[0].textContent=n.skill3,e.querySelectorAll(".move_three")[0].className+=" bt_"+n.skill3_c,e.querySelectorAll(".move_four")[0].textContent=n.skill4,e.querySelectorAll(".move_four")[0].className+=" bt_"+n.skill4_c,e.querySelectorAll(".base_ps")[0].textContent=n.hp,e.querySelectorAll(".base_att")[0].textContent=n.att,e.querySelectorAll(".base_def")[0].textContent=n.def,e.querySelectorAll(".base_spa")[0].textContent=n.spa,e.querySelectorAll(".base_spd")[0].textContent=n.spd,e.querySelectorAll(".base_vel")[0].textContent=n.vel,e.querySelectorAll(".ev_hp")[0].textContent=n.ev_hp,e.querySelectorAll(".ev_att")[0].textContent=n.ev_att,e.querySelectorAll(".ev_def")[0].textContent=n.ev_def,e.querySelectorAll(".ev_spa")[0].textContent=n.ev_spa,e.querySelectorAll(".ev_spd")[0].textContent=n.ev_spd,e.querySelectorAll(".ev_vel")[0].textContent=n.ev_vel,e.querySelectorAll(".iv_hp")[0].textContent=n.iv_hp,e.querySelectorAll(".iv_att")[0].textContent=n.iv_att,e.querySelectorAll(".iv_def")[0].textContent=n.iv_def,e.querySelectorAll(".iv_spa")[0].textContent=n.iv_spa,e.querySelectorAll(".iv_spd")[0].textContent=n.iv_spd,e.querySelectorAll(".iv_vel")[0].textContent=n.iv_vel,e.querySelectorAll(".final_hp")[0].textContent=n.final_hp,e.querySelectorAll(".final_att")[0].textContent=n.final_att,e.querySelectorAll(".final_def")[0].textContent=n.final_def,e.querySelectorAll(".final_spa")[0].textContent=n.final_spa,e.querySelectorAll(".final_spd")[0].textContent=n.final_spd,e.querySelectorAll(".final_vel")[0].textContent=n.final_vel,e.querySelectorAll("."+n.stat_buff)[0].className+=" buff-color",e.querySelectorAll("."+n.stat_debuff)[0].className+=" debuff-color",e.querySelectorAll(".pkmn-header-card")[0].style.background=n.color_bar_1,e.querySelectorAll(".pkmn-title-statistics")[0].style.background=n.color_bar_2}(t)}(t[e].id)})}()},function(t,e,n){var o=n(2);"string"==typeof o&&(o=[[t.i,o,""]]);var l={hmr:!0,transform:void 0,insertInto:void 0};n(4)(o,l);o.locals&&(t.exports=o.locals)},function(t,e,n){(t.exports=n(3)(!1)).push([t.i,"body{font-family:Arial, Helvetica, sans-serif}.pkmn-slot{line-height:15px;max-width:600px}.pkmn-slot div,.pkmn-slot span,.pkmn-slot applet,.pkmn-slot object,.pkmn-slot iframe,.pkmn-slot h1,.pkmn-slot h2,.pkmn-slot h3,.pkmn-slot h4,.pkmn-slot h5,.pkmn-slot h6,.pkmn-slot p,.pkmn-slot blockquote,.pkmn-slot pre,.pkmn-slot a,.pkmn-slot abbr,.pkmn-slot acronym,.pkmn-slot address,.pkmn-slot big,.pkmn-slot cite,.pkmn-slot code,.pkmn-slot del,.pkmn-slot dfn,.pkmn-slot em,.pkmn-slot img,.pkmn-slot ins,.pkmn-slot kbd,.pkmn-slot q,.pkmn-slot s,.pkmn-slot samp,.pkmn-slot small,.pkmn-slot strike,.pkmn-slot strong,.pkmn-slot sub,.pkmn-slot sup,.pkmn-slot tt,.pkmn-slot var,.pkmn-slot b,.pkmn-slot u,.pkmn-slot i,.pkmn-slot center,.pkmn-slot dl,.pkmn-slot dt,.pkmn-slot dd,.pkmn-slot ol,.pkmn-slot ul,.pkmn-slot li,.pkmn-slot fieldset,.pkmn-slot form,.pkmn-slot label,.pkmn-slot legend,.pkmn-slot table,.pkmn-slot caption,.pkmn-slot tbody,.pkmn-slot tfoot,.pkmn-slot thead,.pkmn-slot tr,.pkmn-slot th,.pkmn-slot td,.pkmn-slot article,.pkmn-slot aside,.pkmn-slot canvas,.pkmn-slot details,.pkmn-slot embed,.pkmn-slot figure,.pkmn-slot figcaption,.pkmn-slot footer,.pkmn-slot header,.pkmn-slot hgroup,.pkmn-slot menu,.pkmn-slot nav,.pkmn-slot output,.pkmn-slot ruby,.pkmn-slot section,.pkmn-slot summary,.pkmn-slot time,.pkmn-slot mark,.pkmn-slot audio,.pkmn-slot video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}.pkmn-slot table,.pkmn-slot caption,.pkmn-slot tbody,.pkmn-slot tfoot,.pkmn-slot thead,.pkmn-slot tr,.pkmn-slot th,.pkmn-slot td{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline}.pkmn-slot table{border-collapse:collapse;border-spacing:0}.pkmn-slot .pkmn-container{background:#F6F6F6;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap}.pkmn-slot .pkmn-header-card{width:100%;background-color:#EE5736;color:#fff;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;padding:4px 10px;-webkit-box-sizing:border-box;box-sizing:border-box;margin-bottom:8px}.pkmn-slot .pkmn-header-card .pkmn-sex-icon{height:100%;background:white;width:15px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;justify-content:center;position:relative;padding-right:5px;margin-left:13px}.pkmn-slot .pkmn-header-card .pkmn-sex-icon::before{content:'';position:absolute;left:-13px;border:solid;border-color:transparent #fff transparent transparent;border-width:30px 13px 0px 0px}.pkmn-slot .pkm-img{width:100px;background:white;border:solid 1px #CCC;-webkit-box-sizing:border-box;box-sizing:border-box;padding:8px;maegin-bottom:1px;height:101px}.pkmn-slot .flex-align-center{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.pkmn-slot .pa3{padding:0 10px}.pkmn-slot .pa2{padding:5px}.pkmn-slot .pkmn_types{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around}.pkmn-slot .pkmn-type{font-size:10px;-webkit-border-radius:4px;border-radius:4px;padding:2px 7px;-webkit-box-sizing:border-box;box-sizing:border-box;color:#fff}.pkmn-slot .pkmn-data-card{padding:0 0 5px 0;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-flow:row wrap;-ms-flex-flow:row wrap;flex-flow:row wrap}.pkmn-slot .pkmn-moves{padding-left:5px}.pkmn-slot .pkmn-moves .pkmn_move{font-weight:bold;font-size:12px;padding:5px;margin-top:1px;border-bottom:solid 1px #CCC}.pkmn-slot .pkmn-moves .pkmn_move:first-child{border-top:solid 1px #CCC;margin-top:0}.pkmn-slot .pkmn-right{width:-webkit-calc(100% - 100px);width:calc(100% - 100px)}.pkmn-slot .pkmn_table_stats{width:100%}.pkmn-slot .pkmn-nature{border:solid 1px #ccc;font-size:12px;padding:5px;border-top:none}.pkmn-slot .pkmn-items-card{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;border:solid 1px #ccc}.pkmn-slot .pkmn-items-card .pkmn-ability,.pkmn-slot .pkmn-items-card .pkmn-item{font-size:12px;padding:5px}.pkmn-slot .pkmn-items-card .pkmn-ability{border-right:solid 1px #ccc;border-bottom:solid 1px #ccc}.pkmn-slot .pkmn-items-card .pkmn-item-img{width:40px}.pkmn-slot .pkmn-title-bold{font-weight:bold;color:#565656}.pkmn-slot .pl2{padding-left:5px}.pkmn-slot .bt_normal{border-right:solid 4px #aa9}.pkmn-slot .bt_fire{border-right:solid 4px #f42}.pkmn-slot .bt_water{border-right:solid 4px #39f}.pkmn-slot .bt_electric{border-right:solid 4px #fc3}.pkmn-slot .bt_grass{border-right:solid 4px #7c5}.pkmn-slot .bt_ice{border-right:solid 4px #6cf}.pkmn-slot .bt_fighting{border-right:solid 4px #b54}.pkmn-slot .bt_poison{border-right:solid 4px #a59}.pkmn-slot .bt_ground{border-right:solid 4px #db5}.pkmn-slot .bt_flying{border-right:solid 4px #89f}.pkmn-slot .bt_psychic{border-right:solid 4px #f59}.pkmn-slot .bt_bug{border-right:solid 4px #ab2}.pkmn-slot .bt_rock{border-right:solid 4px #ba6}.pkmn-slot .bt_gost{border-right:solid 4px #66b}.pkmn-slot .bt_dragon{border-right:solid 4px #76e}.pkmn-slot .bt_dark{border-right:solid 4px #754}.pkmn-slot .bt_steel{border-right:solid 4px #aab}.pkmn-slot .bt_fairy{border-right:solid 4px #e9e}.pkmn-slot .c_type_normal{background-color:#aa9}.pkmn-slot .c_type_fire{background-color:#f42}.pkmn-slot .c_type_water{background-color:#39f}.pkmn-slot .c_type_electric{background-color:#fc3}.pkmn-slot .c_type_grass{background-color:#7c5}.pkmn-slot .c_type_ice{background-color:#6cf}.pkmn-slot .c_type_fighting{background-color:#b54}.pkmn-slot .c_type_poison{background-color:#a59}.pkmn-slot .c_type_ground{background-color:#db5}.pkmn-slot .c_type_flying{background-color:#89f}.pkmn-slot .c_type_psychic{background-color:#f59}.pkmn-slot .c_type_bug{background-color:#ab2}.pkmn-slot .c_type_rock{background-color:#ba6}.pkmn-slot .c_type_gost{background-color:#66b}.pkmn-slot .c_type_dragon{background-color:#76e}.pkmn-slot .c_type_dark{background-color:#754}.pkmn-slot .c_type_steel{background-color:#aab}.pkmn-slot .c_type_fairy{background-color:#e9e}.pkmn-slot .pkmn-stats-card{font-size:12px;border:solid 1px #ccc;padding:5px}.pkmn-slot .pkmn-stats-card .pkmn_table_stats .ta-c{text-align:center}.pkmn-slot .pkmn-stats-card .pkmn_table_stats td{padding:6px;border-bottom:solid 1px #ccc}.pkmn-slot .pkmn-stats-card .pkmn_table_stats.title_stats div:first-child{height:14px}.pkmn-slot .pkmn-stats-card .pkmn_table_stats .bbn{border-bottom:none}.pkmn-slot .pkmn-title-statistics{font-size:16px;color:#fff;padding:7px 5px 6px;border-bottom:solid 2px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;background-color:#753FB5;margin-bottom:5px}.pkmn-slot .w_100{width:100%}.pkmn-slot .w_80px{width:80px}.pkmn-slot .t_right{text-align:right}.pkmn-slot .title_stats{width:150px}.pkmn-slot .pkmn_name,.pkmn-slot .title-statistics{margin-left:10px}.pkmn-slot .pkmn_footer{font-size:10px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end;background:#F6F6F6;padding:10px}.pkmn-slot .pkmn_footer a{margin-left:3px;text-decoration:none;color:#753FB5}.pkmn-slot .pkmn_footer img{margin:0 3px}.pkmn-slot .pkmn_col_principal{width:50%;-webkit-box-sizing:border-box;box-sizing:border-box}.pkmn-slot .buff-color{color:#39f !important}.pkmn-slot .debuff-color{color:#f42 !important}.pkmn-slot .pkmn_col .ev{height:14px}.pkmn-slot .flex-justify-center{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.pkmn-slot .icon-footer-like{margin:0 5px}@media screen and (max-width: 550px){.pkmn-slot .pkmn_col_principal{width:100%;-webkit-box-sizing:border-box;box-sizing:border-box}}\n",""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var l=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(o),s=o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"});return[n].concat(s).concat([l]).join("\n")}return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},l=0;l<this.length;l++){var s=this[l][0];"number"==typeof s&&(o[s]=!0)}for(l=0;l<t.length;l++){var r=t[l];"number"==typeof r[0]&&o[r[0]]||(n&&!r[2]?r[2]=n:n&&(r[2]="("+r[2]+") and ("+n+")"),e.push(r))}},e}},function(t,e,n){var o={},l=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),s=function(t){var e={};return function(t){if("function"==typeof t)return t();if(void 0===e[t]){var n=function(t){return document.querySelector(t)}.call(this,t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}}(),r=null,i=0,a=[],p=n(5);function c(t,e){for(var n=0;n<t.length;n++){var l=t[n],s=o[l.id];if(s){s.refs++;for(var r=0;r<s.parts.length;r++)s.parts[r](l.parts[r]);for(;r<l.parts.length;r++)s.parts.push(u(l.parts[r],e))}else{var i=[];for(r=0;r<l.parts.length;r++)i.push(u(l.parts[r],e));o[l.id]={id:l.id,refs:1,parts:i}}}}function d(t,e){for(var n=[],o={},l=0;l<t.length;l++){var s=t[l],r=e.base?s[0]+e.base:s[0],i={css:s[1],media:s[2],sourceMap:s[3]};o[r]?o[r].parts.push(i):n.push(o[r]={id:r,parts:[i]})}return n}function m(t,e){var n=s(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=a[a.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),a.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var l=s(t.insertInto+" "+t.insertAt.before);n.insertBefore(e,l)}}function f(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=a.indexOf(t);e>=0&&a.splice(e,1)}function k(t){var e=document.createElement("style");return void 0===t.attrs.type&&(t.attrs.type="text/css"),b(e,t.attrs),m(t,e),e}function b(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function u(t,e){var n,o,l,s;if(e.transform&&t.css){if(!(s=e.transform(t.css)))return function(){};t.css=s}if(e.singleton){var a=i++;n=r||(r=k(e)),o=g.bind(null,n,a,!1),l=g.bind(null,n,a,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",b(e,t.attrs),m(t,e),e}(e),o=function(t,e,n){var o=n.css,l=n.sourceMap,s=void 0===e.convertToAbsoluteUrls&&l;(e.convertToAbsoluteUrls||s)&&(o=p(o));l&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(l))))+" */");var r=new Blob([o],{type:"text/css"}),i=t.href;t.href=URL.createObjectURL(r),i&&URL.revokeObjectURL(i)}.bind(null,n,e),l=function(){f(n),n.href&&URL.revokeObjectURL(n.href)}):(n=k(e),o=function(t,e){var n=e.css,o=e.media;o&&t.setAttribute("media",o);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),l=function(){f(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else l()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=l()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=d(t,e);return c(n,e),function(t){for(var l=[],s=0;s<n.length;s++){var r=n[s];(i=o[r.id]).refs--,l.push(i)}t&&c(d(t,e),e);for(s=0;s<l.length;s++){var i;if(0===(i=l[s]).refs){for(var a=0;a<i.parts.length;a++)i.parts[a]();delete o[i.id]}}}};var x=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function g(t,e,n,o){var l=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=x(e,l);else{var s=document.createTextNode(l),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(s,r[e]):t.appendChild(s)}}},function(t,e,n){"use strict";t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,o=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var l,s=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(s)?t:(l=0===s.indexOf("//")?s:0===s.indexOf("/")?n+s:o+s.replace(/^\.\//,""),"url("+JSON.stringify(l)+")")})}}]);