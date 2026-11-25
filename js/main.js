(function(){
  var b=document.querySelector('.burger'),n=document.querySelector('nav');
  if(b&&n){b.addEventListener('click',function(){var o=n.classList.toggle('open');b.textContent=o?'✕':'☰';b.setAttribute('aria-expanded',o)});}
  var els=document.querySelectorAll('.rv');
  if('IntersectionObserver' in window){
    var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});
    els.forEach(function(e){io.observe(e)});
  }else{els.forEach(function(e){e.classList.add('in')})}
  var chips=document.querySelectorAll('.chips button');
  chips.forEach(function(c){c.addEventListener('click',function(){
    chips.forEach(function(x){x.classList.remove('on')});c.classList.add('on');
    var f=c.getAttribute('data-f');
    document.querySelectorAll('[data-t]').forEach(function(p){p.style.display=(f==='all'||p.getAttribute('data-t')===f)?'':'none'});
  })});
  var form=document.querySelector('form.form');
  if(form){form.addEventListener('submit',function(e){e.preventDefault();var ok=form.querySelector('.ok');if(ok)ok.style.display='block';form.reset()})}
})();
