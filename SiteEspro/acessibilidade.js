/* Foco e teclado dos diálogos, sem dependências externas. */
(() => {
 let anterior;
 const focusaveis = el => [...el.querySelectorAll('a[href],button,input,select,textarea,[tabindex="0"]')].filter(n=>!n.disabled && n.getClientRects().length);
 document.querySelectorAll('.modal').forEach(modal=>{
  const dialog=modal.querySelector('[role="dialog"]');dialog.setAttribute('tabindex','-1');dialog.setAttribute('aria-label',modal.id==='news-modal'?'Leitura do jornal':'Área do funcionário');
  let wasOpen = false;
  new MutationObserver(()=>{
   const aberto=modal.getAttribute('aria-hidden')==='false';
   if (aberto === wasOpen) return; wasOpen = aberto;
   document.querySelectorAll('body > header,body > main,body > footer,.skip-link').forEach(el=>el.inert=aberto);
   if(aberto){anterior=document.activeElement;dialog.focus();}else if(anterior?.isConnected)anterior.focus();
  }).observe(modal,{attributes:true,attributeFilter:['aria-hidden']});
  modal.addEventListener('keydown',e=>{if(e.key!=='Tab')return;const lista=focusaveis(modal);if(!lista.length){e.preventDefault();dialog.focus();return;}if(e.shiftKey&&(document.activeElement===lista[0]||document.activeElement===dialog)){e.preventDefault();lista.at(-1).focus();}else if(!e.shiftKey&&(document.activeElement===lista.at(-1)||document.activeElement===dialog)){e.preventDefault();lista[0].focus();}});
 });
 document.querySelectorAll('i').forEach(i=>i.setAttribute('aria-hidden','true'));
})();
