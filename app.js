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
  try{localStorage.setItem('lang',l)}catch(e){}
}
document.getElementById('lang').onclick=function(){apply(lang=='ar'?'en':'ar')};
document.getElementById('form').onsubmit=function(e){
  e.preventDefault();
  var n=document.getElementById('fn').value,s=document.getElementById('fs').value.split('|'),m=document.getElementById('fm').value;
  var sv=s.length>1?(lang=='ar'?s[0]:s[1]):'';
  var t=(lang=='ar'?'السلام عليكم، أنا ':'Hello, I am ')+n+(sv?(lang=='ar'?'. الخدمة المطلوبة: ':'. Service: ')+sv:'')+(m?'. '+m:'');
  window.open('https://wa.me/201101254549?text='+encodeURIComponent(t),'_blank');
};
var saved='ar';try{saved=localStorage.getItem('lang')||'ar'}catch(e){}
apply(saved);
