const login_signup = document.getElementById("loginsignup")

function StartTheTest() {
  document.getElementById("test-starter").style.display = "none";
  const inner_html_1 = `<div id="Itsme" style = "overflow-y : auto; padding-top : 3rem;" >
  <ul id = "list-papa" style = "display : grid; grid-template-columns : 0.5fr 7fr 4fr; gap : 0.5rem;font-size: 5rem; list-style : none;">
    <li style = "background: -webkit-linear-gradient(#a873c9, #314d9b);-webkit-background-clip: text;-webkit-text-fill-color: transparent;padding-left : 3rem;">S.No.</li>
    <li style = "background: -webkit-linear-gradient(#a873c9, #314d9b);-webkit-background-clip: text;-webkit-text-fill-color: transparent; padding-left : 20rem;">Question</li>
    <li style = "background: -webkit-linear-gradient(#a873c9, #314d9b);-webkit-background-clip: text;-webkit-text-fill-color: transparent;">Response as Extent</li>
  </ul>
</div>`;
  const after_me = document.getElementById("one");
  after_me.insertAdjacentHTML('afterend', inner_html_1);
  let another_html = ""
  let i = 0
  for (item of anxiety_questions) {
    i++;
    another_html += `<div style = "padding-left : 5rem; padding-top : 10rem;">${item.id}</div>
    <div style = "font-size : 4rem; padding-top : 10rem;">${item.question}</div>
    <div style = "width : 90%; padding-top : 10rem;"><input id = "${i}" type = "range" min = "0" max = "10" step = "1" value = "5" oninput="updateValue(this.value, ${i})"></input><span style = "padding-left : 20rem;" id="sliderValue${i}">5</span></div>`
  }
  const last_html = `<a id = "test-finisher" style = "margin-top : 70px; margin-left : 65rem; margin-bottom : 10rem; font-size : 3rem;" onClick = "FinishTheTest()" class="btn btn-default btn-xl page-scroll"
              >Submit The Test</a
            >`
  const after_me_again = document.getElementById("list-papa");
  after_me_again.insertAdjacentHTML('beforeend', another_html);
  after_me_again.insertAdjacentHTML('afterend', last_html);
}

function updateValue(val, i) {
  document.getElementById('sliderValue' + i).innerHTML = val;
}

