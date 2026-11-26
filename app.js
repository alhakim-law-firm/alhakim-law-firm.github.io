var FORM=[
["عقد التأسيس","Founding contract"],["صحيفة الاستثمار","Investment gazette"],["السجل التجاري","Commercial register"],["البطاقة الضريبية","Tax card"],["شهادة القيمة المضافة","VAT certificate"],["التوقيع الإلكتروني","Electronic signature"],["رخصة التشغيل","Operating licence"],["السجل الصناعي","Industrial register"]];
var AFTER=[
["اتفاقيات الشركاء","Shareholder agreements"],["تعديل عقود الشركات","Amending company contracts"],["الدمج والتحويل والتصفية","Merger, conversion &amp; liquidation"]];
var AREAS=[
["القضايا الجنائية","Criminal cases","الجنح والجنايات: الدفاع والحضور أمام النيابة والمحاكم.","Misdemeanours and felonies: defence before the prosecution and the courts."],
["القضايا المدنية","Civil cases","المنازعات المدنية والتعويضات والإثبات والتنفيذ.","Civil disputes, compensation, evidence and enforcement."],
["الأسرة والأحوال الشخصية","Family &amp; personal status","الزواج والطلاق والنفقة والحضانة والرؤية والميراث.","Marriage, divorce, alimony, custody, visitation and inheritance."],
["القضايا التجارية","Commercial cases","المنازعات التجارية والشيكات والأوراق التجارية.","Commercial disputes, cheques and commercial papers."],
["قضايا العمل والعمال","Labour cases","منازعات العمل والفصل التعسفي وحقوق العاملين وأصحاب العمل.","Labour disputes, unfair dismissal, and the rights of employees and employers."],
["العقارات","Real estate","عقود البيع والإيجار ومنازعات الملكية والحيازة.","Sale and lease contracts, ownership and possession disputes."],
["العقود والاستشارات","Contracts &amp; advice","صياغة ومراجعة العقود واستشارات قانونية للأفراد والشركات.","Drafting and reviewing contracts, and legal advice for individuals and companies."],
["وأي قضية أخرى","Any other case","لو قضيتك مش مذكورة، كلّمنا ونقولك نقدر نساعدك إزاي.","If your case is not listed, contact us and we will tell you how we can help."]];
var STEPS=[
["استشارة","Consultation","تحكيلنا مشكلتك أو فكرة شغلك ونحدد الطريق القانوني المناسب.","Tell us your problem or business idea and we set the right legal path."],
["دراسة الموقف","Case review","نراجع المستندات ونشرح لك الخيارات والتوقعات بوضوح.","We review the documents and explain your options and expectations clearly."],
["التنفيذ","Action","نجهّز الأوراق أو نمثّلك أمام الجهات والمحاكم المختصة.","We prepare the papers or represent you before the competent bodies and courts."],
["المتابعة","Follow-up","نبلّغك بكل جديد لحد ما الموضوع يخلص.","We keep you informed until the matter is closed."]];
var FAQ=[
["إزاي أحجز استشارة؟","How do I book a consultation?","ابعتلنا على واتساب أو اتصل بالمكتب، ونحدد معاك الميعاد.","Message us on WhatsApp or call the office and we will set a time with you."],
["إيه الأوراق المطلوبة لتأسيس شركة؟","What papers are needed to form a company?","بتختلف حسب نوع الشركة ونشاطها. بنحدد لك القائمة كاملة في الاستشارة الأولى.","They vary by company type and activity. We give you the full list in the first consultation."],
["إيه الفرق بين المنشأة الفردية وشركة الشخص الواحد؟","What is the difference between a sole proprietorship and a one-person company?","الاختلاف في الشخصية القانونية والمسؤولية، وده بيتحدد حسب نشاطك. كلّمنا ونشرحلك الأنسب لحالتك.","They differ in legal personality and liability, and the right choice depends on your activity. Contact us and we will explain what suits your case."],
["هل بتتولوا قضايا قدام المحاكم؟","Do you handle cases before the courts?","أيوه، بنتولى القضايا الجنائية والمدنية والأسرة والتجارية والعمالية والعقارية.","Yes, we handle criminal, civil, family, commercial, labour and real-estate cases."]];
var lang='ar';
function li(x){return '<li data-ar="'+x[0]+'" data-en="'+x[1]+'"></li>'}
document.getElementById('formList').innerHTML=FORM.map(li).join('');
document.getElementById('afterList').innerHTML=AFTER.map(li).join('');
document.getElementById('g2').innerHTML=AREAS.map(function(x){return '<article class="card"><h3 data-ar="'+x[0]+'" data-en="'+x[1]+'"></h3><p data-ar="'+x[2]+'" data-en="'+x[3]+'"></p></article>'}).join('');
document.getElementById('stepsList').innerHTML=STEPS.map(function(x){return '<li><b data-ar="'+x[0]+'" data-en="'+x[1]+'"></b><span data-ar="'+x[2]+'" data-en="'+x[3]+'"></span></li>'}).join('');
document.getElementById('faqList').innerHTML=FAQ.map(function(x){return '<details><summary data-ar="'+x[0]+'" data-en="'+x[1]+'"></summary><p data-ar="'+x[2]+'" data-en="'+x[3]+'"></p></details>'}).join('');
var OPTS=[["تأسيس الشركات","Company formation"]].concat(AREAS.slice(0,7).map(function(x){return [x[0],x[1]]}));
var sel=document.getElementById('fs');
sel.innerHTML='<option value="" data-ar="الخدمة المطلوبة" data-en="Service needed"></option>'+OPTS.map(function(x){return '<option value="'+x[0]+'|'+x[1]+'" data-ar="'+x[0]+'" data-en="'+x[1]+'"></option>'}).join('');
function apply(l){
  lang=l;var d=document.documentElement;d.lang=l;d.dir=l=='ar'?'rtl':'ltr';d.classList.toggle('en',l=='en');
  document.querySelectorAll('[data-ar]').forEach(function(e){e.innerHTML=e.getAttribute('data-'+l)});
  document.querySelectorAll('[data-alt-ar]').forEach(function(e){e.alt=e.getAttribute('data-alt-'+l)});
  document.querySelectorAll('[data-ph-ar]').forEach(function(e){e.placeholder=e.getAttribute('data-ph-'+l)});
  document.getElementById('lang').textContent=l=='ar'?'EN':'عربي';
  if(typeof showPay=='function')showPay();try{localStorage.setItem('lang',l)}catch(e){}
}
document.getElementById('lang').onclick=function(){apply(lang=='ar'?'en':'ar')};
document.getElementById('form').onsubmit=function(e){
  e.preventDefault();
  var n=document.getElementById('fn').value,s=document.getElementById('fs').value.split('|'),m=document.getElementById('fm').value;
  var sv=s.length>1?(lang=='ar'?s[0]:s[1]):'';
  var t=(lang=='ar'?'السلام عليكم، أنا ':'Hello, I am ')+n+(sv?(lang=='ar'?'. الخدمة المطلوبة: ':'. Service: ')+sv:'')+(m?'. '+m:'');
  window.open('https://wa.me/201101254549?text='+encodeURIComponent(t),'_blank');
};

