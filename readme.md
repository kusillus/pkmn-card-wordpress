# CARTILLA PGL

Cartilla estilo  [Pokemon Global Link](https://3ds.pokemon-gl.com/) para wordpress, los datos del pokemon se ingresan por un JSON el cual se pasa como atributo data-pkmn en un div.

![alt pgl-imagen-web](https://i.imgur.com/L2o2a51.png)

![alt pgl-imagen-responsive](https://i.imgur.com/2Cf2eV7.png)

## USO

npm run build

Primero copia el div **.pkmn-slot** del archivo **index.html** dentro de tu web, luego linkea al archivo **build.js** (que también debe estar dentro de tu web), que generaste con el comando anterior para que se carguen los datos del pokemon.

Para modificar los datos del pokemon te dejo las siguientes indicaciones.


## Indicaciones

1. Los nombres de los tipos de ataque deben ser en ingles y minúscula: water, electric, etc.
2. Para definir que stat potencia y debilita la habilidad de un pokemon escoge entre: stat_ps, stat_att, stat_def, stat_spa, stat_spd, stat_vel.
Ejemplo Modesta: sube (stat_buff:stat_spa), baja(stat_debuff:stat_att)
3. En el genero del pokemon debe ser gender:"F" - femenino, gender"M" - Masculino, gender:"N" - neutro.
4. En los Ev, Iv, Base y total agrega números, si no debe ir EV, déjalo vacío ev_hp:""
5. La imagen del pokemon es su numero en la pokedex nacional poke_img: 382.
6. Personaliza el color de la barra superior color_bar_1, color_bar_2 si no envías un valor se tomaran los colores por defecto.
7. Para la imagen del objeto debes usar el nombre del objeto en ingles separado por "-",  ejemplo "item_img":"light-ball"



Si te gusto sígueme en twitter como [@kusillus](https://twitter.com/kusillus)


