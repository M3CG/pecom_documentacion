---
    outline: {
        level: 2
    }
---

# Guia de carga de información

Aqui se muestra como cargar la información con algunos ejemplos. Tambien se muestran otras formas de mostrar los textos en caso que quieramos probar como se verian en la pagina.

En este link te paso el documento que sirvió para armar la pagina "Estandares": [link](https://docs.google.com/document/d/1EE-y0im-bOSgm6VEZTu_Uy1f11Sn6hl3lq7XEBqhV4Q/edit?usp=sharing)

No dudes en consultarme por cualquier inquietud o hacerme sugerencias; voy a estar agradecido de escuchar.

## Buenas practicas

Es una buena practica el dejar un espacio en blanco entre el caracter que indica que texto viene y el texto mismo.

Ejemplo:

| Incorrecto         |             Correcto |
|--------------------|----------------------|
| #Titulo 1          | # Titulo 1           |
| ##Titulo 2         | ## Titulo 2          |

Tambien es bueno el dejar renglones entre un texto y otro.

Ejemplo:

::: danger Asi no

```

# Titulo 1
Parrafo 1
Parrafo 2
- lista sin numeración

```
:::

::: tip Asi si

```

# Titulo 1

Parrafo 1

Parrafo 2

- lista sin numeración

```

:::

Como regla general, si dudamos, entonces dejemos espacio.

## Titulos

Para escribir un titulo, hay que poner entre 1 a 6 numerales al inicio del renglon. Cuantos más numerales haya, menos importante el titulo.

Ejemplo:

```

# Titulo 1

## Titulo 2

### Titulo 3

#### Titulo 4

##### Titulo 5

###### Titulo 6

```

Se ven asi:

# Titulo 1

## Titulo 2

### Titulo 3

#### Titulo 4

##### Titulo 5

###### Titulo 6

## Parrafos

Los parrafos se escriben como normalmente lo hariamos en cualquier documento, pero sin dejar sangria.

Para escribir más de un parrafo, es importante acordarse de dejar un renglon vacio entre ambos, sino en vez de hacer un punto aparte, será reconocido como punto seguido.

## Listas

Podemos escribir listas ordenadas y no ordenadas. Se lo consigue asi:


```

ordenadas:

1. primer item
2. segundo item
3. tercer item

No ordenadas:

- item
- item
- item

```

Esto nos queda asi:

ordenadas:

1. primer item
2. segundo item
3. tercer item

No ordenadas:

- item
- item
- item

## Tablas

una tabla se agrega de la siguiente forma:

```

| Simbolo    | Para que se usa              |
|------------|------------------------------|
| #          | titulos                      |
| -          | listas desordenadas          |
| 1.         | listas ordenadas             |
| >          | dejar una linea vertical al inicio del renglon |

```

Se ve asi:

| Simbolo                      | Para que se usa              |
|------------------------------|------------------------------|
| #                            | titulos                      |
| -                            | listas desordenadas          |
| 1.                           | listas ordenadas             |
| >                            | dejar una linea vertical al inicio del renglon |

## Resaltados

Para resaltar texto podemos rodearlo con simbolos para definir que hacer con el mismo:

| Simbolo | ejemplo |
|---------|---------|
| *       | *cursiva* |
| **      | **negrita**  |
| ***     | ***cursiva y negrita*** |
| ~~       | ~~tachado~~  |
| ~~***    | ~~***cursiva, negrita y tachado***~~ |

Y las otras combinaciones que podamos imaginarnos

## Notas

Las notas se escriben asi:

```

::: info información
Notas de información
:::

::: tip consejos
Notas para dar consejos
:::

::: warning advertencias
Nota de advertencia
:::

::: danger Peligro
nota de peligros
:::

::: details detalles
Un apartado para detallar on lista desplegable
:::

```

Y se ven asi:

::: info información
Notas de información
:::

::: tip consejos
Notas para dar consejos
:::

::: warning advertencias
Nota de advertencia
:::

::: danger Peligro
nota de peligros
:::

::: details detalles
Un apartado para detallar on lista desplegable
:::

## Notas chicas

Las notas chicas funcionan en esta pagina, pero podrian no funcionar en la pagina donde estas probando.

Se escriben asi:
```

<Badge type="info" text="informativa" />
<Badge type="tip" text="consejos" />
<Badge type="warning" text="advertencias" />
<Badge type="danger" text="peligros" />

  ```

  Y se ven asi:

<Badge type="info" text="informativa" />
<Badge type="tip" text="consejos" />
<Badge type="warning" text="advertencias" />
<Badge type="danger" text="peligros" />

(Una al lado de la otra, porque no dejé espacio entre renglones)

## Codigo

Para mostrar un bloque que nos permita copiar el texto, hay que escribir 3 veces un acento invertido (`) (Alt Gr + la tecla al lado de enter) al inicio de nuestro bloque y otra vez al final del mismo. Y nos queda asi:

```
Un espacio donde podemos mostrar texto
de esta forma y tambien copiarlo si
apretamos click en el boton que aparece
cuando pasamos el mouse por encima.

```