(()=>{var n=document.querySelector("input.checker_config-input"),i=document.querySelector('input[name="typeSize"]'),u=document.querySelector("span.font-size-output"),c=document.querySelector('input[name="typeWeight"]'),l=document.querySelector("span.font-weight-output"),s=document.querySelector('input[name="lineHeight"]'),a=document.querySelector("span.line-height-output"),r=document.querySelector('input[name="checkbox"]'),p=document.querySelector('select[id="typeface"]'),d=document.querySelectorAll("div.checker_color div"),e=document.querySelector("textarea.output"),y=e.value;n.addEventListener("keyup",function(){this.value?e.value=this.value:e.value=y});e.addEventListener("keyup",function(){n.value=this.value});i.addEventListener("input",function(){e.style.fontSize=`${this.value}px`,u.innerHTML=`${this.value} px`});c.addEventListener("input",function(){e.style.fontWeight=this.value,l.innerHTML=this.value});s.addEventListener("input",function(){e.style.lineHeight=this.value,a.innerHTML=this.value});r.addEventListener("change",function(){this.checked?e.style.fontStyle="italic":e.style.fontStyle="normal"});p.addEventListener("input",function(){e.style.fontFamily=this.value});d.forEach(function(t){let o=window.getComputedStyle(t).getPropertyValue("background-color");t.addEventListener("click",function(){e.style.color=o})});})();
//# sourceMappingURL=index.js.map