function FinishTheTest() {
  let anxiety_score = 0;
  let depression_score = 0;
  let OCD_score = 0;
  for (let i = 1; i <= 4; i++) {
    const this_value = document.getElementById(i);
    anxiety_score += Number.parseInt(this_value.value);
  }
  for (let i = 5; i <= 8; i++) {
    const this_value = document.getElementById(i);
    depression_score += Number.parseInt(this_value.value);
  }
  for (let i = 9; i <= 12; i++) {
    const this_value = document.getElementById(i);
    OCD_score += Number.parseInt(this_value.value);
  }
  const section_two = document.getElementById("Itsme");
  section_two.setAttribute("class", "row_later");
  section_two.innerHTML = `
  <span id = "hidemeplease">
  <div class="loading-text">
    <span>E</span>
    <span>V</span>
    <span>A</span>
    <span>L</span>
    <span>U</span>
    <span>A</span>
    <span>T</span>
    <span>I</span>
    <span>N</span>
    <span>G</span>
  </div>
<div class="socials">
  <a class="social-link" href="https://twitter.com/aybukeceylan" target="_top">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-twitter">
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
    </svg>
  </a>
  <a class="social-link" href="https://www.linkedin.com/in/ayb%C3%BCkeceylan/" target="_top">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
  </a>
</div>
</span>`;

  setTimeout(() => {
    const i_will_hide = document.getElementById("hidemeplease");
    let ihtml = `<div class="result" style = "height : 500%; padding-top : 500rem;">
  <h1 style = "padding-left : 50rem; font-size : 7rem; background: -webkit-linear-gradient(#a873c9, #314d9b);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;">Assessment Result</h1>
</div>`;

    if (anxiety_score >= 20) {
      ihtml += `<div style = "overflow-y : auto; padding-top : 1rem;" >
  <ul style = "display : grid; grid-template-columns : 0.5fr 7fr 4fr; gap : 0.5rem;font-size: 5rem; list-style : none;">
    <li style = "color : purple; padding-top : -10rem; padding-left : 5rem; width : 250%;">Assessed Problem</li>
  </ul><div style="padding-left : 8rem; padding-top : 5rem; font-size : 5rem; color : Purple; text-decoration : underline">Anxiety</div>
<div class="solutions_list" style="margin-left : 5rem">
<ul>
  <li><div style = "padding-left : 4rem; padding-top : 4rem; font-size : 3rem" class="prescribed_solution"><span type="solution" style = "color : RGB(85, 180, 176); text-decoration : underline; font-size : 4rem;">Prescribed Solution </span> : <br><span id="anxPS"></span></div></li>
  <li><div style = "padding-left : 4rem; padding-top : 4rem; font-size : 3rem" class="medical_expert"><span type="solution" style = "color : RGB(85, 180, 176); text-decoration : underline; font-size : 4rem;">Your Medical Expert </span> : <br><span id="anxME"></span></div></li>
  <li><div style = "padding-left : 4rem; padding-top : 4rem; font-size : 3rem" class="peer_group"><span type="solution" style = "color : RGB(85, 180, 176); text-decoration : underline; font-size : 4rem;">Peer Group for you </span> : <br><span id="anxPG"></span></div></li>
  <li><div style = "padding-left : 4rem; padding-top : 4rem; font-size : 3rem" class="youtube_video"><span type="solution" style = "color : RGB(85, 180, 176); text-decoration : underline; font-size : 4rem;">Know more </span> : <br><span id="anxYV"></span></div></li>
  <li><div style = "padding-left : 4rem; padding-top : 4rem; font-size : 3rem" class="spotify_playlist"><span type="solution" style = "color : RGB(85, 180, 176); text-decoration : underline; font-size : 4rem;">Uplift Your Mood</span> : <br><span id="anxSP"></span></div></li>
  </ul>
  </div>`
    }

    if (depression_score >= 20) {
      ihtml += `<div style = "overflow-y : auto; padding-top : 1rem;" >
  <ul style = "display : grid; grid-template-columns : 0.5fr 7fr 4fr; gap : 0.5rem;font-size: 5rem; list-style : none;">
    <li style = "color : purple; padding-top : -10rem; padding-left : 5rem; width : 250%;">Assessed Problem</li>
  </ul><div style="padding-left : 8rem; padding-top : 5rem; font-size : 5rem; color : Purple; text-decoration : underline">Depression</div>
<div class="solutions_list" style="margin-left : 5rem">
<ul>
  <li><div style = "padding-left : 4rem; padding-top : 4rem; font-size : 3rem" class="prescribed_solution"><span type="solution" style = "color : RGB(85, 180, 176); text-decoration : underline; font-size : 4rem;">Prescribed Solution </span> : <br><span id="depPS"></span></div></li>
  <li><div style = "padding-left : 4rem; padding-top : 4rem; font-size : 3rem" class="medical_expert"><span type="solution" style = "color : RGB(85, 180, 176); text-decoration : underline; font-size : 4rem;">Your Medical Expert </span> : <br><span id="depME"></span></div></li>
  <li><div style = "padding-left : 4rem; padding-top : 4rem; font-size : 3rem" class="peer_group"><span type="solution" style = "color : RGB(85, 180, 176); text-decoration : underline; font-size : 4rem;">Peer Group for you </span> : <br><span id="depPG"></span></div></li>
  <li><div style = "padding-left : 4rem; padding-top : 4rem; font-size : 3rem" class="youtube_video"><span type="solution" style = "color : RGB(85, 180, 176); text-decoration : underline; font-size : 4rem;">Know more </span> : <br><span id="depYV"></span></div></li>
  <li><div style = "padding-left : 4rem; padding-top : 4rem; font-size : 3rem" class="spotify_playlist"><span type="solution" style = "color : RGB(85, 180, 176); text-decoration : underline; font-size : 4rem;">Uplift Your Mood</span> : <br><span id="depSP"></span></div></li>
  </ul>
  </div>`

    }

    if (OCD_score >= 20) {
      ihtml += `<div style = "overflow-y : auto; padding-top : 1rem;" >
  <ul style = "display : grid; grid-template-columns : 0.5fr 7fr 4fr; gap : 0.5rem;font-size: 5rem; list-style : none;">
    <li style = "color : purple; padding-top : -10rem; padding-left : 5rem; width : 250%;">Assessed Problem</li>
  </ul><div style="padding-left : 8rem; padding-top : 5rem; font-size : 5rem; color : Purple; text-decoration : underline">Obsessive Compulsive Disorder</div>
<div class="solutions_list" style="margin-left : 5rem">
<ul>
  <li><div style = "padding-left : 4rem; padding-top : 4rem; font-size : 3rem" class="prescribed_solution"><span type="solution" style = "color : RGB(85, 180, 176); text-decoration : underline; font-size : 4rem;">Prescribed Solution </span> : <br><span id="ocdPS"></span></div></li>
  <li><div style = "padding-left : 4rem; padding-top : 4rem; font-size : 3rem" class="medical_expert"><span type="solution" style = "color : RGB(85, 180, 176); text-decoration : underline; font-size : 4rem;">Your Medical Expert </span> : <br><span id="ocdME"></span></div></li>
  <li><div style = "padding-left : 4rem; padding-top : 4rem; font-size : 3rem" class="peer_group"><span type="solution" style = "color : RGB(85, 180, 176); text-decoration : underline; font-size : 4rem;">Peer Group for you </span> : <br><span id="ocdPG"></span></div></li>
  <li><div style = "padding-left : 4rem; padding-top : 4rem; font-size : 3rem" class="youtube_video"><span type="solution" style = "color : RGB(85, 180, 176); text-decoration : underline; font-size : 4rem;">Know more </span> : <br><span id="ocdYV"></span></div></li>
  <li><div style = "padding-left : 4rem; padding-top : 4rem; font-size : 3rem" class="spotify_playlist"><span type="solution" style = "color : RGB(85, 180, 176); text-decoration : underline; font-size : 4rem;">Uplift Your Mood</span> : <br><span id="ocdSP"></span></div></li>
  </ul>
  </div>`
    }

    i_will_hide.innerHTML = ihtml;

    if (anxiety_score >= 20 && OCD_score >= 20 && depression_score >= 20) {

      const anx_add_solution = document.getElementById("anxPS");
      const anx_add_expert = document.getElementById("anxME");
      const anx_add_peer_group = document.getElementById("anxPG");
      const anx_add_youtubevid = document.getElementById("anxYV");
      const anx_add_spotifyplay = document.getElementById("anxSP");
      anx_add_youtubevid.innerHTML = `<iframe style = "box-shadow : 10px 10px 5px purple; margin-left : 36rem; border-radius : 20%;" width="560" height="315" src="https://www.youtube.com/embed/BPE5OpYrlLM?si=yAqq8A4glga4dJ8w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
      anx_add_solution.innerHTML = `The treatment of anxiety typically involves a combination of therapeutic approaches and, in some cases, medication. Cognitive-behavioral therapy (CBT) helps individuals manage anxious thoughts and behaviors, while relaxation techniques and mindfulness meditation can alleviate physical symptoms. Medications like antidepressants and anti-anxiety drugs may also be prescribed when necessary, under a doctor's guidance.`
      anx_add_expert.innerHTML = `<div style = "margin-top : 5rem; margin-left : 25rem; overflow : visible"><div class="expertcontainer" style = "display : flex; flex-direction : column; background-color : black; border-radius : 15% 15% 0% 0%; width : 75%; margin-left : 10rem;">
  <img src = "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?t=st=1694235635~exp=1694236235~hmac=04e9db5186f0fdd7c8a191747dffaa52cc177e0dd21c233a363af1f76d952800" style="width : 300px; height : 200px; border-radius : 0px 0px 50px 0px;">
  <h3 style = "color : purple; font-weight : bold; position : relative; left : 33rem; bottom : 10rem; font-size : 4rem;">Dr. Anamika Goyal - <br>Anxiety Specialist.<br> UMatter and WHO verified</h3>
  <button style = "background-color : black; color : purple;"> Book Appointment</button>
</div>
</div>
`
      anx_add_peer_group.innerHTML = `<a style = "margin-left : 36rem; font-size : 4rem;" href = "https://www.heypeers.com/"> Reach Out To Others!</a>`
      anx_add_spotifyplay.innerHTML = `<img style = "margin-left : 36rem; height : 5rem; width : 5rem;" src = "./assets/spotify.png"><a style = "color : white; text-decoration : none; cursor : pointer; " href = "https://open.spotify.com/playlist/2zYv04WPTCV10YzDwk2Yxb?si=7500dcc924784c59">Your Anxiety Relieving Playlist</a>`;

      const dep_add_solution = document.getElementById("depPS");
      const dep_add_expert = document.getElementById("depME");
      const dep_add_peer_group = document.getElementById("depPG");
      const dep_add_youtubevid = document.getElementById("depYV");
      const dep_add_spotifyplay = document.getElementById("depSP");
      dep_add_youtubevid.innerHTML = `<iframe style = "box-shadow : 10px 10px 5px purple; margin-left : 36rem; border-radius : 20%;" width="560" height="315" src="https://www.youtube.com/embed/Yy8e4sw70ow?si=zwtNfrFoOkPBTjL9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
      dep_add_solution.innerHTML = `The treatment of depression typically involves a multifaceted approach. Psychotherapy, such as cognitive-behavioral therapy (CBT) or interpersonal therapy, helps individuals address underlying emotional issues. Antidepressant medications may be prescribed when necessary, under medical supervision. Lifestyle modifications, exercise, and a strong support system also contribute to successful depression management.`

      dep_add_expert.innerHTML = `<div style = "margin-top : 5rem; margin-left : 25rem; overflow : visible"><div class="expertcontainer" style = "display : flex; flex-direction : column; background-color : black; border-radius : 15% 15% 0% 0%; width : 75%; margin-left : 10rem;">
  <img src = "https://photos.peopleimages.com/picture/202302/2659182-medical-smile-and-happy-with-portrait-of-doctor-for-for-healthcare-expert-and-professional.-medicine-wellness-and-surgeon-with-black-woman-and-arms-crossed-for-proud-confidence-or-life-insurance--fit_400_400.jpg" style="width : 300px; height : 200px; border-radius : 0px 0px 50px 0px;">
  <h3 style = "color : purple; font-weight : bold; position : relative; left : 33rem; bottom : 10rem; font-size : 4rem;">Dr. Ambika Jain - <br>Depression Specialist.<br> UMatter and WHO verified</h3>
  <button style = "background-color : black; color : purple;"> Book Appointment</button>
</div>
</div>
`
      dep_add_peer_group.innerHTML = `<a style = "margin-left : 36rem; font-size : 4rem;" href = "https://www.peertalk.org.uk/support-groups"> Reach Out To Others!</a>`
      dep_add_spotifyplay.innerHTML = `<img style = "margin-left : 36rem; height : 5rem; width : 5rem;" src = "./assets/spotify.png"><a style = "color : white; text-decoration : none; cursor : pointer; " href = "https://open.spotify.com/playlist/0nR4wfuH92MCCbMJf11VRa">Beat Depression with this Playlist</a>`;

      const ocd_add_solution = document.getElementById("ocdPS");
      const ocd_add_expert = document.getElementById("ocdME");
      const ocd_add_peer_group = document.getElementById("ocdPG");
      const ocd_add_youtubevid = document.getElementById("ocdYV");
      const ocd_add_spotifyplay = document.getElementById("ocdSP");
      ocd_add_youtubevid.innerHTML = `<iframe style = "box-shadow : 10px 10px 5px purple; margin-left : 36rem; border-radius : 20%;" width="560" height="315" src="https://www.youtube.com/embed/QO2w-iO4Uj8?si=LjmxGxQI8A9vmdLn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
      ocd_add_solution.innerHTML = `The treatment of Obsessive-Compulsive Disorder (OCD) often combines cognitive-behavioral therapy (CBT), particularly exposure and response prevention (ERP), with medication, usually selective serotonin reuptake inhibitors (SSRIs). CBT helps individuals confront and manage obsessions and compulsions, while SSRIs can alleviate symptoms. Combining therapy and medication can provide effective relief from OCD's disruptive patterns.`
      ocd_add_expert.innerHTML = `<div style = "margin-top : 5rem; margin-left : 25rem; overflow : visible"><div class="expertcontainer" style = "display : flex; flex-direction : column; background-color : black; border-radius : 15% 15% 0% 0%; width : 75%; margin-left : 10rem;">
  <img src = "https://img.freepik.com/premium-photo/portrait-cheerful-smiling-young-doctor-with-stethoscope-neck-medical-coat_255757-1414.jpg" style="width : 300px; height : 200px; border-radius : 0px 0px 50px 0px;">
  <h3 style = "color : purple; font-weight : bold; position : relative; left : 33rem; bottom : 10rem; font-size : 4rem;">Dr. Rahul Subhramanyam - <br>OCD Specialist.<br> UMatter and WHO verified</h3>
  <button class = "ChangeMeButton" style = "background-color : #8f8f8f58; border : 4px solid black; color : purple;" onClick = "justChangeMe()"> Book Appointment</button>
</div>
</div>
`
      ocd_add_peer_group.innerHTML = `<a style = "margin-left : 36rem; font-size : 4rem;" href = "https://support.therapytribe.com/ocd-support-group/"> Reach Out To Others!</a>`
      ocd_add_spotifyplay.innerHTML = `<img style = "margin-left : 36rem; height : 5rem; width : 5rem;" src = "./assets/spotify.png"><a style = "color : white; text-decoration : none; cursor : pointer; " href = "https://open.spotify.com/playlist/37i9dQZF1E8zMbhz5QKmHa">Calm your OCD with this playlist</a>`;
    }
    if (anxiety_score >= 20 && depression_score >= 20) {

      const anx_add_solution = document.getElementById("anxPS");
      const anx_add_expert = document.getElementById("anxME");
      const anx_add_peer_group = document.getElementById("anxPG");
      const anx_add_youtubevid = document.getElementById("anxYV");
      const anx_add_spotifyplay = document.getElementById("anxSP");
      anx_add_youtubevid.innerHTML = `<iframe style = "box-shadow : 10px 10px 5px purple; margin-left : 36rem; border-radius : 20%;" width="560" height="315" src="https://www.youtube.com/embed/BPE5OpYrlLM?si=yAqq8A4glga4dJ8w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
      anx_add_solution.innerHTML = `The treatment of anxiety typically involves a combination of therapeutic approaches and, in some cases, medication. Cognitive-behavioral therapy (CBT) helps individuals manage anxious thoughts and behaviors, while relaxation techniques and mindfulness meditation can alleviate physical symptoms. Medications like antidepressants and anti-anxiety drugs may also be prescribed when necessary, under a doctor's guidance.`
      anx_add_expert.innerHTML = `<div style = "margin-top : 5rem; margin-left : 25rem; overflow : visible"><div class="expertcontainer" style = "display : flex; flex-direction : column; background-color : black; border-radius : 15% 15% 0% 0%; width : 75%; margin-left : 10rem;">
  <img src = "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?t=st=1694235635~exp=1694236235~hmac=04e9db5186f0fdd7c8a191747dffaa52cc177e0dd21c233a363af1f76d952800" style="width : 300px; height : 200px; border-radius : 0px 0px 50px 0px;">
  <h3 style = "color : purple; font-weight : bold; position : relative; left : 33rem; bottom : 10rem; font-size : 4rem;">Dr. Anamika Goyal - <br>Anxiety Specialist.<br> UMatter and WHO verified</h3>
  <button class = "ChangeMeButton" style = "background-color : #8f8f8f58; border : 4px solid black; color : purple;" onClick = "justChangeMe()"> Book Appointment</button>
</div>
</div>
`
      anx_add_peer_group.innerHTML = `<a style = "margin-left : 36rem; font-size : 4rem;" href = "https://www.heypeers.com/"> Reach Out To Others!</a>`
      anx_add_spotifyplay.innerHTML = `<img style = "margin-left : 36rem; height : 5rem; width : 5rem;" src = "./assets/spotify.png"><a style = "color : white; text-decoration : none; cursor : pointer; " href = "https://open.spotify.com/playlist/2zYv04WPTCV10YzDwk2Yxb?si=7500dcc924784c59">Your Anxiety Relieving Playlist</a>`;

      const dep_add_solution = document.getElementById("depPS");
      const dep_add_expert = document.getElementById("depME");
      const dep_add_peer_group = document.getElementById("depPG");
      const dep_add_youtubevid = document.getElementById("depYV");
      const dep_add_spotifyplay = document.getElementById("depSP");
      dep_add_youtubevid.innerHTML = `<iframe style = "box-shadow : 10px 10px 5px purple; margin-left : 36rem; border-radius : 20%;" width="560" height="315" src="https://www.youtube.com/embed/Yy8e4sw70ow?si=zwtNfrFoOkPBTjL9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
      dep_add_solution.innerHTML = `The treatment of depression typically involves a multifaceted approach. Psychotherapy, such as cognitive-behavioral therapy (CBT) or interpersonal therapy, helps individuals address underlying emotional issues. Antidepressant medications may be prescribed when necessary, under medical supervision. Lifestyle modifications, exercise, and a strong support system also contribute to successful depression management.`

      dep_add_expert.innerHTML = `<div style = "margin-top : 5rem; margin-left : 25rem; overflow : visible"><div class="expertcontainer" style = "display : flex; flex-direction : column; background-color : black; border-radius : 15% 15% 0% 0%; width : 75%; margin-left : 10rem;">
  <img src = "https://photos.peopleimages.com/picture/202302/2659182-medical-smile-and-happy-with-portrait-of-doctor-for-for-healthcare-expert-and-professional.-medicine-wellness-and-surgeon-with-black-woman-and-arms-crossed-for-proud-confidence-or-life-insurance--fit_400_400.jpg" style="width : 300px; height : 200px; border-radius : 0px 0px 50px 0px;">
  <h3 style = "color : purple; font-weight : bold; position : relative; left : 33rem; bottom : 10rem; font-size : 4rem;">Dr. Ambika Jain - <br>Depression Specialist.<br> UMatter and WHO verified</h3>
  <button class = "ChangeMeButton" style = "background-color : #8f8f8f58; border : 4px solid black; color : purple;" onClick = "justChangeMe()"> Book Appointment</button>
</div>
</div>
`
      dep_add_peer_group.innerHTML = `<a style = "margin-left : 36rem; font-size : 4rem;" href = "https://www.peertalk.org.uk/support-groups"> Reach Out To Others!</a>`
      dep_add_spotifyplay.innerHTML = `<img style = "margin-left : 36rem; height : 5rem; width : 5rem;" src = "./assets/spotify.png"><a style = "color : white; text-decoration : none; cursor : pointer; " href = "https://open.spotify.com/playlist/0nR4wfuH92MCCbMJf11VRa">Beat Depression with this Playlist</a>`;
    }

    if (OCD_score >= 20 && depression_score >= 20) {

      const dep_add_solution = document.getElementById("depPS");
      const dep_add_expert = document.getElementById("depME");
      const dep_add_peer_group = document.getElementById("depPG");
      const dep_add_youtubevid = document.getElementById("depYV");
      const dep_add_spotifyplay = document.getElementById("depSP");
      dep_add_youtubevid.innerHTML = `<iframe style = "box-shadow : 10px 10px 5px purple; margin-left : 36rem; border-radius : 20%;" width="560" height="315" src="https://www.youtube.com/embed/Yy8e4sw70ow?si=zwtNfrFoOkPBTjL9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
      dep_add_solution.innerHTML = `The treatment of depression typically involves a multifaceted approach. Psychotherapy, such as cognitive-behavioral therapy (CBT) or interpersonal therapy, helps individuals address underlying emotional issues. Antidepressant medications may be prescribed when necessary, under medical supervision. Lifestyle modifications, exercise, and a strong support system also contribute to successful depression management.`

      dep_add_expert.innerHTML = `<div style = "margin-top : 5rem; margin-left : 25rem; overflow : visible"><div class="expertcontainer" style = "display : flex; flex-direction : column; background-color : black; border-radius : 15% 15% 0% 0%; width : 75%; margin-left : 10rem;">
  <img src = "https://photos.peopleimages.com/picture/202302/2659182-medical-smile-and-happy-with-portrait-of-doctor-for-for-healthcare-expert-and-professional.-medicine-wellness-and-surgeon-with-black-woman-and-arms-crossed-for-proud-confidence-or-life-insurance--fit_400_400.jpg" style="width : 300px; height : 200px; border-radius : 0px 0px 50px 0px;">
  <h3 style = "color : purple; font-weight : bold; position : relative; left : 33rem; bottom : 10rem; font-size : 4rem;">Dr. Ambika Jain - <br>Depression Specialist.<br> UMatter and WHO verified</h3>
  <button class = "ChangeMeButton" style = "background-color : #8f8f8f58; border : 4px solid black; color : purple;" onClick = "justChangeMe()"> Book Appointment</button>
</div>
</div>
`
      dep_add_peer_group.innerHTML = `<a style = "margin-left : 36rem; font-size : 4rem;" href = "https://www.peertalk.org.uk/support-groups"> Reach Out To Others!</a>`
      dep_add_spotifyplay.innerHTML = `<img style = "margin-left : 36rem; height : 5rem; width : 5rem;" src = "./assets/spotify.png"><a style = "color : white; text-decoration : none; cursor : pointer; " href = "https://open.spotify.com/playlist/0nR4wfuH92MCCbMJf11VRa">Beat Depression with this Playlist</a>`;

      const ocd_add_solution = document.getElementById("ocdPS");
      const ocd_add_expert = document.getElementById("ocdME");
      const ocd_add_peer_group = document.getElementById("ocdPG");
      const ocd_add_youtubevid = document.getElementById("ocdYV");
      const ocd_add_spotifyplay = document.getElementById("ocdSP");
      ocd_add_youtubevid.innerHTML = `<iframe style = "box-shadow : 10px 10px 5px purple; margin-left : 36rem; border-radius : 20%;" width="560" height="315" src="https://www.youtube.com/embed/QO2w-iO4Uj8?si=LjmxGxQI8A9vmdLn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
      ocd_add_solution.innerHTML = `The treatment of Obsessive-Compulsive Disorder (OCD) often combines cognitive-behavioral therapy (CBT), particularly exposure and response prevention (ERP), with medication, usually selective serotonin reuptake inhibitors (SSRIs). CBT helps individuals confront and manage obsessions and compulsions, while SSRIs can alleviate symptoms. Combining therapy and medication can provide effective relief from OCD's disruptive patterns.`
      ocd_add_expert.innerHTML = `<div style = "margin-top : 5rem; margin-left : 25rem; overflow : visible"><div class="expertcontainer" style = "display : flex; flex-direction : column; background-color : black; border-radius : 15% 15% 0% 0%; width : 75%; margin-left : 10rem;">
  <img src = "https://img.freepik.com/premium-photo/portrait-cheerful-smiling-young-doctor-with-stethoscope-neck-medical-coat_255757-1414.jpg" style="width : 300px; height : 200px; border-radius : 0px 0px 50px 0px;">
  <h3 style = "color : purple; font-weight : bold; position : relative; left : 33rem; bottom : 10rem; font-size : 4rem;">Dr. Rahul Subhramanyam - <br>OCD Specialist.<br> UMatter and WHO verified</h3>
  <button class = "ChangeMeButton" style = "background-color : #8f8f8f58; border : 4px solid black; color : purple;" onClick = "justChangeMe()"> Book Appointment</button>
</div>
</div>
`
      ocd_add_peer_group.innerHTML = `<a style = "margin-left : 36rem; font-size : 4rem;" href = "https://support.therapytribe.com/ocd-support-group/"> Reach Out To Others!</a>`
      ocd_add_spotifyplay.innerHTML = `<img style = "margin-left : 36rem; height : 5rem; width : 5rem;" src = "./assets/spotify.png"><a style = "color : white; text-decoration : none; cursor : pointer; " href = "https://open.spotify.com/playlist/37i9dQZF1E8zMbhz5QKmHa">Calm your OCD with this playlist</a>`;
    }

    if (anxiety_score >= 20 && OCD_score >= 20) {

      const anx_add_solution = document.getElementById("anxPS");
      const anx_add_expert = document.getElementById("anxME");
      const anx_add_peer_group = document.getElementById("anxPG");
      const anx_add_youtubevid = document.getElementById("anxYV");
      const anx_add_spotifyplay = document.getElementById("anxSP");
      anx_add_youtubevid.innerHTML = `<iframe style = "box-shadow : 10px 10px 5px purple; margin-left : 36rem; border-radius : 20%;" width="560" height="315" src="https://www.youtube.com/embed/BPE5OpYrlLM?si=yAqq8A4glga4dJ8w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
      anx_add_solution.innerHTML = `The treatment of anxiety typically involves a combination of therapeutic approaches and, in some cases, medication. Cognitive-behavioral therapy (CBT) helps individuals manage anxious thoughts and behaviors, while relaxation techniques and mindfulness meditation can alleviate physical symptoms. Medications like antidepressants and anti-anxiety drugs may also be prescribed when necessary, under a doctor's guidance.`
      anx_add_expert.innerHTML = `<div style = "margin-top : 5rem; margin-left : 25rem; overflow : visible"><div class="expertcontainer" style = "display : flex; flex-direction : column; background-color : black; border-radius : 15% 15% 0% 0%; width : 75%; margin-left : 10rem;">
  <img src = "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?t=st=1694235635~exp=1694236235~hmac=04e9db5186f0fdd7c8a191747dffaa52cc177e0dd21c233a363af1f76d952800" style="width : 300px; height : 200px; border-radius : 0px 0px 50px 0px;">
  <h3 style = "color : purple; font-weight : bold; position : relative; left : 33rem; bottom : 10rem; font-size : 4rem;">Dr. Anamika Goyal - <br>Anxiety Specialist.<br> UMatter and WHO verified</h3>
  <button class = "ChangeMeButton" style = "background-color : #8f8f8f58; border : 4px solid black; color : purple;" onClick = "justChangeMe()"> Book Appointment</button>
</div>
</div>
`
      anx_add_peer_group.innerHTML = `<a style = "margin-left : 36rem; font-size : 4rem;" href = "https://www.heypeers.com/"> Reach Out To Others!</a>`
      anx_add_spotifyplay.innerHTML = `<img style = "margin-left : 36rem; height : 5rem; width : 5rem;" src = "./assets/spotify.png"><a style = "color : white; text-decoration : none; cursor : pointer; " href = "https://open.spotify.com/playlist/2zYv04WPTCV10YzDwk2Yxb?si=7500dcc924784c59">Your Anxiety Relieving Playlist</a>`;

      const ocd_add_solution = document.getElementById("ocdPS");
      const ocd_add_expert = document.getElementById("ocdME");
      const ocd_add_peer_group = document.getElementById("ocdPG");
      const ocd_add_youtubevid = document.getElementById("ocdYV");
      const ocd_add_spotifyplay = document.getElementById("ocdSP");
      ocd_add_youtubevid.innerHTML = `<iframe style = "box-shadow : 10px 10px 5px purple; margin-left : 36rem; border-radius : 20%;" width="560" height="315" src="https://www.youtube.com/embed/QO2w-iO4Uj8?si=LjmxGxQI8A9vmdLn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
      ocd_add_solution.innerHTML = `The treatment of Obsessive-Compulsive Disorder (OCD) often combines cognitive-behavioral therapy (CBT), particularly exposure and response prevention (ERP), with medication, usually selective serotonin reuptake inhibitors (SSRIs). CBT helps individuals confront and manage obsessions and compulsions, while SSRIs can alleviate symptoms. Combining therapy and medication can provide effective relief from OCD's disruptive patterns.`
      ocd_add_expert.innerHTML = `<div style = "margin-top : 5rem; margin-left : 25rem; overflow : visible"><div class="expertcontainer" style = "display : flex; flex-direction : column; background-color : black; border-radius : 15% 15% 0% 0%; width : 75%; margin-left : 10rem;">
  <img src = "https://img.freepik.com/premium-photo/portrait-cheerful-smiling-young-doctor-with-stethoscope-neck-medical-coat_255757-1414.jpg" style="width : 300px; height : 200px; border-radius : 0px 0px 50px 0px;">
  <h3 style = "color : purple; font-weight : bold; position : relative; left : 33rem; bottom : 10rem; font-size : 4rem;">Dr. Rahul Subhramanyam - <br>OCD Specialist.<br> UMatter and WHO verified</h3>
  <button class = "ChangeMeButton" style = "background-color : #8f8f8f58; border : 4px solid black; color : purple;" onClick = "justChangeMe()"> Book Appointment</button>
</div>
</div>
`
      ocd_add_peer_group.innerHTML = `<a style = "margin-left : 36rem; font-size : 4rem;" href = "https://support.therapytribe.com/ocd-support-group/"> Reach Out To Others!</a>`
      ocd_add_spotifyplay.innerHTML = `<img style = "margin-left : 36rem; height : 5rem; width : 5rem;" src = "./assets/spotify.png"><a style = "color : white; text-decoration : none; cursor : pointer; " href = "https://open.spotify.com/playlist/37i9dQZF1E8zMbhz5QKmHa">Calm your OCD with this playlist</a>`;
    }

    if (OCD_score >= 20) {

      const ocd_add_solution = document.getElementById("ocdPS");
      const ocd_add_expert = document.getElementById("ocdME");
      const ocd_add_peer_group = document.getElementById("ocdPG");
      const ocd_add_youtubevid = document.getElementById("ocdYV");
      const ocd_add_spotifyplay = document.getElementById("ocdSP");
      ocd_add_youtubevid.innerHTML = `<iframe style = "box-shadow : 10px 10px 5px purple; margin-left : 36rem; border-radius : 20%;" width="560" height="315" src="https://www.youtube.com/embed/QO2w-iO4Uj8?si=LjmxGxQI8A9vmdLn" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
      ocd_add_solution.innerHTML = `The treatment of Obsessive-Compulsive Disorder (OCD) often combines cognitive-behavioral therapy (CBT), particularly exposure and response prevention (ERP), with medication, usually selective serotonin reuptake inhibitors (SSRIs). CBT helps individuals confront and manage obsessions and compulsions, while SSRIs can alleviate symptoms. Combining therapy and medication can provide effective relief from OCD's disruptive patterns.`
      ocd_add_expert.innerHTML = `<div style = "margin-top : 5rem; margin-left : 25rem; overflow : visible"><div class="expertcontainer" style = "display : flex; flex-direction : column; background-color : black; border-radius : 15% 15% 0% 0%; width : 75%; margin-left : 10rem;">
  <img src = "https://img.freepik.com/premium-photo/portrait-cheerful-smiling-young-doctor-with-stethoscope-neck-medical-coat_255757-1414.jpg" style="width : 300px; height : 200px; border-radius : 0px 0px 50px 0px;">
  <h3 style = "color : purple; font-weight : bold; position : relative; left : 33rem; bottom : 10rem; font-size : 4rem;">Dr. Rahul Subhramanyam - <br>OCD Specialist.<br> UMatter and WHO verified</h3>
  <button class = "ChangeMeButton" style = "background-color : #8f8f8f58; border : 4px solid black; color : purple;" onClick = "justChangeMe()"> Book Appointment</button>
</div>
</div>
`
      ocd_add_peer_group.innerHTML = `<a style = "margin-left : 36rem; font-size : 4rem;" href = "https://support.therapytribe.com/ocd-support-group/"> Reach Out To Others!</a>`
      ocd_add_spotifyplay.innerHTML = `<img style = "margin-left : 36rem; height : 5rem; width : 5rem;" src = "./assets/spotify.png"><a style = "color : white; text-decoration : none; cursor : pointer; " href = "https://open.spotify.com/playlist/37i9dQZF1E8zMbhz5QKmHa">Calm your OCD with this playlist</a>`;
    }

    if (depression_score >= 20) {

      const dep_add_solution = document.getElementById("depPS");
      const dep_add_expert = document.getElementById("depME");
      const dep_add_peer_group = document.getElementById("depPG");
      const dep_add_youtubevid = document.getElementById("depYV");
      const dep_add_spotifyplay = document.getElementById("depSP");
      dep_add_youtubevid.innerHTML = `<iframe style = "box-shadow : 10px 10px 5px purple; margin-left : 36rem; border-radius : 20%;" width="560" height="315" src="https://www.youtube.com/embed/Yy8e4sw70ow?si=zwtNfrFoOkPBTjL9" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
      dep_add_solution.innerHTML = `The treatment of depression typically involves a multifaceted approach. Psychotherapy, such as cognitive-behavioral therapy (CBT) or interpersonal therapy, helps individuals address underlying emotional issues. Antidepressant medications may be prescribed when necessary, under medical supervision. Lifestyle modifications, exercise, and a strong support system also contribute to successful depression management.`

      dep_add_expert.innerHTML = `<div style = "margin-top : 5rem; margin-left : 25rem; overflow : visible"><div class="expertcontainer" style = "display : flex; flex-direction : column; background-color : black; border-radius : 15% 15% 0% 0%; width : 75%; margin-left : 10rem;">
  <img src = "https://photos.peopleimages.com/picture/202302/2659182-medical-smile-and-happy-with-portrait-of-doctor-for-for-healthcare-expert-and-professional.-medicine-wellness-and-surgeon-with-black-woman-and-arms-crossed-for-proud-confidence-or-life-insurance--fit_400_400.jpg" style="width : 300px; height : 200px; border-radius : 0px 0px 50px 0px;">
  <h3 style = "color : purple; font-weight : bold; position : relative; left : 33rem; bottom : 10rem; font-size : 4rem;">Dr. Ambika Jain - <br>Depression Specialist.<br> UMatter and WHO verified</h3>
  <button class = "ChangeMeButton" style = "background-color : #8f8f8f58; border : 4px solid black; color : purple;" onClick = "justChangeMe()"> Book Appointment</button>
</div>
</div>
`
      dep_add_peer_group.innerHTML = `<a style = "margin-left : 36rem; font-size : 4rem;" href = "https://www.peertalk.org.uk/support-groups"> Reach Out To Others!</a>`
      dep_add_spotifyplay.innerHTML = `<img style = "margin-left : 36rem; height : 5rem; width : 5rem;" src = "./assets/spotify.png"><a style = "color : white; text-decoration : none; cursor : pointer; " href = "https://open.spotify.com/playlist/0nR4wfuH92MCCbMJf11VRa">Beat Depression with this Playlist</a>`;

    }

    if (anxiety_score >= 20) {

      const anx_add_solution = document.getElementById("anxPS");
      const anx_add_expert = document.getElementById("anxME");
      const anx_add_peer_group = document.getElementById("anxPG");
      const anx_add_youtubevid = document.getElementById("anxYV");
      const anx_add_spotifyplay = document.getElementById("anxSP");
      anx_add_youtubevid.innerHTML = `<iframe style = "box-shadow : 10px 10px 5px purple; margin-left : 36rem; border-radius : 20%;" width="560" height="315" src="https://www.youtube.com/embed/BPE5OpYrlLM?si=yAqq8A4glga4dJ8w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`
      anx_add_solution.innerHTML = `The treatment of anxiety typically involves a combination of therapeutic approaches and, in some cases, medication. Cognitive-behavioral therapy (CBT) helps individuals manage anxious thoughts and behaviors, while relaxation techniques and mindfulness meditation can alleviate physical symptoms. Medications like antidepressants and anti-anxiety drugs may also be prescribed when necessary, under a doctor's guidance.`
      anx_add_expert.innerHTML = `<div style = "margin-top : 5rem; margin-left : 25rem; overflow : visible"><div class="expertcontainer" style = "display : flex; flex-direction : column; background-color : black; border-radius : 15% 15% 0% 0%; width : 75%; margin-left : 10rem;">
  <img src = "https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg?t=st=1694235635~exp=1694236235~hmac=04e9db5186f0fdd7c8a191747dffaa52cc177e0dd21c233a363af1f76d952800" style="width : 300px; height : 200px; border-radius : 0px 0px 50px 0px;">
  <h3 style = "color : purple; font-weight : bold; position : relative; left : 33rem; bottom : 10rem; font-size : 4rem;">Dr. Anamika Goyal - <br>Anxiety Specialist.<br> UMatter and WHO verified</h3>
  <button class = "ChangeMeButton" style = "background-color : #8f8f8f58; border : 4px solid black; color : purple;" onClick = "justChangeMe()"> Book Appointment</button>
</div>
</div>
`
      anx_add_peer_group.innerHTML = `<a style = "margin-left : 36rem; font-size : 4rem;" href = "https://www.heypeers.com/"> Reach Out To Others!</a>`
      anx_add_spotifyplay.innerHTML = `<img style = "margin-left : 36rem; height : 5rem; width : 5rem;" src = "./assets/spotify.png"><a style = "color : white; text-decoration : none; cursor : pointer; " href = "https://open.spotify.com/playlist/2zYv04WPTCV10YzDwk2Yxb?si=7500dcc924784c59">Your Anxiety Relieving Playlist</a>`;
    }

  }, 5000)
}