/* ---- Consultation booking config ---- */
var OFFICE_WA='201101254549';
var WALLET_NUMBER='01101254549';
var INSTAPAY_ADDRESS='hadyhkeem14@instapay';
var INSTAPAY_LINK='https://ipn.eg/S/hadyhkeem14/instapay/5R7WwZ';
var PAY=[['wallet','محفظة اتصالات كاش','Etisalat Cash wallet',WALLET_NUMBER]];
if(INSTAPAY_ADDRESS&&INSTAPAY_LINK)PAY.push(['instapay','إنستاباي','InstaPay',INSTAPAY_ADDRESS]);
var bm=document.getElementById('bm');
bm.innerHTML='<option value="" data-ar="طريقة الدفع" data-en="Payment method"></option>'+PAY.map(function(p){return '<option value="'+p[0]+'" data-ar="'+p[1]+'" data-en="'+p[2]+'"></option>'}).join('');
function showPay(){
  var v=bm.value,box=document.getElementById('payinfo'),p=PAY.filter(function(x){return x[0]==v})[0];
  if(!p){box.hidden=true;return}
  box.hidden=false;
  box.innerHTML=(lang=='ar'?'حوّل 500 جنيه على '+p[1]+(v=='instapay'?' على العنوان:':' على الرقم:'):'Transfer EGP 500 via '+p[2]+' to:')+'<br><b dir="ltr" class="num">'+p[3]+'</b>'+(v=='instapay'?'<br><a class="btn btn-gold small" href="'+INSTAPAY_LINK+'" target="_blank" rel="noopener">'+(lang=='ar'?'افتح رابط إنستاباي':'Open InstaPay link')+'</a><div class="hint">'+(lang=='ar'?'اكتب المبلغ 500 جنيه عند التحويل':'Enter the amount EGP 500 when you transfer')+'</div>':'');
}
bm.onchange=showPay;
var $=function(i){return document.getElementById(i)};
$('bstep1').onsubmit=function(e){e.preventDefault();$('bstep1').hidden=true;$('bstep2').hidden=false;$('ind1').className='';$('ind2').className='on';$('bbox').scrollIntoView({block:'start'})};
$('bback').onclick=function(){$('bstep2').hidden=true;$('bstep1').hidden=false;$('ind2').className='';$('ind1').className='on'};
$('bstep2').onsubmit=function(e){
  e.preventDefault();
  var p=PAY.filter(function(x){return x[0]==bm.value})[0];if(!p)return;
  var ar=lang=='ar',g=function(i){return $(i).value.trim()};
  var sub=g('bt')=='company'?(ar?'تأسيس شركة':'Company formation'):(ar?'قضية':'A legal case');
  var t=ar?['السلام عليكم، أريد حجز استشارة قانونية أونلاين.','الاسم: '+g('bn'),'التليفون: '+g('bp'),'الواتساب: '+g('bw'),'الموضوع: '+sub,'الوصف: '+g('bs'),'طريقة الدفع: '+p[1]+' (500 جنيه)','سأرفق صورة التحويل في المحادثة.']
   :['Hello, I would like to book a legal consultation online.','Name: '+g('bn'),'Phone: '+g('bp'),'WhatsApp: '+g('bw'),'Subject: '+sub,'Description: '+g('bs'),'Payment: '+p[2]+' (EGP 500)','I will attach the transfer screenshot in this chat.'];
  var url='https://wa.me/'+OFFICE_WA+'?text='+encodeURIComponent(t.join('\n'));
  $('bwa').href=url;$('bstep2').hidden=true;$('bdone').hidden=false;$('ind2').className='on';
  window.open(url,'_blank');
};
var saved='ar';try{saved=localStorage.getItem('lang')||'ar'}catch(e){}
apply(saved);
