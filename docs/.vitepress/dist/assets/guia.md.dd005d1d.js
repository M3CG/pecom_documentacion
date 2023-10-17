import{_ as n,C as l,o,c as t,H as s,Q as e}from"./chunks/framework.385ac4c3.js";const v=JSON.parse('{"title":"Guia de carga de información","description":"","frontmatter":{"outline":{"level":2}},"headers":[],"relativePath":"guia.md","filePath":"guia.md"}'),p={name:"guia.md"},i=e(`<h1 id="guia-de-carga-de-informacion" tabindex="-1">Guia de carga de información <a class="header-anchor" href="#guia-de-carga-de-informacion" aria-label="Permalink to &quot;Guia de carga de información&quot;">​</a></h1><p>Aqui se muestra como cargar la información con algunos ejemplos. Tambien se muestran otras formas de mostrar los textos en caso que quieramos probar como se verian en la pagina.</p><p>En este link te paso el documento que sirvió para armar la pagina &quot;Estandares&quot;: <a href="https://docs.google.com/document/d/1EE-y0im-bOSgm6VEZTu_Uy1f11Sn6hl3lq7XEBqhV4Q/edit?usp=sharing" target="_blank" rel="noreferrer">link</a></p><p>No dudes en consultarme por cualquier inquietud o hacerme sugerencias; voy a estar agradecido de escuchar.</p><h2 id="buenas-practicas" tabindex="-1">Buenas practicas <a class="header-anchor" href="#buenas-practicas" aria-label="Permalink to &quot;Buenas practicas&quot;">​</a></h2><p>Es una buena practica el dejar un espacio en blanco entre el caracter que indica que texto viene y el texto mismo.</p><p>Ejemplo:</p><table><thead><tr><th>Incorrecto</th><th>Correcto</th></tr></thead><tbody><tr><td>#Titulo 1</td><td># Titulo 1</td></tr><tr><td>##Titulo 2</td><td>## Titulo 2</td></tr></tbody></table><p>Tambien es bueno el dejar renglones entre un texto y otro.</p><p>Ejemplo:</p><div class="danger custom-block"><p class="custom-block-title">Asi no</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># Titulo 1</span></span>
<span class="line"><span style="color:#e1e4e8;">Parrafo 1</span></span>
<span class="line"><span style="color:#e1e4e8;">Parrafo 2</span></span>
<span class="line"><span style="color:#e1e4e8;">- lista sin numeración</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># Titulo 1</span></span>
<span class="line"><span style="color:#24292e;">Parrafo 1</span></span>
<span class="line"><span style="color:#24292e;">Parrafo 2</span></span>
<span class="line"><span style="color:#24292e;">- lista sin numeración</span></span></code></pre></div></div><div class="tip custom-block"><p class="custom-block-title">Asi si</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># Titulo 1</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Parrafo 1</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">Parrafo 2</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">- lista sin numeración</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># Titulo 1</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Parrafo 1</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">Parrafo 2</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">- lista sin numeración</span></span></code></pre></div></div><p>Como regla general, si dudamos, entonces dejemos espacio.</p><h2 id="titulos" tabindex="-1">Titulos <a class="header-anchor" href="#titulos" aria-label="Permalink to &quot;Titulos&quot;">​</a></h2><p>Para escribir un titulo, hay que poner entre 1 a 6 numerales al inicio del renglon. Cuantos más numerales haya, menos importante el titulo.</p><p>Ejemplo:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;"># Titulo 1</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">## Titulo 2</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">### Titulo 3</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">#### Titulo 4</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">##### Titulo 5</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">###### Titulo 6</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;"># Titulo 1</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">## Titulo 2</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">### Titulo 3</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">#### Titulo 4</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">##### Titulo 5</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">###### Titulo 6</span></span></code></pre></div><p>Se ven asi:</p><h1 id="titulo-1" tabindex="-1">Titulo 1 <a class="header-anchor" href="#titulo-1" aria-label="Permalink to &quot;Titulo 1&quot;">​</a></h1><h2 id="titulo-2" tabindex="-1">Titulo 2 <a class="header-anchor" href="#titulo-2" aria-label="Permalink to &quot;Titulo 2&quot;">​</a></h2><h3 id="titulo-3" tabindex="-1">Titulo 3 <a class="header-anchor" href="#titulo-3" aria-label="Permalink to &quot;Titulo 3&quot;">​</a></h3><h4 id="titulo-4" tabindex="-1">Titulo 4 <a class="header-anchor" href="#titulo-4" aria-label="Permalink to &quot;Titulo 4&quot;">​</a></h4><h5 id="titulo-5" tabindex="-1">Titulo 5 <a class="header-anchor" href="#titulo-5" aria-label="Permalink to &quot;Titulo 5&quot;">​</a></h5><h6 id="titulo-6" tabindex="-1">Titulo 6 <a class="header-anchor" href="#titulo-6" aria-label="Permalink to &quot;Titulo 6&quot;">​</a></h6><h2 id="parrafos" tabindex="-1">Parrafos <a class="header-anchor" href="#parrafos" aria-label="Permalink to &quot;Parrafos&quot;">​</a></h2><p>Los parrafos se escriben como normalmente lo hariamos en cualquier documento, pero sin dejar sangria.</p><p>Para escribir más de un parrafo, es importante acordarse de dejar un renglon vacio entre ambos, sino en vez de hacer un punto aparte, será reconocido como punto seguido.</p><h2 id="listas" tabindex="-1">Listas <a class="header-anchor" href="#listas" aria-label="Permalink to &quot;Listas&quot;">​</a></h2><p>Podemos escribir listas ordenadas y no ordenadas. Se lo consigue asi:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">ordenadas:</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">1. primer item</span></span>
<span class="line"><span style="color:#e1e4e8;">2. segundo item</span></span>
<span class="line"><span style="color:#e1e4e8;">3. tercer item</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">No ordenadas:</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">- item</span></span>
<span class="line"><span style="color:#e1e4e8;">- item</span></span>
<span class="line"><span style="color:#e1e4e8;">- item</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">ordenadas:</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">1. primer item</span></span>
<span class="line"><span style="color:#24292e;">2. segundo item</span></span>
<span class="line"><span style="color:#24292e;">3. tercer item</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">No ordenadas:</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">- item</span></span>
<span class="line"><span style="color:#24292e;">- item</span></span>
<span class="line"><span style="color:#24292e;">- item</span></span></code></pre></div><p>Esto nos queda asi:</p><p>ordenadas:</p><ol><li>primer item</li><li>segundo item</li><li>tercer item</li></ol><p>No ordenadas:</p><ul><li>item</li><li>item</li><li>item</li></ul><h2 id="tablas" tabindex="-1">Tablas <a class="header-anchor" href="#tablas" aria-label="Permalink to &quot;Tablas&quot;">​</a></h2><p>una tabla se agrega de la siguiente forma:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">| Simbolo    | Para que se usa              |</span></span>
<span class="line"><span style="color:#e1e4e8;">|------------|------------------------------|</span></span>
<span class="line"><span style="color:#e1e4e8;">| #          | titulos                      |</span></span>
<span class="line"><span style="color:#e1e4e8;">| -          | listas desordenadas          |</span></span>
<span class="line"><span style="color:#e1e4e8;">| 1.         | listas ordenadas             |</span></span>
<span class="line"><span style="color:#e1e4e8;">| &gt;          | dejar una linea vertical al inicio del renglon |</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">| Simbolo    | Para que se usa              |</span></span>
<span class="line"><span style="color:#24292e;">|------------|------------------------------|</span></span>
<span class="line"><span style="color:#24292e;">| #          | titulos                      |</span></span>
<span class="line"><span style="color:#24292e;">| -          | listas desordenadas          |</span></span>
<span class="line"><span style="color:#24292e;">| 1.         | listas ordenadas             |</span></span>
<span class="line"><span style="color:#24292e;">| &gt;          | dejar una linea vertical al inicio del renglon |</span></span></code></pre></div><p>Se ve asi:</p><table><thead><tr><th>Simbolo</th><th>Para que se usa</th></tr></thead><tbody><tr><td>#</td><td>titulos</td></tr><tr><td>-</td><td>listas desordenadas</td></tr><tr><td>1.</td><td>listas ordenadas</td></tr><tr><td>&gt;</td><td>dejar una linea vertical al inicio del renglon</td></tr></tbody></table><h2 id="resaltados" tabindex="-1">Resaltados <a class="header-anchor" href="#resaltados" aria-label="Permalink to &quot;Resaltados&quot;">​</a></h2><p>Para resaltar texto podemos rodearlo con simbolos para definir que hacer con el mismo:</p><table><thead><tr><th>Simbolo</th><th>ejemplo</th></tr></thead><tbody><tr><td>*</td><td><em>cursiva</em></td></tr><tr><td>**</td><td><strong>negrita</strong></td></tr><tr><td>***</td><td><em><strong>cursiva y negrita</strong></em></td></tr><tr><td>~~</td><td><s>tachado</s></td></tr><tr><td>~~***</td><td><s><em><strong>cursiva, negrita y tachado</strong></em></s></td></tr></tbody></table><p>Y las otras combinaciones que podamos imaginarnos</p><h2 id="notas" tabindex="-1">Notas <a class="header-anchor" href="#notas" aria-label="Permalink to &quot;Notas&quot;">​</a></h2><p>Las notas se escriben asi:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">::: info información</span></span>
<span class="line"><span style="color:#e1e4e8;">Notas de información</span></span>
<span class="line"><span style="color:#e1e4e8;">:::</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">::: tip consejos</span></span>
<span class="line"><span style="color:#e1e4e8;">Notas para dar consejos</span></span>
<span class="line"><span style="color:#e1e4e8;">:::</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">::: warning advertencias</span></span>
<span class="line"><span style="color:#e1e4e8;">Nota de advertencia</span></span>
<span class="line"><span style="color:#e1e4e8;">:::</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">::: danger Peligro</span></span>
<span class="line"><span style="color:#e1e4e8;">nota de peligros</span></span>
<span class="line"><span style="color:#e1e4e8;">:::</span></span>
<span class="line"><span style="color:#e1e4e8;"></span></span>
<span class="line"><span style="color:#e1e4e8;">::: details detalles</span></span>
<span class="line"><span style="color:#e1e4e8;">Un apartado para detallar on lista desplegable</span></span>
<span class="line"><span style="color:#e1e4e8;">:::</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">::: info información</span></span>
<span class="line"><span style="color:#24292e;">Notas de información</span></span>
<span class="line"><span style="color:#24292e;">:::</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">::: tip consejos</span></span>
<span class="line"><span style="color:#24292e;">Notas para dar consejos</span></span>
<span class="line"><span style="color:#24292e;">:::</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">::: warning advertencias</span></span>
<span class="line"><span style="color:#24292e;">Nota de advertencia</span></span>
<span class="line"><span style="color:#24292e;">:::</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">::: danger Peligro</span></span>
<span class="line"><span style="color:#24292e;">nota de peligros</span></span>
<span class="line"><span style="color:#24292e;">:::</span></span>
<span class="line"><span style="color:#24292e;"></span></span>
<span class="line"><span style="color:#24292e;">::: details detalles</span></span>
<span class="line"><span style="color:#24292e;">Un apartado para detallar on lista desplegable</span></span>
<span class="line"><span style="color:#24292e;">:::</span></span></code></pre></div><p>Y se ven asi:</p><div class="info custom-block"><p class="custom-block-title">información</p><p>Notas de información</p></div><div class="tip custom-block"><p class="custom-block-title">consejos</p><p>Notas para dar consejos</p></div><div class="warning custom-block"><p class="custom-block-title">advertencias</p><p>Nota de advertencia</p></div><div class="danger custom-block"><p class="custom-block-title">Peligro</p><p>nota de peligros</p></div><details class="details custom-block"><summary>detalles</summary><p>Un apartado para detallar on lista desplegable</p></details><h2 id="notas-chicas" tabindex="-1">Notas chicas <a class="header-anchor" href="#notas-chicas" aria-label="Permalink to &quot;Notas chicas&quot;">​</a></h2><p>Las notas chicas funcionan en esta pagina, pero podrian no funcionar en la pagina donde estas probando.</p><p>Se escriben asi:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">&lt;Badge type=&quot;info&quot; text=&quot;informativa&quot; /&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;Badge type=&quot;tip&quot; text=&quot;consejos&quot; /&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;Badge type=&quot;warning&quot; text=&quot;advertencias&quot; /&gt;</span></span>
<span class="line"><span style="color:#e1e4e8;">&lt;Badge type=&quot;danger&quot; text=&quot;peligros&quot; /&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">&lt;Badge type=&quot;info&quot; text=&quot;informativa&quot; /&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;Badge type=&quot;tip&quot; text=&quot;consejos&quot; /&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;Badge type=&quot;warning&quot; text=&quot;advertencias&quot; /&gt;</span></span>
<span class="line"><span style="color:#24292e;">&lt;Badge type=&quot;danger&quot; text=&quot;peligros&quot; /&gt;</span></span></code></pre></div><p>Y se ven asi:</p>`,58),c=e(`<p>(Una al lado de la otra, porque no dejé espacio entre renglones)</p><h2 id="codigo" tabindex="-1">Codigo <a class="header-anchor" href="#codigo" aria-label="Permalink to &quot;Codigo&quot;">​</a></h2><p>Para mostrar un bloque que nos permita copiar el texto, hay que escribir 3 veces un acento invertido (\`) (Alt Gr + la tecla al lado de enter) al inicio de nuestro bloque y otra vez al final del mismo. Y nos queda asi:</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#e1e4e8;">Un espacio donde podemos mostrar texto</span></span>
<span class="line"><span style="color:#e1e4e8;">de esta forma y tambien copiarlo si</span></span>
<span class="line"><span style="color:#e1e4e8;">apretamos click en el boton que aparece</span></span>
<span class="line"><span style="color:#e1e4e8;">cuando pasamos el mouse por encima.</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">Un espacio donde podemos mostrar texto</span></span>
<span class="line"><span style="color:#24292e;">de esta forma y tambien copiarlo si</span></span>
<span class="line"><span style="color:#24292e;">apretamos click en el boton que aparece</span></span>
<span class="line"><span style="color:#24292e;">cuando pasamos el mouse por encima.</span></span></code></pre></div>`,4);function r(d,u,y,h,m,g){const a=l("Badge");return o(),t("div",null,[i,s(a,{type:"info",text:"informativa"}),s(a,{type:"tip",text:"consejos"}),s(a,{type:"warning",text:"advertencias"}),s(a,{type:"danger",text:"peligros"}),c])}const q=n(p,[["render",r]]);export{v as __pageData,q as default};