const anxiety_questions = [{ id: 1, "question": "How often do you find yourself feeling excessively worried, nervous, or fearful about various aspects of your life, such as work, relationships, health, or the future?", "value": 0 }, { "id": 2, "question": "Are these worries or fears interfering with your ability to function in your daily activities, such as work, social interactions, or personal responsibilities?", "value": 0 }, { "id": 3, "question": "Do you avoid specific situations, places, or activities due to intense fear or anxiety about potential negative outcomes or embarrassment?", "value": 0 }, { "id": 4, "question": "Are you experiencing physical symptoms such as rapid heartbeat, shortness of breath, sweating, trembling, or a sense of restlessness or feeling on edge, especially in situations that provoke worry or fear?", "value": 0 }, { "id": 5, "question": "Have you been feeling persistently sad, empty, or hopeless for most of the day, nearly every day, for at least two weeks or more?", "value": 0 }, { "id": 6, "question": "Have you lost interest or pleasure in activities that you once enjoyed, such as hobbies, socializing, or work?", "value": 0 }, { "id": 7, "question": "Have you experienced significant changes in your sleep patterns, such as insomnia (difficulty falling or staying asleep) or hypersomnia (excessive sleeping), nearly every day?", "value": 0 }, { "id": 8, "question": "Have you noticed significant changes in your appetite or weight, such as a significant increase or decrease, unrelated to dieting or intentional changes", "value": 0 }, { "id": 9, "question": "Do you have intrusive, unwanted thoughts, images, or urges that cause anxiety or distress?", "value": 0 }, { "id": 10, "question": "Do you engage in repetitive behaviors or mental acts to reduce anxiety or prevent a feared event or situation?", "value": 0 }, { "id": 11, "question": "Are these obsessions and compulsions time-consuming and significantly interfere with your daily activities or relationships?", "value": 0 }, { "id": 12, "question": "Do you find it difficult to control or stop the obsessions and compulsions, even if you recognize they are excessive or unreasonable?", "value": 0 }]


const justChangeMe = () =>{
  const array = document.getElementsByClassName("ChangeMeButton");
  for (i of array){
    i.innerHTML = "Booking Successful!"
  }
}