async function getQueryAnswer() {
  try {
    const divRef = document.querySelector("#weather");
    const queryInputRef = document.querySelector("#query");
    const query = queryInputRef.value;

    const res = await axios.post(
      "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent",
      {
        contents: [
          {
            parts: [
              {
                text: "You are a expert swimmer and you are helping a person to learn swimming. Answer in maximum of 50 words.For other question reply with I am sorry i cannot answer :"
              },
              {
                text: query,
              },
            ],
          },
        ],
      },
      {
        headers: {
          "X-goog-api-key": "AIzaSyCTEhcFVS7-N9PE-ZqAjYZipt6PHb-E0N4",
          "Content-Type": " application/json",
        },
      }
    );
    document.getElementById("answer").innerText =
      res.data.candidates[0].content.parts[0].text;

    //console.log(res.data.candidates[0].content.parts[0].text);
  } catch (err) {
    alert("something went wrong Check your Connection");
  }
}
