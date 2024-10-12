//Questions and Options array
const quizArray = 
[
    {
        "id": "1",
        "question": "Which character in the book represents the victim of addiction? (पुस्तक में कौन सा पात्र नशे की लत के शिकार का प्रतिनिधित्व करता है?)",
        "options": [
          "Mr. Srivastava (श्री श्रीवास्तव)",
          "Aarya (आर्या)",
          "Tanmay (तन्मय)",
          "Ankit (अंकित)"
        ],
        "correct": "Ankit (अंकित)"
      },
      {
        "id": "2",
        "question": "Which of the following is NOT a step mentioned in the '12-steps of Escape' described in the book? (निम्नलिखित में से कौन सा कदम पुस्तक में वर्णित 'पलायन के 12-चरणों' में उल्लिखित नहीं है?)",
        "options": [
          "Making amends for past wrongs (पिछली गलतियों के लिए प्रायश्चित करना)",
          "Seeking help from higher power (उच्च शक्ति से मदद मांगना)",
          "Denying the existence of addiction (व्यसन के अस्तित्व को नकारना)",
          "Admitting powerlessness over addiction (व्यसन पर शक्तिहीनता स्वीकार करना)"
        ],
        "correct": "Denying the existence of addiction (व्यसन के अस्तित्व को नकारना)"
      },
      {
        "id": "3",
        "question": "What is the name of the rehabilitation centre mentioned in the book? (पुस्तक में उल्लिखित पुनर्वास केंद्र का नाम क्या है?)",
        "options": [
          "Sharanam (शरणम्)",
          "Muktangan (मुक्तांगन)",
          "Narconon (नार्कोनन)",
          "Sahaj Marg (सहज मार्ग)"
        ],
        "correct": "Sharanam (शरणम्)"
      },
      {
        "id": "4",
        "question": "What profound insight struck Arya as she watched children construct a sand fort at the beach? (जब आर्या ने बच्चों को समुद्र तट पर रेत का किला बनाते देखा तो उसे क्या अनुभूति हुई?)",
        "options": [
          "Children are always happy (बच्चे हमेशा खुश रहते हैं)",
          "Material things are temporary (भौतिक चीजें अस्थायी हैं)",
          "Life is meaningless (जीवन निरर्थक है)",
          "Addiction is unbeatable (लत अपराजेय है)"
        ],
        "correct": "Material things are temporary (भौतिक चीजें अस्थायी हैं)"
      },
      {
        "id": "5",
        "question": "What is the setting of the initial prologue of the book? (पुस्तक के प्रारंभिक प्रस्तावना की सेटिंग क्या है?)",
        "options": [
          "A busy city street (एक व्यस्त शहर की सड़क)",
          "A tranquil sea shore (एक शांत समुद्र तट)",
          "A bustling market (एक हलचल भरा बाज़ार)",
          "A silent forest (एक शांत जंगल)"
        ],
        "correct": "A tranquil sea shore (एक शांत समुद्र तट)"
      },
      {
        "id": "6",
        "question": "Which character in the book is associated with working in the research wing of Derby Labs? (पुस्तक में कौन सा पात्र डर्बी लैब्स के अनुसंधान विंग में काम करने से जुड़ा है?)",
        "options": [
          "Tanmay (तन्मय)",
          "Ankit (अंकित)",
          "Mr. Srivastava (श्री श्रीवास्तव)",
          "Mr. Chavdekar (श्री चावड़ेकर)"
        ],
        "correct": "Mr. Srivastava (श्री श्रीवास्तव)"
      },
      {
        "id": "7",
        "question": "What was the main message conveyed in Ankit's college speech? (अंकित के कॉलेज भाषण में मुख्य संदेश क्या था?)",
        "options": [
          "Develop a successful career (सफल करियर बनाएं)",
          "Avoid all drugs at any cost (किसी भी कीमत पर सभी नशीले पदार्थों से बचें)",
          "Focus on academics (पढ़ाई पर ध्यान दें)",
          "Follow your passion without fear of the world (दुनिया से डरे बिना अपने जुनून का पालन करें)"
        ],
        "correct": "Follow your passion without fear of the world (दुनिया से डरे बिना अपने जुनून का पालन करें)"
      },
      {
        "id": "8",
        "question": "What did Ankit plan to expose before his untimely death? (अंकित ने अपनी असामयिक मृत्यु से पहले क्या उजागर करने की योजना बनाई थी?)",
        "options": [
          "A political scandal (एक राजनीतिक घोटाला)",
          "A drug peddling network (एक ड्रग तस्करी नेटवर्क)",
          "An academic fraud (एक शैक्षणिक धोखाधड़ी)",
          "A corporate conspiracy (एक कॉर्पोरेट साजिश)"
        ],
        "correct": "A drug peddling network (एक ड्रग तस्करी नेटवर्क)"
      },
      {
        "id": "9",
        "question": "How does the book vividly depict the impact of addiction on the younger generation? (पुस्तक युवा पीढ़ी पर नशे के प्रभाव को किस तरह से स्पष्ट रूप से दर्शाती है?)",
        "options": [
          "It makes them physically stronger (यह उन्हें शारीरिक रूप से मजबूत बनाता है)",
          "It retards their development (यह उनके विकास को धीमा करता है)",
          "It enhances their creativity (यह उनकी रचनात्मकता को बढ़ाता है)",
          "It makes them popular (यह उन्हें लोकप्रिय बनाता है)"
        ],
        "correct": "It retards their development (यह उनके विकास को धीमा करता है)"
      },
      {
        "id": "10",
        "question": "Which character in the book has a transformation journey through a rehabilitation centre? (पुस्तक में किस पात्र की पुनर्वास केंद्र के माध्यम से परिवर्तन यात्रा होती है?)",
        "options": [
          "Tanmay (तन्मय)",
          "Aarya (आर्या)",
          "Ankit (अंकित)",
          "Mr. Srivastava (श्री श्रीवास्तव)"
        ],
        "correct": "Tanmay (तन्मय)"
      }
      {
        "id": "11",
        "question": "What action did Ankit's sister Aarya take to help Tanmay? (अंकित की बहन आर्या ने तन्मय की मदद के लिए क्या कदम उठाया?)",
        "options": [
          "Sent him to a hospital (उसे अस्पताल भेजा)",
          "Convinced him to go to rehab (उसे पुनर्वास केंद्र जाने के लिए राजी किया)",
          "Advised him to run away (उसे भाग जाने की सलाह दी)",
          "Ignored his issues (उसकी समस्याओं को नज़रअंदाज़ किया)"
        ],
        "correct": "Convinced him to go to rehab (उसे पुनर्वास केंद्र जाने के लिए राजी किया)"
      },
      {
        "id": "12",
        "question": "What was Ankit's initial experience after trying drugs for the first time? (पहली बार ड्रग्स लेने के बाद अंकित का शुरुआती अनुभव कैसा था?)",
        "options": [
          "A sense of panic (घबराहट की भावना)",
          "Severe illness (गंभीर बीमारी)",
          "A feeling of euphoria (उत्साह की भावना)",
          "Instant regret (तुरंत पछतावा)"
        ],
        "correct": "A feeling of euphoria (उत्साह की भावना)"
      },
      {
        "id": "13",
        "question": "What was the role of Mr. Mandar Sahastrabuddhe in Derby Labs? (डर्बी लैब्स में श्री मंदार सहस्त्रबुद्धे की भूमिका क्या थी?)",
        "options": [
          "Managing Director (प्रबंध निदेशक)",
          "Head of Research (अनुसंधान प्रमुख)",
          "Chief Financial Officer (मुख्य वित्तीय अधिकारी)",
          "Security In-charge (सुरक्षा प्रभारी)"
        ],
        "correct": "Head of Research (अनुसंधान प्रमुख)"
      },
      {
        "id": "14",
        "question": "What was the name of the program followed in the rehabilitation centre in the book? (पुस्तक में पुनर्वास केंद्र में अपनाए गए कार्यक्रम का नाम क्या था?)",
        "options": [
          "12-Step Program (12-चरणीय कार्यक्रम)",
          "Alcoholics Anonymous (शराबी बेनामी)",
          "Cognitive Behavioural Therapy (संज्ञानात्मक व्यवहार थेरेपी)",
          "Dialectical Behaviour Therapy (द्वंद्वात्मक व्यवहार थेरेपी)"
        ],
        "correct": "12-Step Program (12-चरणीय कार्यक्रम)"
      },
      {
        "id": "15",
        "question": "What did Ankit hope to achieve with his mission? (अंकित को अपने मिशन से क्या हासिल करने की उम्मीद थी?)",
        "options": [
          "Become famous (मशहूर होना)",
          "Expose the drug network and its impact on youth (ड्रग नेटवर्क और युवाओं पर इसके प्रभाव को उजागर करना)",
          "Start a business (व्यवसाय शुरू करना)",
          "Get a government job (सरकारी नौकरी पाना)"
        ],
        "correct": "Expose the drug network and its impact on youth (ड्रग नेटवर्क और युवाओं पर इसके प्रभाव को उजागर करना)"
      },
      {
        "id": "16",
        "question": "What were Aarya's thoughts on her capability to continue Ankit's mission? (अंकित के मिशन को जारी रखने की अपनी क्षमता पर आर्या के क्या विचार थे?)",
        "options": [
          "She felt angry (उसे गुस्सा आया)",
          "She felt confident (उसे आत्मविश्वास महसूस हुआ)",
          "She felt indifferent (उसे उदासीनता महसूस हुई)",
          "She felt too weak (उसे बहुत कमज़ोर महसूस हुआ)"
        ],
        "correct": "She felt too weak (उसे बहुत कमज़ोर महसूस हुआ)"
      },
      {
        "id": "17",
        "question": "Why was Tanmay hesitant to go to a rehabilitation center at first? (तन्मय पहले पुनर्वास केंद्र जाने से क्यों हिचकिचा रहा था?)",
        "options": [
          "He did not want to appear as a failure (वह असफल व्यक्ति के रूप में सामने नहीं आना चाहता था)",
          "He had no time (उसके पास समय नहीं था)",
          "He was afraid of the expenses (वह खर्चों से डरता था)",
          "He was afraid of the medical procedures (वह चिकित्सा प्रक्रियाओं से डरता था)"
        ],
        "correct": "He did not want to appear as a failure (वह असफल व्यक्ति के रूप में सामने नहीं आना चाहता था)"
      },
      {
        "id": "18",
        "question": "Based on the book, what was one reason behind the rise of drug addiction in India? (पुस्तक के आधार पर भारत में नशीली दवाओं की लत बढ़ने के पीछे एक कारण क्या था?)",
        "options": [
          "Government policies (सरकारी नीतियाँ)",
          "Peer pressure and media influence (साथियों का दबाव और मीडिया का प्रभाव)",
          "Lack of education (शिक्षा की कमी)",
          "Political instability (राजनीतिक अस्थिरता)"
        ],
        "correct": "Peer pressure and media influence (साथियों का दबाव और मीडिया का प्रभाव)"
      },
      {
        "id": "19",
        "question": "How did Ankit’s family react to his addiction problem? (अंकित के परिवार ने उसकी नशे की लत की समस्या पर कैसी प्रतिक्रिया व्यक्त की?)",
        "options": [
          "They ignored it (उन्होंने इसे नज़रअंदाज़ किया)",
          "They were supportive but anxious (वे सहायक थे लेकिन चिंतित थे)",
          "They disowned him (उन्होंने उसे अस्वीकार कर दिया)",
          "They celebrated his choices (उन्होंने उसके विकल्पों का जश्न मनाया)"
        ],
        "correct": "They were supportive but anxious (वे सहायक थे लेकिन चिंतित थे)"
      },
      {
        "id": "20",
        "question": "What was Tanmay struggling with after Ankit's death? (अंकित की मौत के बाद तन्मय किस समस्या से जूझ रहा था?)",
        "options": [
          "Completing his studies (अपनी पढ़ाई पूरी करना)",
          "Financial issues (वित्तीय समस्याएँ)",
          "Coping with grief and alcoholism (दुख और शराब की लत से निपटना)",
          "Moving to another city (दूसरे शहर में जाना)"
        ],
        "correct": "Coping with grief and alcoholism (दुख और शराब की लत से निपटना)"
      }
      {
        "id": "21",
        "question": "What is the role of media in promoting addiction according to the book? (पुस्तक के अनुसार नशे की लत को बढ़ावा देने में मीडिया की क्या भूमिका है?)",
        "options": [
          "Media remains neutral (मीडिया तटस्थ रहता है)",
          "Media promotes addiction through glamorous portrayals (मीडिया ग्लैमरस चित्रण के माध्यम से नशे की लत को बढ़ावा देता है)",
          "Media promotes education on addiction (मीडिया नशे की लत पर शिक्षा को बढ़ावा देता है)",
          "Media discourages addiction (मीडिया नशे की लत को हतोत्साहित करता है)"
        ],
        "correct": "Media promotes addiction through glamorous portrayals (मीडिया ग्लैमरस चित्रण के माध्यम से नशे की लत को बढ़ावा देता है)"
      },
      {
        "id": "22",
        "question": "What action did Aarya take after deciding to carry on Ankit's mission? (अंकित के मिशन को आगे बढ़ाने का फैसला करने के बाद आर्या ने क्या कदम उठाया?)",
        "options": [
          "She went to the media (वह मीडिया के पास गई)",
          "She started investigating the drug network (उसने ड्रग नेटवर्क की जांच शुरू कर दी)",
          "She moved abroad (वह विदेश चली गई)",
          "She quit her job (उसने अपनी नौकरी छोड़ दी)"
        ],
        "correct": "She started investigating the drug network (उसने ड्रग नेटवर्क की जांच शुरू कर दी)"
      },
      {
        "id": "23",
        "question": "What is the meaning of 'Sharanam,' the name of the rehabilitation centre? (पुनर्वास केंद्र के नाम 'शरणम' का क्या अर्थ है?)",
        "options": [
          "Peace (शांति)",
          "Strength (शक्ति)",
          "Shelter (आश्रय)",
          "Freedom (स्वतंत्रता)"
        ],
        "correct": "Shelter (आश्रय)"
      },
      {
        "id": "24",
        "question": "What makes the 'Double Edged' chapter so significant in the book? (पुस्तक में 'डबल एज्ड' अध्याय इतना महत्वपूर्ण क्यों है?)",
        "options": [
          "It talks about Ankit's career aspirations (यह अंकित की करियर आकांक्षाओं के बारे में बात करता है)",
          "It discusses how drugs can be both useful and harmful (यह चर्चा करता है कि ड्रग्स कैसे उपयोगी और हानिकारक दोनों हो सकते हैं)",
          "It describes Ankit's relationship with his sister (यह अंकित के अपनी बहन के साथ संबंधों का वर्णन करता है)",
          "It outlines a business deal (यह एक व्यापारिक सौदे की रूपरेखा प्रस्तुत करता है)"
        ],
        "correct": "It discusses how drugs can be both useful and harmful (यह चर्चा करता है कि ड्रग्स कैसे उपयोगी और हानिकारक दोनों हो सकते हैं)"
      },
      {
        "id": "25",
        "question": "Who was instrumental in helping Tanmay get admitted to the rehabilitation centre? (तन्मय को पुनर्वास केंद्र में भर्ती करवाने में किसने महत्वपूर्ण भूमिका निभाई?)",
        "options": [
          "Ankit (अंकित)",
          "Dr. Vivek Bindra (डॉ. विवेक बिंद्रा)",
          "Mr. Srivastava (श्री श्रीवास्तव)",
          "Aarya (आर्या)"
        ],
        "correct": "Aarya (आर्या)"
      },
      {
        "id": "26",
        "question": "What were the symptoms that Tanmay encountered during his withdrawal phase? (तन्मय को अपने वापसी चरण के दौरान किन लक्षणों का सामना करना पड़ा?)",
        "options": [
          "Euphoria and joy (उत्साह और खुशी)",
          "Increased appetite and sleepiness (भूख और नींद में वृद्धि)",
          "Nausea, insomnia, and shivering (मतली, अनिद्रा और कंपकंपी)",
          "Weight gain and lethargy (वजन बढ़ना और सुस्ती)"
        ],
        "correct": "Nausea, insomnia, and shivering (मतली, अनिद्रा और कंपकंपी)"
      },
      {
        "id": "27",
        "question": "Who helped Aarya and her family by giving information about their cell operations? (आर्या और उसके परिवार को उनके सेल संचालन के बारे में जानकारी देकर किसने मदद की?)",
        "options": [
          "Mr. Chafekar (श्री चाफेकर)",
          "Mrs. Swati Thorat and Mrs. Radhika Phadke (श्रीमती स्वाति थोरात और श्रीमती राधिका फड़के)",
          "Mr. Srivastava (श्री श्रीवास्तव)",
          "Dr. Vivek Bindra (डॉ. विवेक बिंद्रा)"
        ],
        "correct": "Mrs. Swati Thorat and Mrs. Radhika Phadke (श्रीमती स्वाति थोरात और श्रीमती राधिका फड़के)"
      },
      {
        "id": "28",
        "question": "How did Tanmay react to the news of Ankit's passing? (अंकित की मौत की खबर सुनकर तन्मय की क्या प्रतिक्रिया थी?)",
        "options": [
          "He immediately started an investigation (उसने तुरंत जांच शुरू कर दी)",
          "He felt numb and turned to alcohol (वह सुन्न हो गया और शराब पीने लगा)",
          "He moved to a different city (वह दूसरे शहर में चला गया)",
          "He joined the military (वह सेना में शामिल हो गया)"
        ],
        "correct": "He felt numb and turned to alcohol (वह सुन्न हो गया और शराब पीने लगा)"
      },
      {
        "id": "29",
        "question": "What realization did Tanmay have about the effects of addiction on his own life? (तन्मय को अपने जीवन पर नशे की लत के प्रभावों के बारे में क्या अहसास हुआ?)",
        "options": [
          "It had no impact (इसका कोई प्रभाव नहीं पड़ा)",
          "It destroyed his relationships and career (इसने उसके रिश्तों और करियर को नष्ट कर दिया)",
          "It helped him socialize better (इसने उसे बेहतर सामाजिकता में मदद की)",
          "It enhanced his creativity (इसने उसकी रचनात्मकता को बढ़ाया)"
        ],
        "correct": "It destroyed his relationships and career (इसने उसके रिश्तों और करियर को नष्ट कर दिया)"
      },
      {
        "id": "30",
        "question": "According to the book, what was one of the most crucial lessons gained from the rehabilitation centre? (पुस्तक के अनुसार पुनर्वास केंद्र से प्राप्त सबसे महत्वपूर्ण सबक क्या था?)",
        "options": [
          "Addiction can be overcome with community support (समुदाय के सहयोग से नशे की लत पर काबू पाया जा सकता है)",
          "Always follow your instincts (हमेशा अपनी प्रवृत्ति का पालन करें)",
          "Never trust anyone (कभी किसी पर भरोसा न करें)",
          "Independence is the key to success (स्वतंत्रता सफलता की कुंजी है)"
        ],
        "correct": "Addiction can be overcome with community support (समुदाय के सहयोग से नशे की लत पर काबू पाया जा सकता है)"
      }
      {
        "id": "31",
        "question": "What did Ankit’s father do for a living? (अंकित के पिता जीविका के लिए क्या करते थे?)",
        "options": [
          "Police officer (पुलिस अधिकारी)",
          "Fashion designer (फैशन डिजाइनर)",
          "Freelance business consultant (फ्रीलांस बिजनेस कंसल्टेंट)",
          "Doctor (डॉक्टर)"
        ],
        "correct": "Freelance business consultant (फ्रीलांस बिजनेस कंसल्टेंट)"
      },
      {
        "id": "32",
        "question": "What significance did Aarya attribute to the boat on the sea? (आर्य ने समुद्र पर नाव को क्या महत्व दिया?)",
        "options": [
          "The dangers of addiction (व्यसन के खतरे)",
          "The importance of safety (सुरक्षा का महत्व)",
          "The need to travel the world (दुनिया की यात्रा करने की आवश्यकता)",
          "The idea of taking shelter in a higher power (उच्च शक्ति में शरण लेने का विचार)"
        ],
        "correct": "The idea of taking shelter in a higher power (उच्च शक्ति में शरण लेने का विचार)"
      },
      {
        "id": "33",
        "question": "What did Ankit think about addiction before he personally encountered it? (अंकित नशे की लत के बारे में क्या सोचता था इससे पहले कि वह व्यक्तिगत रूप से इसका सामना करता?)",
        "options": [
          "He believed he could control it (उसे विश्वास था कि वह इसे नियंत्रित कर सकता है)",
          "He was curious and wanted to try it (वह उत्सुक था और इसे आज़माना चाहता था)",
          "He was indifferent to it (वह इसके प्रति उदासीन था)",
          "He was completely against it (वह इसके पूरी तरह खिलाफ था)"
        ],
        "correct": "He believed he could control it (उसे विश्वास था कि वह इसे नियंत्रित कर सकता है)"
      },
      {
        "id": "34",
        "question": "Who inspired Tanmay to start using drugs? (तन्मय को ड्रग्स का सेवन शुरू करने के लिए किसने प्रेरित किया?)",
        "options": [
          "His parents (उसके माता-पिता)",
          "Ankit and his friends (अंकित और उसके दोस्त)",
          "Aarya (आर्या)",
          "Mr. Srivastava (श्री श्रीवास्तव)"
        ],
        "correct": "Ankit and his friends (अंकित और उसके दोस्त)"
      },
      {
        "id": "35",
        "question": "What is the first step in the 12-step program mentioned in the book? (पुस्तक में वर्णित 12-चरणीय कार्यक्रम में पहला कदम क्या है?)",
        "options": [
          "Making amends with others (दूसरों के साथ सुलह करना)",
          "Admitting powerlessness over addiction (व्यसन पर शक्तिहीनता स्वीकार करना)",
          "Seeking guidance from others (दूसरों से मार्गदर्शन मांगना)",
          "Practicing meditation (ध्यान का अभ्यास करना)"
        ],
        "correct": "Admitting powerlessness over addiction (व्यसन पर शक्तिहीनता स्वीकार करना)"
      },
      {
        "id": "36",
        "question": "Which organization is hinted at being involved in spreading drug addiction in India according to the book? (पुस्तक के अनुसार भारत में नशाखोरी फैलाने में किस संगठन का हाथ होने का संकेत मिलता है?)",
        "options": [
          "CIA (सी.आई.ए.)",
          "MI6 (एम.आई.6)",
          "ISI (आई.एस.आई.)",
          "KGB (के.जी.बी.)"
        ],
        "correct": "ISI (आई.एस.आई.)"
      },
      {
        "id": "37",
        "question": "What is the primary message conveyed through the book 'Weed Out'? (वीड आउट पुस्तक के माध्यम से मुख्य संदेश क्या दिया गया है?)",
        "options": [
          "The consequences of addiction and the importance of de-addiction (व्यसन के परिणाम और नशामुक्ति का महत्व)",
          "The benefits of a lavish lifestyle (एक शानदार जीवनशैली के लाभ)",
          "The advantages of drug use for relaxation (विश्राम के लिए नशीली दवाओं के उपयोग के लाभ)",
          "The need for material success (भौतिक सफलता की आवश्यकता)"
        ],
        "correct": "The consequences of addiction and the importance of de-addiction (व्यसन के परिणाम और नशामुक्ति का महत्व)"
      },
      {
        "id": "38",
        "question": "What is the true essence of the '12-step program' as outlined in the book? (पुस्तक में बताए गए '12-चरणीय कार्यक्रम' का वास्तविक सार क्या है?)",
        "options": [
          "To help people become rich (लोगों को अमीर बनने में मदद करना)",
          "To forget past mistakes (पिछली गलतियों को भूलना)",
          "To learn new skills (नए कौशल सीखना)",
          "To provide a spiritual awakening and help others (आध्यात्मिक जागृति प्रदान करना और दूसरों की मदद करना)"
        ],
        "correct": "To provide a spiritual awakening and help others (आध्यात्मिक जागृति प्रदान करना और दूसरों की मदद करना)"
      },
      {
        "id": "39",
        "question": "According to the book, what are the primary factors that lead young people to addiction? (पुस्तक के अनुसार युवा लोगों को नशे की लत की ओर ले जाने वाले प्राथमिक कारक क्या हैं?)",
        "options": [
          "Curiosity and experimentation (जिज्ञासा और प्रयोग)",
          "Peer pressure, media influence, and lack of awareness (साथियों का दबाव, मीडिया का प्रभाव और जागरूकता की कमी)",
          "Lack of education (शिक्षा की कमी)",
          "Political instability (राजनीतिक अस्थिरता)"
        ],
        "correct": "Peer pressure, media influence, and lack of awareness (साथियों का दबाव, मीडिया का प्रभाव और जागरूकता की कमी)"
      },
      {
        "id": "40",
        "question": "How did the character Larry overcome his addiction? (लैरी नामक पात्र ने अपनी लत पर कैसे काबू पाया?)",
        "options": [
          "By isolating himself (खुद को अलग-थलग करके)",
          "By moving to another city (दूसरे शहर में जाकर)",
          "By joining a support group and following the 12-step program (सहायता समूह में शामिल होकर और 12-चरणीय कार्यक्रम का पालन करके)",
          "By taking medication (दवाएँ लेकर)"
        ],
        "correct": "By joining a support group and following the 12-step program (सहायता समूह में शामिल होकर और 12-चरणीय कार्यक्रम का पालन करके)"
      }
      {
        "id": "41",
        "question": "What did the 'mission impossible' mentioned by Ankit refer to? (अंकित द्वारा उल्लिखित 'मिशन इम्पॉसिबल' का क्या मतलब था?)",
        "options": [
          "Overcoming his addiction (अपनी लत पर काबू पाना)",
          "Writing a book (किताब लिखना)",
          "Exposing the drug network (ड्रग नेटवर्क का पर्दाफाश करना)",
          "Going on a world tour (विश्व भ्रमण पर जाना)"
        ],
        "correct": "Exposing the drug network (ड्रग नेटवर्क का पर्दाफाश करना)"
      },
      {
        "id": "42",
        "question": "What does the book suggest as a key factor for overcoming addiction? (पुस्तक में नशे की लत पर काबू पाने के लिए मुख्य कारक के रूप में क्या सुझाव दिया गया है?)",
        "options": [
          "Willpower alone (केवल इच्छाशक्ति)",
          "Strong support system and proper guidance (मजबूत सहायता प्रणाली और उचित मार्गदर्शन)",
          "Avoiding all social interactions (सभी सामाजिक मेलजोल से बचना)",
          "Changing one's name (अपना नाम बदलना)"
        ],
        "correct": "Strong support system and proper guidance (मजबूत सहायता प्रणाली और उचित मार्गदर्शन)"
      },
      {
        "id": "43",
        "question": "What internal conflict did Ankit experience before he became addicted to drugs? (अंकित को नशे की लत लगने से पहले किस आंतरिक संघर्ष का सामना करना पड़ा?)",
        "options": [
          "He struggled between the societal pressure to succeed and his desire to explore the unknown (वह सफल होने के लिए सामाजिक दबाव और अज्ञात की खोज करने की अपनी इच्छा के बीच संघर्ष कर रहा था)",
          "He couldn’t choose between two romantic interests (वह दो रोमांटिक रुचियों के बीच चयन नहीं कर पा रहा था)",
          "He was torn between his career and his family (वह अपने करियर और अपने परिवार के बीच फंसा हुआ था)",
          "He wanted to travel the world but felt obligated to stay home (वह दुनिया की यात्रा करना चाहता था लेकिन घर पर रहना उसके लिए बाध्यता थी)"
        ],
        "correct": "He struggled between the societal pressure to succeed and his desire to explore the unknown (वह सफल होने के लिए सामाजिक दबाव और अज्ञात की खोज करने की अपनी इच्छा के बीच संघर्ष कर रहा था)"
      },
      {
        "id": "44",
        "question": "How does the book vividly capture the concept of 'vulnerability' through the character of Aarya? (पुस्तक आर्या के चरित्र के माध्यम से 'भेद्यता' की अवधारणा को कैसे स्पष्ट रूप से प्रस्तुत करती है?)",
        "options": [
          "By showing her financial difficulties (उसकी वित्तीय कठिनाइयों को दर्शाकर)",
          "By highlighting her dependence on others for decision-making (निर्णय लेने के लिए दूसरों पर उसकी निर्भरता को उजागर करके)",
          "By showing her as a physically weak character (उसे शारीरिक रूप से कमज़ोर चरित्र के रूप में दिखाकर)",
          "By depicting her initial hesitation to take up Ankit’s mission despite feeling vulnerable after his death (अंकित की मृत्यु के बाद कमज़ोर महसूस करने के बावजूद उसके मिशन को अपनाने में उसकी शुरुआती हिचकिचाहट को दर्शाकर)"
        ],
        "correct": "By depicting her initial hesitation to take up Ankit’s mission despite feeling vulnerable after his death (अंकित की मृत्यु के बाद कमज़ोर महसूस करने के बावजूद उसके मिशन को अपनाने में उसकी शुरुआती हिचकिचाहट को दर्शाकर)"
      },
      {
        "id": "45",
        "question": "What is the symbolic significance of the boat scene that Aarya witnesses? (आर्या द्वारा देखे गए नाव दृश्य का प्रतीकात्मक महत्व क्या है?)",
        "options": [
          "It depicts the dangers of the sea and the fear of the unknown (यह समुद्र के खतरों और अज्ञात के डर को दर्शाता है)",
          "It represents the instability of human emotions (यह मानवीय भावनाओं की अस्थिरता का प्रतिनिधित्व करता है)",
          "It symbolizes the journey of life and the importance of faith in overcoming challenges (यह जीवन की यात्रा और चुनौतियों पर काबू पाने में विश्वास के महत्व का प्रतीक है)",
          "It highlights the need for luxury and comfort (यह विलासिता और आराम की आवश्यकता पर प्रकाश डालता है)"
        ],
        "correct": "It symbolizes the journey of life and the importance of faith in overcoming challenges (यह जीवन की यात्रा और चुनौतियों पर काबू पाने में विश्वास के महत्व का प्रतीक है)"
      },
      {
        "id": "46",
        "question": "How does the author utilize the character of Larry to symbolize the transition from despair to hope? (लेखक ने निराशा से आशा की ओर संक्रमण को दर्शाने के लिए लैरी के चरित्र का उपयोग कैसे किया है?)",
        "options": [
          "By portraying him as a constant sufferer of addiction (उसे नशे की लत से लगातार पीड़ित के रूप में चित्रित करके)",
          "By showing his transformation from an addict to a support group volunteer who helps others (एक नशेड़ी से एक सहायता समूह के स्वयंसेवक में उसके परिवर्तन को दिखाकर जो दूसरों की मदद करता है)",
          "By depicting his escape to another country to avoid his problems (अपनी समस्याओं से बचने के लिए दूसरे देश में भागने का चित्रण करके)",
          "By portraying his denial of addiction until the very end (नशे की लत को अंत तक नकारने का चित्रण करके)"
        ],
        "correct": "By showing his transformation from an addict to a support group volunteer who helps others (एक नशेड़ी से एक सहायता समूह के स्वयंसेवक में उसके परिवर्तन को दिखाकर जो दूसरों की मदद करता है)"
      },
      {
        "id": "47",
        "question": "What deeper philosophical meaning does Ankit's initial curiosity about drugs represent in the book? (अंकित की नशीली दवाओं के बारे में शुरुआती जिज्ञासा पुस्तक में किस गहरे दार्शनिक अर्थ को दर्शाती है?)",
        "options": [
          "The desire to become financially independent (आर्थिक रूप से स्वतंत्र होने की इच्छा)",
          "The pursuit of academic excellence (शैक्षणिक उत्कृष्टता की खोज)",
          "The human tendency to seek out novel experiences often without considering the consequences (अक्सर परिणामों पर विचार किए बिना नए अनुभवों की तलाश करने की मानवीय प्रवृत्ति)",
          "The fear of being left behind by society (समाज द्वारा पीछे छोड़ दिए जाने का डर)"
        ],
        "correct": "The human tendency to seek out novel experiences often without considering the consequences (अक्सर परिणामों पर विचार किए बिना नए अनुभवों की तलाश करने की मानवीय प्रवृत्ति)"
      },
      {
        "id": "48",
        "question": "What does the contrast between Ankit’s public image and his private struggles reveal about societal expectations? (अंकित की सार्वजनिक छवि और उसके निजी संघर्षों के बीच का अंतर सामाजिक अपेक्षाओं के बारे में क्या बताता है?)",
        "options": [
          "It suggests that private struggles are irrelevant in the public domain (यह सुझाव देता है कि सार्वजनिक क्षेत्र में निजी संघर्ष अप्रासंगिक हैं)",
          "It shows the importance of following societal norms (यह सामाजिक मानदंडों का पालन करने के महत्व को दर्शाता है)",
          "It highlights the discrepancy between how society rewards success and ignores personal well-being (यह इस बात पर प्रकाश डालता है कि समाज किस तरह सफलता को पुरस्कृत करता है और व्यक्तिगत भलाई को अनदेखा करता है)",
          "It portrays the insignificance of public opinion (यह जनमत की तुच्छता को दर्शाता है)"
        ],
        "correct": "It highlights the discrepancy between how society rewards success and ignores personal well-being (यह इस बात पर प्रकाश डालता है कि समाज किस तरह सफलता को पुरस्कृत करता है और व्यक्तिगत भलाई को अनदेखा करता है)"
      },
      {
        "id": "49",
        "question": "How does Tanmay's journey vividly depict the constant battle between dependency and self-control? (तन्मय की यात्रा निर्भरता और आत्म-नियंत्रण के बीच निरंतर संघर्ष को कैसे स्पष्ट रूप से दर्शाती है?)",
        "options": [
          "By showing his obsession with fame (प्रसिद्धि के प्रति अपने जुनून को दर्शाकर)",
          "By his struggle to choose between two jobs (दो नौकरियों के बीच चयन करने के अपने संघर्ष से)",
          "By his career choices (अपने करियर विकल्पों से)",
          "Through his oscillation between the desire to overcome addiction and the ease of succumbing to alcohol (नशे की लत पर काबू पाने की इच्छा और शराब के प्रति आसानी से झुकने के बीच अपने दोलन के माध्यम से)"
        ],
        "correct": "Through his oscillation between the desire to overcome addiction and the ease of succumbing to alcohol (नशे की लत पर काबू पाने की इच्छा और शराब के प्रति आसानी से झुकने के बीच अपने दोलन के माध्यम से)"
      },
      {
        "id": "50",
        "question": "What philosophical question is posed by Ankit’s view on whether there is an absolute standard to judge one's intentions? (अंकित के इस विचार से कौन-सा दार्शनिक प्रश्न उठता है कि क्या किसी के इरादों को परखने के लिए कोई निरपेक्ष मानक है?)",
        "options": [
          "Can morality exist without an absolute standard? (क्या नैतिकता निरपेक्ष मानक के बिना मौजूद हो सकती है?)",
          "Is wealth the most important aspect of life? (क्या धन-संपत्ति जीवन का सबसे महत्वपूर्ण पहलू है?)",
          "Should education be compulsory for all? (क्या शिक्षा सभी के लिए अनिवार्य होनी चाहिए?)",
          "Is war necessary for peace? (क्या शांति के लिए युद्ध आवश्यक है?)"
        ],
        "correct": "Can morality exist without an absolute standard? (क्या नैतिकता निरपेक्ष मानक के बिना मौजूद हो सकती है?)"
      }
      {
        "id": "51",
        "question": "What is a common reason for individuals to start using drugs? (व्यक्तियों द्वारा नशीली दवाओं का उपयोग शुरू करने का एक सामान्य कारण क्या है?)",
        "options": [
          "Desire for adventure and novelty (रोमांच और नवीनता की इच्छा)",
          "Peer pressure and social influence (साथियों का दबाव और सामाजिक प्रभाव)",
          "Stress relief and escape from problems (तनाव से राहत और समस्याओं से बचना)",
          "All of the above (उपरोक्त सभी)"
        ],
        "correct": "All of the above (उपरोक्त सभी)"
      },
      {
        "id": "52",
        "question": "What are some common signs of drug addiction? (नशीली चीज़ो की लत के कुछ सामान्य लक्षण क्या हैं?)",
        "options": [
          "Improved health and happiness (बेहतर स्वास्थ्य और खुशी)",
          "Changes in behaviour, secrecy, and neglect of responsibilities (व्यवहार में बदलाव, गोपनीयता और जिम्मेदारियों की उपेक्षा)",
          "Increased interest in studies and sports (पढ़ाई और खेल में रुचि बढ़ना)",
          "Decreased spending (खर्च में कमी)"
        ],
        "correct": "Changes in behaviour, secrecy, and neglect of responsibilities (व्यवहार में बदलाव, गोपनीयता और जिम्मेदारियों की उपेक्षा)"
      },
      {
        "id": "53",
        "question": "Which of the following is NOT a step in the 12-step program? (निम्नलिखित में से कौन सा 12-चरणीय कार्यक्रम का चरण नहीं है?)",
        "options": [
          "Admitting powerlessness over addiction (व्यसन पर शक्तिहीनता स्वीकार करना)",
          "Making a list of people you have harmed (उन लोगों की सूची बनाना जिन्हें आपने नुकसान पहुँचाया है)",
          "Giving up any kind of prayer or meditation (किसी भी तरह की प्रार्थना या ध्यान को छोड़ देना)",
          "Seeking help from a higher power (उच्च शक्ति से मदद माँगना)"
        ],
        "correct": "Giving up any kind of prayer or meditation (किसी भी तरह की प्रार्थना या ध्यान को छोड़ देना)"
      },
      {
        "id": "54",
        "question": "How does the lack of education and awareness contribute to drug addiction? (शिक्षा और जागरूकता की कमी किस तरह से नशीली दवाओं की लत में योगदान देती है?)",
        "options": [
          "It has no impact (इसका कोई प्रभाव नहीं पड़ता)",
          "It creates curiosity and encourages people to try drugs (यह जिज्ञासा पैदा करता है और लोगों को नशीली दवाओं को आजमाने के लिए प्रोत्साहित करता है)",
          "It leads to misinformation and ignorance about the harmful effects of drugs (यह नशीली दवाओं के हानिकारक प्रभावों के बारे में गलत सूचना और अज्ञानता को जन्म देता है)",
          "It makes people immune to addiction (यह लोगों को नशे की लत से बचाता है)"
        ],
        "correct": "It leads to misinformation and ignorance about the harmful effects of drugs (यह नशीली दवाओं के हानिकारक प्रभावों के बारे में गलत सूचना और अज्ञानता को जन्म देता है)"
      },
      {
        "id": "55",
        "question": "Which psychological disorder is often associated with a higher risk of developing addiction? (कौन सा मनोवैज्ञानिक विकार अक्सर लत विकसित होने के उच्च जोखिम से जुड़ा होता है?)",
        "options": [
          "Schizophrenia (सिज़ोफ्रेनिया)",
          "Depression and anxiety disorders (अवसाद और चिंता विकार)",
          "High IQ (उच्च IQ)",
          "Eating disorders (खाने के विकार)"
        ],
        "correct": "Depression and anxiety disorders (अवसाद और चिंता विकार)"
      },
      {
        "id": "56",
        "question": "What is one of the main health consequences of prolonged drug abuse? (दीर्घकालिक नशीली दवाओं के दुरुपयोग के मुख्य स्वास्थ्य परिणामों में से एक क्या है?)",
        "options": [
          "Improved immunity (बेहतर प्रतिरक्षा)",
          "Enhanced cognitive abilities (बढ़ी हुई संज्ञानात्मक क्षमताएँ)",
          "Damage to vital organs like the liver, heart, and brain (यकृत, हृदय और मस्तिष्क जैसे महत्वपूर्ण अंगों को नुकसान)",
          "Increased physical strength (शारीरिक शक्ति में वृद्धि)"
        ],
        "correct": "Damage to vital organs like the liver, heart, and brain (यकृत, हृदय और मस्तिष्क जैसे महत्वपूर्ण अंगों को नुकसान)"
      },
      {
        "id": "57",
        "question": "According to the book 'Weed Out', what is a major social consequence of drug addiction? (वीड आउट पुस्तक के अनुसार नशे की लत का एक प्रमुख सामाजिक परिणाम क्या है?)",
        "options": [
          "Increased popularity among peers (साथियों के बीच लोकप्रियता में वृद्धि)",
          "Strengthened family relationships (परिवार के रिश्तों में मजबूती)",
          "Social isolation and breakdown of relationships (सामाजिक अलगाव और रिश्तों का टूटना)",
          "Improved job performance (नौकरी के प्रदर्शन में सुधार)"
        ],
        "correct": "Social isolation and breakdown of relationships (सामाजिक अलगाव और रिश्तों का टूटना)"
      },
      {
        "id": "58",
        "question": "How does substance abuse typically affect a person’s mental health? (नशीली चीज़ों का दुरुपयोग आमतौर पर किसी व्यक्ति के मानसिक स्वास्थ्य को कैसे प्रभावित करता है?)",
        "options": [
          "It enhances creativity (यह रचनात्मकता को बढ़ाता है)",
          "It has no impact (इसका कोई प्रभाव नहीं पड़ता)",
          "It can lead to mental health disorders such as depression, anxiety, and psychosis (यह अवसाद, चिंता और मनोविकृति जैसे मानसिक स्वास्थ्य विकारों का कारण बन सकता है)",
          "It cures mental health disorders (यह मानसिक स्वास्थ्य विकारों को ठीक करता है)"
        ],
        "correct": "It can lead to mental health disorders such as depression, anxiety, and psychosis (यह अवसाद, चिंता और मनोविकृति जैसे मानसिक स्वास्थ्य विकारों का कारण बन सकता है)"
      },
      {
        "id": "59",
        "question": "In 'Weed Out', what consequence does Ankit face as a result of his addiction? (वीड आउट में, अंकित को अपनी लत के परिणामस्वरूप किस परिणाम का सामना करना पड़ा?)",
        "options": [
          "He becomes a successful businessman (वह एक सफल व्यवसायी बन जाता है)",
          "He wins an academic award (वह एक शैक्षणिक पुरस्कार जीतता है)",
          "He suffers from health problems, alienates his family, and ultimately dies from a drug overdose (वह स्वास्थ्य समस्याओं से पीड़ित होता है, अपने परिवार से अलग हो जाता है और अंततः नशीली दवाओं के ओवरडोज से मर जाता है)",
          "He becomes a motivational speaker (वह एक प्रेरक वक्ता बन जाता है)"
        ],
        "correct": "He suffers from health problems, alienates his family, and ultimately dies from a drug overdose (वह स्वास्थ्य समस्याओं से पीड़ित होता है, अपने परिवार से अलग हो जाता है और अंततः नशीली दवाओं के ओवरडोज से मर जाता है)"
      },
      {
        "id": "60",
        "question": "What impact does substance abuse have on academic and professional life? (नशीली चीज़ों का दुरुपयोग शैक्षणिक और व्यावसायिक जीवन पर क्या प्रभाव डालता है?)",
        "options": [
          "It usually enhances performance (यह आमतौर पर प्रदर्शन को बढ़ाता है)",
          "It improves concentration and focus (यह एकाग्रता और ध्यान में सुधार करता है)",
          "It often leads to poor academic performance and job loss (यह अक्सर खराब शैक्षणिक प्रदर्शन और नौकरी के नुकसान का कारण बनता है)",
          "It guarantees career success (यह करियर की सफलता की गारंटी देता है)"
        ],
        "correct": "It often leads to poor academic performance and job loss (यह अक्सर खराब शैक्षणिक प्रदर्शन और नौकरी के नुकसान का कारण बनता है)"
      }
      {
        "id": "61",
        "question": "Which of the following is a common legal consequence of drug abuse? (नशीली दवाओं के दुरुपयोग का एक सामान्य कानूनी परिणाम क्या है?)",
        "options": [
          "Getting a promotion at work (काम पर पदोन्नति मिलना)",
          "Being awarded for bravery (बहादुरी के लिए पुरस्कार मिलना)",
          "Arrest and imprisonment, heavy fines, and a criminal record (गिरफ्तारी और कारावास, भारी जुर्माना और आपराधिक रिकॉर्ड)",
          "Receiving an educational grant (शैक्षणिक अनुदान प्राप्त करना)"
        ],
        "correct": "Arrest and imprisonment, heavy fines, and a criminal record (गिरफ्तारी और कारावास, भारी जुर्माना और आपराधिक रिकॉर्ड)"
      },
      {
        "id": "62",
        "question": "What long-term effect can substance abuse have on the brain? (नशीली दवाओं का दुरुपयोग मस्तिष्क पर क्या दीर्घकालिक प्रभाव डाल सकता है?)",
        "options": [
          "It improves memory (यह याददाश्त में सुधार करता है)",
          "It leads to enhanced intelligence (यह बुद्धिमत्ता में वृद्धि करता है)",
          "It causes lasting changes in brain function affecting decision-making and impulse control (यह मस्तिष्क के कार्य में स्थायी परिवर्तन करता है जो निर्णय लेने और आवेग नियंत्रण को प्रभावित करता है)",
          "It cures neurological diseases (यह तंत्रिका रोगों का इलाज करता है)"
        ],
        "correct": "It causes lasting changes in brain function affecting decision-making and impulse control (यह मस्तिष्क के कार्य में स्थायी परिवर्तन करता है जो निर्णय लेने और आवेग नियंत्रण को प्रभावित करता है)"
      },
      {
        "id": "63",
        "question": "How does substance abuse impact interpersonal relationships? (नशीली दवाओं का दुरुपयोग व्यक्तिगत संबंधों पर क्या प्रभाव डालता है?)",
        "options": [
          "It makes relationships stronger (यह रिश्तों को मजबूत बनाता है)",
          "It usually has no impact (यह आमतौर पर कोई प्रभाव नहीं डालता)",
          "It often leads to broken relationships, loss of trust, and increased conflicts (यह अक्सर रिश्तों के टूटने, विश्वास के नुकसान और संघर्ष में वृद्धि का कारण बनता है)",
          "It improves communication (यह संवाद में सुधार करता है)"
        ],
        "correct": "It often leads to broken relationships, loss of trust, and increased conflicts (यह अक्सर रिश्तों के टूटने, विश्वास के नुकसान और संघर्ष में वृद्धि का कारण बनता है)"
      },
      {
        "id": "64",
        "question": "Which of the following is a potential consequence of substance abuse on unborn children? (गर्भवती बच्चों पर नशीली दवाओं के दुरुपयोग का एक संभावित परिणाम क्या है?)",
        "options": [
          "Increased birth weight (जन्म का वजन बढ़ना)",
          "Enhanced intelligence (बुद्धिमत्ता में वृद्धि)",
          "Birth defects, developmental issues, and cognitive impairments (जन्मजात विकार, विकासात्मक मुद्दे और संज्ञानात्मक नुकसान)",
          "No impact on children (बच्चों पर कोई प्रभाव नहीं)"
        ],
        "correct": "Birth defects, developmental issues, and cognitive impairments (जन्मजात विकार, विकासात्मक मुद्दे और संज्ञानात्मक नुकसान)"
      },
      {
        "id": "65",
        "question": "What financial consequences do individuals struggling with substance abuse often face? (नशीली दवाओं के दुरुपयोग से जूझ रहे व्यक्तियों को अक्सर कौन-से वित्तीय परिणामों का सामना करना पड़ता है?)",
        "options": [
          "Winning a lottery (लॉटरी जीतना)",
          "Increased savings (बढ़ी हुई बचत)",
          "Financial instability due to spending on substances, legal fees, and loss of employment (नशीली दवाओं पर खर्च, कानूनी शुल्क और नौकरी के नुकसान के कारण वित्तीय अस्थिरता)",
          "Receiving financial rewards (वित्तीय पुरस्कार प्राप्त करना)"
        ],
        "correct": "Financial instability due to spending on substances, legal fees, and loss of employment (नशीली दवाओं पर खर्च, कानूनी शुल्क और नौकरी के नुकसान के कारण वित्तीय अस्थिरता)"
      },
      {
        "id": "66",
        "question": "How does addiction typically affect an individual’s decision-making abilities? (नशा आमतौर पर किसी व्यक्ति की निर्णय लेने की क्षमताओं को कैसे प्रभावित करता है?)",
        "options": [
          "It improves decision-making skills (यह निर्णय लेने के कौशल में सुधार करता है)",
          "It has no effect on decision-making (इसका निर्णय लेने पर कोई प्रभाव नहीं पड़ता)",
          "It impairs judgment and increases the likelihood of risky behaviours (यह निर्णय लेने में हानि करता है और जोखिम भरे व्यवहार की संभावना को बढ़ाता है)",
          "It leads to better long-term planning (यह बेहतर दीर्घकालिक योजना बनाने की ओर ले जाता है)"
        ],
        "correct": "It impairs judgment and increases the likelihood of risky behaviours (यह निर्णय लेने में हानि करता है और जोखिम भरे व्यवहार की संभावना को बढ़ाता है)"
      },
      {
        "id": "67",
        "question": "What is the impact of substance abuse on the wider community? (नशीली दवाओं का दुरुपयोग व्यापक समुदाय पर क्या प्रभाव डालता है?)",
        "options": [
          "It has no impact (इसका कोई प्रभाव नहीं है)",
          "It improves community safety (यह समुदाय की सुरक्षा में सुधार करता है)",
          "It can lead to increased crime rates, healthcare costs, and reduced community productivity (यह अपराध दरों, स्वास्थ्य देखभाल लागतों और समुदाय की उत्पादकता में कमी का कारण बन सकता है)",
          "It results in better community relationships (यह समुदाय के संबंधों में सुधार करता है)"
        ],
        "correct": "It can lead to increased crime rates, healthcare costs, and reduced community productivity (यह अपराध दरों, स्वास्थ्य देखभाल लागतों और समुदाय की उत्पादकता में कमी का कारण बन सकता है)"
      },
      {
        "id": "68",
        "question": "In the book 'Weed Out', how is Ankit’s family affected by his addiction? (वीड आउट में, अंकित के परिवार पर उसकी लत का क्या प्रभाव पड़ा?)",
        "options": [
          "They become wealthier (वे अमीर हो जाते हैं)",
          "They experience stress, fear, and helplessness, eventually leading to a breakdown of family harmony (वे तनाव, डर और असहायता का अनुभव करते हैं, जो अंततः परिवार के सामंजस्य के टूटने का कारण बनता है)",
          "They ignore his addiction (वे उसकी लत को नजरअंदाज करते हैं)",
          "They celebrate his choices (वे उसके विकल्पों का जश्न मनाते हैं)"
        ],
        "correct": "They experience stress, fear, and helplessness, eventually leading to a breakdown of family harmony (वे तनाव, डर और असहायता का अनुभव करते हैं, जो अंततः परिवार के सामंजस्य के टूटने का कारण बनता है)"
      },
      {
        "id": "69",
        "question": "What is a common societal stigma associated with drug addiction? (नशे की लत से जुड़े एक सामान्य सामाजिक कलंक क्या है?)",
        "options": [
          "Addicts are perceived as strong and capable (नशेड़ी को मजबूत और सक्षम माना जाता है)",
          "Addicts are often viewed as weak-willed or morally flawed, leading to discrimination and lack of support (नशेड़ियों को अक्सर कमजोर इरादों वाले या नैतिक रूप से दोषपूर्ण माना जाता है, जिससे भेदभाव और समर्थन की कमी होती है)",
          "Addicts are celebrated for their choices (नशेड़ियों के विकल्पों का जश्न मनाया जाता है)",
          "Society provides unconditional support (समाज बिना शर्त समर्थन प्रदान करता है)"
        ],
        "correct": "Addicts are often viewed as weak-willed or morally flawed, leading to discrimination and lack of support (नशेड़ियों को अक्सर कमजोर इरादों वाले या नैतिक रूप से दोषपूर्ण माना जाता है, जिससे भेदभाव और समर्थन की कमी होती है)"
      },
      {
        "id": "70",
        "question": "How does long-term substance abuse affect one’s physical appearance? (दीर्घकालिक नशीली दवाओं का दुरुपयोग किसी की शारीरिक उपस्थिति को कैसे प्रभावित करता है?)",
        "options": [
          "It has no effect on appearance (इसका उपस्थिति पर कोई प्रभाव नहीं पड़ता)",
          "It generally improves appearance (यह आमतौर पर उपस्थिति में सुधार करता है)",
          "It can lead to significant physical changes such as weight loss, dental problems, and skin issues (यह वजन घटाने, दांतों की समस्याओं और त्वचा के मुद्दों जैसे महत्वपूर्ण शारीरिक परिवर्तनों का कारण बन सकता है)",
          "It enhances physical attractiveness (यह शारीरिक आकर्षण को बढ़ाता है)"
        ],
        "correct": "It can lead to significant physical changes such as weight loss, dental problems, and skin issues (यह वजन घटाने, दांतों की समस्याओं और त्वचा के मुद्दों जैसे महत्वपूर्ण शारीरिक परिवर्तनों का कारण बन सकता है)"
      }
      {
        "id": "80",
        "question": "How does the concept of 'self-medication' relate to the cause of addiction? (स्व-संज्ञान की अवधारणा नशे की लत के कारण से कैसे संबंधित है?)",
        "options": [
          "It suggests that people use substances or addictive behaviours to intentionally treat symptoms of mental health issues like depression or anxiety (यह सुझाव देता है कि लोग नशीली दवाओं या नशे की लत वाले व्यवहारों का उपयोग करते हैं ताकि जानबूझकर मानसिक स्वास्थ्य समस्याओं जैसे अवसाद या चिंता के लक्षणों का इलाज किया जा सके)",
          "It means people rely on medical professionals to prescribe addictive substances (इसका मतलब है कि लोग नशीली दवाओं के लिए चिकित्सा पेशेवरों पर निर्भर करते हैं)",
          "It promotes seeking help from others (यह दूसरों से मदद मांगने को बढ़ावा देता है)",
          "It discourages drug use (यह नशीली दवाओं के उपयोग को हतोत्साहित करता है)"
        ],
        "correct": "It suggests that people use substances or addictive behaviours to intentionally treat symptoms of mental health issues like depression or anxiety (यह सुझाव देता है कि लोग नशीली दवाओं या नशे की लत वाले व्यवहारों का उपयोग करते हैं ताकि जानबूझकर मानसिक स्वास्थ्य समस्याओं जैसे अवसाद या चिंता के लक्षणों का इलाज किया जा सके)"
      }
      {
        "id": "81",
        "question": "Which of the following is an environmental factor that can contribute to the development of addiction? (नशे की लत के विकास में योगदान देने वाला एक पर्यावरणीय कारक कौन सा है?)",
        "options": [
          "Stable and supportive family life (स्थिर और सहायक पारिवारिक जीवन)",
          "High academic achievement (उच्च शैक्षणिक उपलब्धि)",
          "Exposure to drugs or addictive behaviours at an early age due to availability, social circles, or family environment (सुविधा, सामाजिक मंडलियों, या पारिवारिक वातावरण के कारण प्रारंभिक उम्र में नशीली दवाओं या नशे की लत वाले व्यवहारों के संपर्क में आना)",
          "Regular physical exercise (नियमित शारीरिक व्यायाम)"
        ],
        "correct": "Exposure to drugs or addictive behaviours at an early age due to availability, social circles, or family environment (सुविधा, सामाजिक मंडलियों, या पारिवारिक वातावरण के कारण प्रारंभिक उम्र में नशीली दवाओं या नशे की लत वाले व्यवहारों के संपर्क में आना)"
      },
      {
        "id": "82",
        "question": "What role does 'brain plasticity' play in the development of addiction, particularly during adolescence? (नशे की लत के विकास में 'मस्तिष्क की प्लास्टिसिटी' की क्या भूमिका होती है, विशेष रूप से किशोरावस्था में?)",
        "options": [
          "It makes addiction impossible during adolescence (यह किशोरावस्था में नशे की लत को असंभव बना देता है)",
          "The brain's heightened plasticity during adolescence makes it more susceptible to the influence of addictive substances and behaviours, leading to long-lasting changes (किशोरावस्था में मस्तिष्क की उच्च प्लास्टिसिटी इसे नशीली दवाओं और व्यवहारों के प्रभाव के प्रति अधिक संवेदनशील बनाती है, जिससे स्थायी परिवर्तन होते हैं)",
          "It prevents any negative impact of substances (यह किसी भी नकारात्मक प्रभाव को रोकता है)",
          "It ensures that addiction is reversible without any effort (यह सुनिश्चित करता है कि नशा बिना किसी प्रयास के उलटने योग्य है)"
        ],
        "correct": "The brain's heightened plasticity during adolescence makes it more susceptible to the influence of addictive substances and behaviours, leading to long-lasting changes (किशोरावस्था में मस्तिष्क की उच्च प्लास्टिसिटी इसे नशीली दवाओं और व्यवहारों के प्रभाव के प्रति अधिक संवेदनशील बनाती है, जिससे स्थायी परिवर्तन होते हैं)"
      },
      {
        "id": "83",
        "question": "How can a 'lack of impulse control' contribute to addiction, as seen in certain personality traits? (किसी व्यक्ति के व्यक्तित्व गुणों में नशे की लत में 'आवेग नियंत्रण की कमी' कैसे योगदान कर सकती है?)",
        "options": [
          "It has no relation to addiction (इसका नशे की लत से कोई संबंध नहीं है)",
          "Individuals with poor impulse control may find it difficult to resist the temptation of addictive substances or behaviours, increasing the risk of addiction (जो लोग आवेग नियंत्रण में कमजोर होते हैं, उन्हें नशीली दवाओं या व्यवहारों के प्रलोभन का विरोध करना मुश्किल हो सकता है, जिससे नशे की लत का जोखिम बढ़ता है)",
          "It prevents addiction (यह नशे की लत को रोकता है)",
          "It guarantees successful recovery (यह सफल उपचार की गारंटी देता है)"
        ],
        "correct": "Individuals with poor impulse control may find it difficult to resist the temptation of addictive substances or behaviours, increasing the risk of addiction (जो लोग आवेग नियंत्रण में कमजोर होते हैं, उन्हें नशीली दवाओं या व्यवहारों के प्रलोभन का विरोध करना मुश्किल हो सकता है, जिससे नशे की लत का जोखिम बढ़ता है)"
      },
      {
        "id": "84",
        "question": "In the context of the book 'Weed Out', how does Ankit’s search for identity and meaning contribute to his addiction? (पुस्तक 'वीड आउट' के संदर्भ में, अंकित की पहचान और अर्थ की खोज उसकी नशे की लत में कैसे योगदान करती है?)",
        "options": [
          "It helps him avoid addiction (यह उसे नशे की लत से बचने में मदद करता है)",
          "His struggle with identity and lack of purpose makes him vulnerable to peer influence and escapism through drugs (पहचान और उद्देश्य की कमी से उसकी पहचान के संघर्ष उसे साथियों के प्रभाव और नशीली दवाओं के माध्यम से भागने की प्रवृत्ति के प्रति संवेदनशील बना देती है)",
          "It strengthens his resistance to addiction (यह उसकी नशे की लत के खिलाफ प्रतिरोध को मजबूत करता है)",
          "It makes him more focused on his goals (यह उसे अपने लक्ष्यों पर अधिक ध्यान केंद्रित करने के लिए प्रेरित करता है)"
        ],
        "correct": "His struggle with identity and lack of purpose makes him vulnerable to peer influence and escapism through drugs (पहचान और उद्देश्य की कमी से उसकी पहचान के संघर्ष उसे साथियों के प्रभाव और नशीली दवाओं के माध्यम से भागने की प्रवृत्ति के प्रति संवेदनशील बना देती है)"
      },
      {
        "id": "85",
        "question": "How does stress, particularly chronic stress, contribute to the development of addiction? (तनाव, विशेष रूप से दीर्घकालिक तनाव, नशे की लत के विकास में कैसे योगदान करता है?)",
        "options": [
          "It has no impact on addiction (इसका नशे की लत पर कोई प्रभाव नहीं है)",
          "Chronic stress can alter brain function and increase the likelihood of turning to addictive substances or behaviours as a coping mechanism (दीर्घकालिक तनाव मस्तिष्क के कार्य को बदल सकता है और नशीली दवाओं या व्यवहारों की ओर मुड़ने की संभावना को बढ़ा सकता है)",
          "It guarantees immunity to addiction (यह नशे की लत से सुरक्षा की गारंटी देता है)",
          "It improves mental health (यह मानसिक स्वास्थ्य में सुधार करता है)"
        ],
        "correct": "Chronic stress can alter brain function and increase the likelihood of turning to addictive substances or behaviours as a coping mechanism (दीर्घकालिक तनाव मस्तिष्क के कार्य को बदल सकता है और नशीली दवाओं या व्यवहारों की ओर मुड़ने की संभावना को बढ़ा सकता है)"
      },
      {
        "id": "86",
        "question": "Which neurotransmitter is primarily involved in the reinforcement of addictive behaviours, making them hard to quit? (कौन सा न्यूरोट्रांसमीटर नशीली व्यवहारों को मजबूत करने में मुख्य रूप से शामिल होता है, जिससे उन्हें छोड़ना कठिन हो जाता है?)",
        "options": [
          "Serotonin (सेरोटोनिन)",
          "Norepinephrine (नॉरेपिनेफ्रिन)",
          "Dopamine (डोपामाइन)",
          "GABA (गैबा)"
        ],
        "correct": "Dopamine (डोपामाइन)"
      },
      {
        "id": "87",
        "question": "How do societal norms and cultural attitudes influence addiction? (सामाजिक मानदंड और सांस्कृतिक दृष्टिकोण नशे की लत को कैसे प्रभावित करते हैं?)",
        "options": [
          "They have no influence on addiction (इनका नशे की लत पर कोई प्रभाव नहीं होता)",
          "Societal acceptance or normalization of certain substances or behaviours can increase the likelihood of addiction (किसी पदार्थ या व्यवहार की सामाजिक स्वीकृति या सामान्यीकरण नशे की लत की संभावना को बढ़ा सकता है)",
          "They guarantee prevention of addiction (ये नशे की लत की रोकथाम की गारंटी देते हैं)",
          "They only affect physical health (ये केवल शारीरिक स्वास्थ्य को प्रभावित करते हैं)"
        ],
        "correct": "Societal acceptance or normalization of certain substances or behaviours can increase the likelihood of addiction (किसी पदार्थ या व्यवहार की सामाजिक स्वीकृति या सामान्यीकरण नशे की लत की संभावना को बढ़ा सकता है)"
      },
      {
        "id": "88",
        "question": "In the book 'Weed Out', what role does lack of emotional support play in Ankit’s descent into addiction? (पुस्तक 'वीड आउट' में, अंकित की नशे की लत में कमी का भावनात्मक समर्थन की कमी की क्या भूमिका है?)",
        "options": [
          "It helps him become stronger (यह उसे मजबूत बनने में मदद करता है)",
          "The absence of adequate emotional support from his family and peers makes him more prone to seeking solace in drugs (परिवार और दोस्तों से उचित भावनात्मक समर्थन की कमी उसे नशीली दवाओं में शांति खोजने के लिए और अधिक प्रवृत्त बनाती है)",
          "It prevents him from using drugs (यह उसे नशीली दवाओं का उपयोग करने से रोकता है)",
          "It has no impact on his addiction (इसका उसकी नशे की लत पर कोई प्रभाव नहीं है)"
        ],
        "correct": "The absence of adequate emotional support from his family and peers makes him more prone to seeking solace in drugs (परिवार और दोस्तों से उचित भावनात्मक समर्थन की कमी उसे नशीली दवाओं में शांति खोजने के लिए और अधिक प्रवृत्त बनाती है)"
      }
      {
        "id": "89",
        "question": "How can 'behavioural conditioning' contribute to addiction? (व्यवहारिक कंडीशनिंग नशे की लत में कैसे योगदान कर सकता है?)",
        "options": [
          "It discourages addiction (यह नशे की लत को हतोत्साहित करता है)",
          "Repeated association of a substance or behaviour with positive feelings or relief from negative emotions can condition the brain to seek it out habitually (एक पदार्थ या व्यवहार को सकारात्मक भावनाओं या नकारात्मक भावनाओं से राहत के साथ बार-बार जोड़ने से मस्तिष्क को इसे आदत के रूप में खोजने के लिए प्रशिक्षित किया जा सकता है)",
          "It prevents the formation of habits (यह आदतों के बनने को रोकता है)",
          "It only affects children (यह केवल बच्चों को प्रभावित करता है)"
        ],
        "correct": "Repeated association of a substance or behaviour with positive feelings or relief from negative emotions can condition the brain to seek it out habitually (एक पदार्थ या व्यवहार को सकारात्मक भावनाओं या नकारात्मक भावनाओं से राहत के साथ बार-बार जोड़ने से मस्तिष्क को इसे आदत के रूप में खोजने के लिए प्रशिक्षित किया जा सकता है)"
      },
      {
        "id": "90",
        "question": "What role do 'adverse childhood experiences' (ACEs) play in the development of addiction? (हानिकारक बचपन के अनुभव (एसीई) नशे की लत के विकास में क्या भूमिका निभाते हैं?)",
        "options": [
          "They have no impact on addiction (इनका नशे की लत पर कोई प्रभाव नहीं है)",
          "They significantly increase the risk of developing addiction later in life due to trauma, neglect, or abuse during critical developmental periods (वे महत्वपूर्ण विकासात्मक चरणों के दौरान आघात, उपेक्षा या दुरुपयोग के कारण बाद में जीवन में नशे की लत विकसित करने के जोखिम को महत्वपूर्ण रूप से बढ़ाते हैं)",
          "They prevent addiction by strengthening resilience (वे लचीलापन को मजबूत करके नशे की लत को रोकते हैं)",
          "They only affect physical health (वे केवल शारीरिक स्वास्थ्य को प्रभावित करते हैं)"
        ],
        "correct": "They significantly increase the risk of developing addiction later in life due to trauma, neglect, or abuse during critical developmental periods (वे महत्वपूर्ण विकासात्मक चरणों के दौरान आघात, उपेक्षा या दुरुपयोग के कारण बाद में जीवन में नशे की लत विकसित करने के जोखिम को महत्वपूर्ण रूप से बढ़ाते हैं)"
      }
      {
        "id": "91",
        "question": "How does the availability and accessibility of substances contribute to addiction? (सुविधा और पदार्थों की पहुंच नशे की लत में कैसे योगदान करती है?)",
        "options": [
          "Availability has no impact on addiction rates (सुविधा का नशे की लत की दरों पर कोई प्रभाव नहीं है)",
          "Easy access to addictive substances increases the likelihood of experimentation and regular use, which can lead to addiction (नशीली दवाओं की आसान पहुंच नशीली दवाओं के प्रयोग और नियमित उपयोग की संभावना को बढ़ाती है, जो नशे की लत की ओर ले जा सकती है)",
          "It prevents people from using substances (यह लोगों को नशीली दवाओं का उपयोग करने से रोकता है)",
          "It encourages people to study more (यह लोगों को अधिक अध्ययन करने के लिए प्रोत्साहित करता है)"
        ],
        "correct": "Easy access to addictive substances increases the likelihood of experimentation and regular use, which can lead to addiction (नशीली दवाओं की आसान पहुंच नशीली दवाओं के प्रयोग और नियमित उपयोग की संभावना को बढ़ाती है, जो नशे की लत की ओर ले जा सकती है)"
      },
      {
        "id": "92",
        "question": "How can societal stigma against seeking help for mental health issues contribute to addiction? (मानसिक स्वास्थ्य मुद्दों के लिए मदद मांगने के खिलाफ सामाजिक कलंक नशे की लत में कैसे योगदान कर सकता है?)",
        "options": [
          "It encourages people to seek help (यह लोगों को मदद मांगने के लिए प्रोत्साहित करता है)",
          "Stigma prevents individuals from seeking support for mental health issues, leading them to self-medicate with addictive substances (कलंक व्यक्तियों को मानसिक स्वास्थ्य मुद्दों के लिए समर्थन मांगने से रोकता है, जिससे वे नशीली दवाओं के साथ आत्म-चिकित्सा करने लगते हैं)",
          "It promotes healthy coping mechanisms (यह स्वस्थ मुकाबला करने के तरीकों को बढ़ावा देता है)",
          "It prevents addiction (यह नशे की लत को रोकता है)"
        ],
        "correct": "Stigma prevents individuals from seeking support for mental health issues, leading them to self-medicate with addictive substances (कलंक व्यक्तियों को मानसिक स्वास्थ्य मुद्दों के लिए समर्थन मांगने से रोकता है, जिससे वे नशीली दवाओं के साथ आत्म-चिकित्सा करने लगते हैं)"
      },
      {
        "id": "93",
        "question": "What role does 'emotional dysregulation' play in the onset of addiction? (भावनात्मक असंतुलन नशे की लत की शुरुआत में क्या भूमिका निभाता है?)",
        "options": [
          "It prevents addiction (यह नशे की लत को रोकता है)",
          "Inability to manage or respond appropriately to emotional experiences can drive individuals to use substances or engage in addictive behaviours to cope (भावनात्मक अनुभवों का प्रबंधन या सही तरीके से प्रतिक्रिया करने में असमर्थता व्यक्तियों को नशीली दवाओं का उपयोग करने या मुकाबला करने के लिए नशे की लत वाले व्यवहारों में शामिल होने के लिए प्रेरित कर सकती है)",
          "It guarantees successful careers (यह सफल करियर की गारंटी देता है)",
          "It ensures that people are always happy (यह सुनिश्चित करता है कि लोग हमेशा खुश रहें)"
        ],
        "correct": "Inability to manage or respond appropriately to emotional experiences can drive individuals to use substances or engage in addictive behaviours to cope (भावनात्मक अनुभवों का प्रबंधन या सही तरीके से प्रतिक्रिया करने में असमर्थता व्यक्तियों को नशीली दवाओं का उपयोग करने या मुकाबला करने के लिए नशे की लत वाले व्यवहारों में शामिल होने के लिए प्रेरित कर सकती है)"
      },
      {
        "id": "94",
        "question": "In 'Weed Out', how does Aarya’s and Ankit’s contrasting response to stress and trauma highlight different pathways to addiction? (वीड आउट में, आर्या और अंकित की तनाव और आघात के प्रति विपरीत प्रतिक्रियाएँ नशे की लत के विभिन्न रास्तों को कैसे उजागर करती हैं?)",
        "options": [
          "They both avoid using drugs (वे दोनों नशीली दवाओं का उपयोग करने से बचते हैं)",
          "Ankit turns to drugs as an escape while Aarya tries to confront the issues directly, showcasing how different coping strategies can influence addiction risk (अंकित नशीली दवाओं की ओर भागता है जबकि आर्या सीधे समस्याओं का सामना करने की कोशिश करती है, यह दर्शाते हुए कि कैसे विभिन्न मुकाबला करने की रणनीतियाँ नशे की लत के जोखिम को प्रभावित कर सकती हैं)",
          "Both of them become addicted (वे दोनों नशे के आदी हो जाते हैं)",
          "Both avoid any form of coping mechanism (वे किसी भी प्रकार के मुकाबला करने के तरीके से बचते हैं)"
        ],
        "correct": "Ankit turns to drugs as an escape while Aarya tries to confront the issues directly, showcasing how different coping strategies can influence addiction risk (अंकित नशीली दवाओं की ओर भागता है जबकि आर्या सीधे समस्याओं का सामना करने की कोशिश करती है, यह दर्शाते हुए कि कैसे विभिन्न मुकाबला करने की रणनीतियाँ नशे की लत के जोखिम को प्रभावित कर सकती हैं)"
      },
      {
        "id": "95",
        "question": "How do societal expectations and pressures contribute to behavioural addictions such as workaholism or social media addiction? (सामाजिक अपेक्षाएँ और दबाव कार्याहोलिज़्म या सोशल मीडिया की लत जैसी व्यवहारिक लतों में कैसे योगदान करते हैं?)",
        "options": [
          "They have no impact on behavioural addictions (इनका व्यवहारिक लतों पर कोई प्रभाव नहीं है)",
          "The pressure to succeed or to conform to social norms can push individuals to engage excessively in certain behaviours, leading to addiction (सफल होने या सामाजिक मानदंडों के अनुरूप रहने के दबाव से व्यक्ति को कुछ व्यवहारों में अत्यधिक संलग्न होने के लिए प्रेरित किया जा सकता है, जिससे नशे की लत की ओर ले जा सकता है)",
          "They prevent any form of addiction (वे किसी भी प्रकार की नशे की लत को रोकते हैं)",
          "They discourage people from working hard (वे लोगों को मेहनत करने से हतोत्साहित करते हैं)"
        ],
        "correct": "The pressure to succeed or to conform to social norms can push individuals to engage excessively in certain behaviours, leading to addiction (सफल होने या सामाजिक मानदंडों के अनुरूप रहने के दबाव से व्यक्ति को कुछ व्यवहारों में अत्यधिक संलग्न होने के लिए प्रेरित किया जा सकता है, जिससे नशे की लत की ओर ले जा सकता है)"
      },
      {
        "id": "96",
        "question": "What is the primary goal of the 12-step program as presented in 'Weed Out'? (वीड आउट में प्रस्तुत 12-चरणीय कार्यक्रम का प्राथमिक लक्ष्य क्या है?)",
        "options": [
          "To help individuals become financially successful (व्यक्तियों को वित्तीय रूप से सफल बनाने में मदद करना)",
          "To provide a framework for recovery and support (पुनर्प्राप्ति और समर्थन के लिए एक ढांचा प्रदान करना)",
          "To encourage people to isolate themselves (लोगों को अपने आप को अलग-थलग करने के लिए प्रोत्साहित करना)",
          "To teach people new life skills (लोगों को नई जीवन कौशल सिखाना)"
        ],
        "correct": "To provide a framework for recovery and support (पुनर्प्राप्ति और समर्थन के लिए एक ढांचा प्रदान करना)"
      },
      {
        "id": "97",
        "question": "How does the book 'Weed Out' address the theme of redemption? (पुस्तक 'वीड आउट' मुक्ति के विषय को कैसे संबोधित करती है?)",
        "options": [
          "By portraying characters who never change (ऐसे पात्रों को दर्शाकर जो कभी नहीं बदलते)",
          "By showing that recovery is possible through community and support (यह दर्शाकर कि पुनर्प्राप्ति समुदाय और समर्थन के माध्यम से संभव है)",
          "By ignoring the consequences of addiction (नशे की लत के परिणामों की अनदेखी करके)",
          "By focusing solely on the negative aspects of addiction (नशे की लत के नकारात्मक पहलुओं पर केवल ध्यान केंद्रित करके)"
        ],
        "correct": "By showing that recovery is possible through community and support (यह दर्शाकर कि पुनर्प्राप्ति समुदाय और समर्थन के माध्यम से संभव है)"
      },
      {
        "id": "98",
        "question": "What significant insight does Aarya gain about her brother Ankit’s struggles? (आर्या अपने भाई अंकित के संघर्षों के बारे में कौन-सी महत्वपूर्ण समझ प्राप्त करती है?)",
        "options": [
          "She realizes the importance of financial success (वह वित्तीय सफलता के महत्व को समझती है)",
          "She understands that addiction can happen to anyone, regardless of their background (वह समझती है कि नशे की लत किसी के साथ भी हो सकती है, चाहे उनकी पृष्ठभूमि कुछ भी हो)",
          "She believes that addiction is a choice (वह मानती है कि नशे की लत एक विकल्प है)",
          "She thinks that family problems are the sole cause of addiction (वह सोचती है कि पारिवारिक समस्याएँ नशे की लत का एकमात्र कारण हैं)"
        ],
        "correct": "She understands that addiction can happen to anyone, regardless of their background (वह समझती है कि नशे की लत किसी के साथ भी हो सकती है, चाहे उनकी पृष्ठभूमि कुछ भी हो)"
      }
      {
        "id": "99",
        "question": "What significant insight does Aarya gain about her brother Ankit’s struggles? (आर्या अपने भाई अंकित के संघर्षों के बारे में कौन-सी महत्वपूर्ण समझ प्राप्त करती है?)",
        "options": [
          "She realizes the importance of financial success (वह वित्तीय सफलता के महत्व को समझती है)",
          "She understands that addiction can happen to anyone, regardless of their background (वह समझती है कि नशे की लत किसी के साथ भी हो सकती है, चाहे उनकी पृष्ठभूमि कुछ भी हो)",
          "She believes that addiction is a choice (वह मानती है कि नशे की लत एक विकल्प है)",
          "She thinks that family problems are the sole cause of addiction (वह सोचती है कि पारिवारिक समस्याएँ नशे की लत का एकमात्र कारण हैं)"
        ],
        "correct": "She understands that addiction can happen to anyone, regardless of their background (वह समझती है कि नशे की लत किसी के साथ भी हो सकती है, चाहे उनकी पृष्ठभूमि कुछ भी हो)"
      },
      {
        "id": "100",
        "question": "In 'Weed Out', what does Ankit’s story ultimately represent in terms of addiction recovery? (वीड आउट में, अंकित की कहानी अंततः नशे की लत की पुनर्प्राप्ति के संदर्भ में क्या दर्शाती है?)",
        "options": [
          "That recovery is impossible (कि पुनर्प्राप्ति असंभव है)",
          "That understanding and support are crucial for overcoming addiction (कि समझ और समर्थन नशे की लत पर काबू पाने के लिए महत्वपूर्ण हैं)",
          "That financial success guarantees recovery (कि वित्तीय सफलता पुनर्प्राप्ति की गारंटी देती है)",
          "That addiction leads to success (कि नशे की लत सफलता की ओर ले जाती है)"
        ],
        "correct": "That understanding and support are crucial for overcoming addiction (कि समझ और समर्थन नशे की लत पर काबू पाने के लिए महत्वपूर्ण हैं)"
      }
      {
        "id": "101",
        "question": "What is one of the main challenges faced by individuals in recovery from addiction? (नशे की लत से उबरने वाले व्यक्तियों द्वारा सामना की जाने वाली एक प्रमुख चुनौती क्या है?)",
        "options": [
          "Finding a supportive community (एक सहायक समुदाय खोजना)",
          "Dealing with cravings and triggers (क्रेविंग और ट्रिगर्स का सामना करना)",
          "Maintaining financial stability (वित्तीय स्थिरता बनाए रखना)",
          "Achieving academic success (शैक्षणिक सफलता प्राप्त करना)"
        ],
        "correct": "Dealing with cravings and triggers (क्रेविंग और ट्रिगर्स का सामना करना)"
      },
      {
        "id": "102",
        "question": "In the context of addiction, what does the term 'relapse' refer to? (नशे की लत के संदर्भ में 'रिलैप्स' शब्द का क्या अर्थ है?)",
        "options": [
          "A return to old behaviours after a period of recovery (एक वसूली की अवधि के बाद पुराने व्यवहारों की ओर लौटना)",
          "Successfully overcoming addiction (नशे की लत पर काबू पाना)",
          "Learning new coping skills (नए मुकाबला करने के कौशल सीखना)",
          "Experiencing financial success (वित्तीय सफलता का अनुभव करना)"
        ],
        "correct": "A return to old behaviours after a period of recovery (एक वसूली की अवधि के बाद पुराने व्यवहारों की ओर लौटना)"
      },
      {
        "id": "103",
        "question": "How can peer support groups aid individuals recovering from addiction? (साथी समर्थन समूह नशे की लत से उबरने वाले व्यक्तियों की कैसे सहायता कर सकते हैं?)",
        "options": [
          "They provide a platform for sharing experiences and support (वे अनुभव साझा करने और समर्थन के लिए एक मंच प्रदान करते हैं)",
          "They offer financial assistance (वे वित्तीय सहायता प्रदान करते हैं)",
          "They guarantee complete recovery (वे पूर्ण पुनर्प्राप्ति की गारंटी देते हैं)",
          "They discourage talking about addiction (वे नशे की लत के बारे में बात करने से हतोत्साहित करते हैं)"
        ],
        "correct": "They provide a platform for sharing experiences and support (वे अनुभव साझा करने और समर्थन के लिए एक मंच प्रदान करते हैं)"
      },
      {
        "id": "104",
        "question": "What role do coping mechanisms play in the recovery process? (नशे की लत से उबरने की प्रक्रिया में मुकाबला करने के तरीके की क्या भूमिका होती है?)",
        "options": [
          "They are unnecessary for recovery (वे पुनर्प्राप्ति के लिए अनावश्यक हैं)",
          "They help individuals manage stress and avoid relapse (वे व्यक्तियों को तनाव प्रबंधित करने और पुनरावृत्ति से बचने में मदद करते हैं)",
          "They only focus on financial aspects of recovery (वे केवल पुनर्प्राप्ति के वित्तीय पहलुओं पर ध्यान केंद्रित करते हैं)",
          "They guarantee immediate success in recovery (वे पुनर्प्राप्ति में त्वरित सफलता की गारंटी देते हैं)"
        ],
        "correct": "They help individuals manage stress and avoid relapse (वे व्यक्तियों को तनाव प्रबंधित करने और पुनरावृत्ति से बचने में मदद करते हैं)"
      },
      {
        "id": "105",
        "question": "In 'Weed Out', what does the character Tanmay struggle with during his recovery journey? (वीड आउट में, तन्मय अपने पुनर्प्राप्ति यात्रा के दौरान किस चीज़ से जूझता है?)",
        "options": [
          "Overcoming academic pressure (शैक्षणिक दबाव पर काबू पाना)",
          "Dealing with cravings and self-doubt (क्रेविंग और आत्म-संदेह से निपटना)",
          "Finding a new job (नई नौकरी ढूंढना)",
          "Building relationships with his family (अपने परिवार के साथ संबंध बनाना)"
        ],
        "correct": "Dealing with cravings and self-doubt (क्रेविंग और आत्म-संदेह से निपटना)"
      },
      {
        "id": "106",
        "question": "What does Aarya learn about the importance of community in the recovery process? (आर्या को नशे की लत से उबरने की प्रक्रिया में समुदाय के महत्व के बारे में क्या पता चलता है?)",
        "options": [
          "Community is irrelevant to recovery (समुदाय पुनर्प्राप्ति के लिए अप्रासंगिक है)",
          "Community support is crucial for encouragement and accountability (समुदाय का समर्थन प्रोत्साहन और जवाबदेही के लिए महत्वपूर्ण है)",
          "Community only adds to stress (समुदाय केवल तनाव को बढ़ाता है)",
          "Community involvement guarantees recovery (समुदाय की भागीदारी पुनर्प्राप्ति की गारंटी देती है)"
        ],
        "correct": "Community support is crucial for encouragement and accountability (समुदाय का समर्थन प्रोत्साहन और जवाबदेही के लिए महत्वपूर्ण है)"
      },
      {
        "id": "107",
        "question": "How does the book 'Weed Out' portray the relationship between mental health and addiction? (पुस्तक 'वीड आउट' मानसिक स्वास्थ्य और नशे की लत के बीच के संबंध को कैसे दर्शाती है?)",
        "options": [
          "They are completely unrelated (वे पूरी तरह से अप्रासंगिक हैं)",
          "Poor mental health can increase the risk of addiction, and addiction can worsen mental health issues (खराब मानसिक स्वास्थ्य नशे की लत के जोखिम को बढ़ा सकता है, और नशे की लत मानसिक स्वास्थ्य समस्याओं को और बढ़ा सकती है)",
          "Addiction is a cure for mental health issues (नशे की लत मानसिक स्वास्थ्य समस्याओं का इलाज है)",
          "Good mental health guarantees no addiction (अच्छा मानसिक स्वास्थ्य नशे की लत की गारंटी नहीं देता)"
        ],
        "correct": "Poor mental health can increase the risk of addiction, and addiction can worsen mental health issues (खराब मानसिक स्वास्थ्य नशे की लत के जोखिम को बढ़ा सकता है, और नशे की लत मानसिक स्वास्थ्य समस्याओं को और बढ़ा सकती है)"
      },
      {
        "id": "108",
        "question": "What insight about addiction does the character Ankit gain through his experiences? (अपने अनुभवों के माध्यम से अंकित को नशे की लत के बारे में कौन-सी समझ मिलती है?)",
        "options": [
          "That addiction is a choice and can easily be overcome (कि नशे की लत एक विकल्प है और इसे आसानी से काबू किया जा सकता है)",
          "That addiction is complex and often requires support, understanding, and perseverance to overcome (कि नशे की लत जटिल है और इसे काबू पाने के लिए अक्सर समर्थन, समझ और धैर्य की आवश्यकता होती है)",
          "That seeking help is a sign of weakness (कि मदद मांगना कमजोरी की निशानी है)",
          "That he can manage his addiction on his own without support (कि वह अपने नशे की लत का प्रबंधन अकेले कर सकता है)"
        ],
        "correct": "That addiction is complex and often requires support, understanding, and perseverance to overcome (कि नशे की लत जटिल है और इसे काबू पाने के लिए अक्सर समर्थन, समझ और धैर्य की आवश्यकता होती है)"
      },
      {
        "id": "109",
        "question": "What is a common theme in the journeys of both Aarya and Tanmay in 'Weed Out'? (वीड आउट में आर्या और तन्मय की यात्राओं में एक सामान्य विषय क्या है?)",
        "options": [
          "They both achieve immediate success (वे दोनों तुरंत सफलता प्राप्त करते हैं)",
          "They both struggle with their identities and the impact of addiction on their lives (वे दोनों अपनी पहचान और अपने जीवन पर नशे की लत के प्रभाव से जूझते हैं)",
          "They both ignore the consequences of their actions (वे दोनों अपने कार्यों के परिणामों की अनदेखी करते हैं)",
          "They both focus solely on financial success (वे दोनों केवल वित्तीय सफलता पर ध्यान केंद्रित करते हैं)"
        ],
        "correct": "They both struggle with their identities and the impact of addiction on their lives (वे दोनों अपनी पहचान और अपने जीवन पर नशे की लत के प्रभाव से जूझते हैं)"
      },
      {
        "id": "110",
        "question": "In 'Weed Out', what is the ultimate message regarding recovery from addiction? (वीड आउट में, नशे की लत से उबरने के संबंध में अंतिम संदेश क्या है?)",
        "options": [
          "Recovery is a linear process with guaranteed results (पुनर्प्राप्ति एक रेखीय प्रक्रिया है जिसमें सुनिश्चित परिणाम होते हैं)",
          "Recovery is possible, but it requires time, effort, and support from others (पुनर्प्राप्ति संभव है, लेकिन इसके लिए समय, प्रयास और दूसरों का समर्थन आवश्यक है)",
          "Recovery is easy and can be achieved quickly (पुनर्प्राप्ति आसान है और इसे जल्दी हासिल किया जा सकता है)",
          "Recovery is only about quitting substances (पुनर्प्राप्ति केवल नशीली दवाओं को छोड़ने के बारे में है)"
        ],
        "correct": "Recovery is possible, but it requires time, effort, and support from others (पुनर्प्राप्ति संभव है, लेकिन इसके लिए समय, प्रयास और दूसरों का समर्थन आवश्यक है)"
      }
      {
        "id": "111",
        "question": "What role does mindfulness play in the recovery process from addiction? (नशे की लत से उबरने की प्रक्रिया में ध्यान की क्या भूमिका होती है?)",
        "options": [
          "It has no impact on recovery (इसका पुनर्प्राप्ति पर कोई प्रभाव नहीं होता)",
          "Mindfulness practices can help individuals manage cravings and develop healthier coping strategies (ध्यान के अभ्यास व्यक्तियों को क्रेविंग को प्रबंधित करने और स्वस्थ मुकाबला करने की रणनीतियाँ विकसित करने में मदद कर सकते हैं)",
          "It guarantees immediate recovery (यह त्वरित पुनर्प्राप्ति की गारंटी देता है)",
          "It discourages seeking professional help (यह पेशेवर मदद मांगने को हतोत्साहित करता है)"
        ],
        "correct": "Mindfulness practices can help individuals manage cravings and develop healthier coping strategies (ध्यान के अभ्यास व्यक्तियों को क्रेविंग को प्रबंधित करने और स्वस्थ मुकाबला करने की रणनीतियाँ विकसित करने में मदद कर सकते हैं)"
      },
      {
        "id": "112",
        "question": "How can education about addiction and its consequences benefit individuals and communities? (नशे की लत और इसके परिणामों के बारे में शिक्षा व्यक्तियों और समुदायों को कैसे लाभ पहुंचा सकती है?)",
        "options": [
          "It has no impact on addiction rates (इसका नशे की लत की दरों पर कोई प्रभाव नहीं होता)",
          "Education can raise awareness, reduce stigma, and promote prevention strategies (शिक्षा जागरूकता बढ़ा सकती है, कलंक को कम कर सकती है और रोकथाम की रणनीतियों को बढ़ावा दे सकती है)",
          "It guarantees that no one will become addicted (यह सुनिश्चित करता है कि कोई भी नशे का आदी नहीं होगा)",
          "It is only relevant for professionals (यह केवल पेशेवरों के लिए प्रासंगिक है)"
        ],
        "correct": "Education can raise awareness, reduce stigma, and promote prevention strategies (शिक्षा जागरूकता बढ़ा सकती है, कलंक को कम कर सकती है और रोकथाम की रणनीतियों को बढ़ावा दे सकती है)"
      },
      {
        "id": "113",
        "question": "What aspect of addiction does the term 'co-occurring disorders' refer to? (नशे की लत के संदर्भ में 'सह-घटनात्मक विकारों' की अवधारणा किस पहलू को संदर्भित करती है?)",
        "options": [
          "The presence of two or more substance use disorders simultaneously (एक ही समय में दो या अधिक नशीली दवाओं के दुरुपयोग विकारों की उपस्थिति)",
          "Having a single substance use disorder (एक ही नशीली दवाओं के दुरुपयोग विकार होना)",
          "The absence of any mental health issues (किसी भी मानसिक स्वास्थ्य समस्या की अनुपस्थिति)",
          "The presence of physical health problems only (केवल शारीरिक स्वास्थ्य समस्याओं की उपस्थिति)"
        ],
        "correct": "The presence of two or more substance use disorders simultaneously (एक ही समय में दो या अधिक नशीली दवाओं के दुरुपयोग विकारों की उपस्थिति)"
      },
      {
        "id": "114",
        "question": "In 'Weed Out', how does Tanmay’s journey illustrate the impact of addiction on personal relationships? (वीड आउट में, तन्मय की यात्रा नशे की लत के व्यक्तिगत रिश्तों पर प्रभाव को कैसे दर्शाती है?)",
        "options": [
          "It strengthens all his relationships (यह सभी उसके रिश्तों को मजबूत बनाती है)",
          "It shows how addiction can lead to isolation, broken trust, and damaged connections with loved ones (यह दिखाता है कि नशे की लत कैसे अलगाव, टूटे हुए विश्वास और प्रियजनों के साथ रिश्तों को नुकसान पहुंचा सकती है)",
          "It has no effect on his relationships (इसका उसके रिश्तों पर कोई प्रभाव नहीं पड़ता)",
          "It only impacts his professional relationships (यह केवल उसके पेशेवर संबंधों को प्रभावित करती है)"
        ],
        "correct": "It shows how addiction can lead to isolation, broken trust, and damaged connections with loved ones (यह दिखाता है कि नशे की लत कैसे अलगाव, टूटे हुए विश्वास और प्रियजनों के साथ रिश्तों को नुकसान पहुंचा सकती है)"
      },
      {
        "id": "115",
        "question": "What does the term 'harm reduction' refer to in the context of addiction treatment? (नशे की लत के उपचार के संदर्भ में 'हानि न्यूनीकरण' की अवधारणा का क्या अर्थ है?)",
        "options": [
          "Strategies aimed at reducing the negative consequences of substance use without necessarily eliminating use (ऐसी रणनीतियाँ जो नशीली दवाओं के उपयोग के नकारात्मक परिणामों को कम करने के उद्देश्य से होती हैं बिना उपयोग को समाप्त किए)",
          "A method to ensure total abstinence from substances (सभी पदार्थों से पूर्ण रूप से दूर रहने का एक तरीका)",
          "Techniques for promoting drug use (नशीली दवाओं के उपयोग को बढ़ावा देने की तकनीकें)",
          "It has no relevance to addiction treatment (यह नशे की लत के उपचार से कोई संबंध नहीं रखता)"
        ],
        "correct": "Strategies aimed at reducing the negative consequences of substance use without necessarily eliminating use (ऐसी रणनीतियाँ जो नशीली दवाओं के उपयोग के नकारात्मक परिणामों को कम करने के उद्देश्य से होती हैं बिना उपयोग को समाप्त किए)"
      },
      {
        "id": "116",
        "question": "How does the character Aarya reflect resilience in the face of her brother’s addiction? (आर्या का चरित्र अपने भाई की नशे की लत के सामने लचीलापन कैसे दर्शाता है?)",
        "options": [
          "She gives up on him entirely (वह पूरी तरह से उसे छोड़ देती है)",
          "She continues to seek support and fight for his recovery while also focusing on her own well-being (वह उसकी पुनर्प्राप्ति के लिए समर्थन प्राप्त करने और संघर्ष करने के साथ-साथ अपने स्वयं के कल्याण पर भी ध्यान केंद्रित करती है)",
          "She ignores the situation (वह स्थिति की अनदेखी करती है)",
          "She only focuses on financial solutions (वह केवल वित्तीय समाधानों पर ध्यान केंद्रित करती है)"
        ],
        "correct": "She continues to seek support and fight for his recovery while also focusing on her own well-being (वह उसकी पुनर्प्राप्ति के लिए समर्थन प्राप्त करने और संघर्ष करने के साथ-साथ अपने स्वयं के कल्याण पर भी ध्यान केंद्रित करती है)"
      },
      {
        "id": "117",
        "question": "What role does therapy play in the recovery process for individuals struggling with addiction? (नशे की लत से जूझ रहे व्यक्तियों के लिए पुनर्प्राप्ति प्रक्रिया में चिकित्सा की क्या भूमिका होती है?)",
        "options": [
          "It has no role in recovery (इसका पुनर्प्राप्ति में कोई भूमिका नहीं होती)",
          "Therapy can provide coping strategies, support emotional healing, and address underlying issues contributing to addiction (चिकित्सा मुकाबला करने की रणनीतियाँ प्रदान कर सकती है, भावनात्मक उपचार का समर्थन कर सकती है और नशे की लत में योगदान देने वाले अंतर्निहित मुद्दों को संबोधित कर सकती है)",
          "Therapy guarantees recovery (चिकित्सा पुनर्प्राप्ति की गारंटी देती है)",
          "It only focuses on physical health (यह केवल शारीरिक स्वास्थ्य पर ध्यान केंद्रित करती है)"
        ],
        "correct": "Therapy can provide coping strategies, support emotional healing, and address underlying issues contributing to addiction (चिकित्सा मुकाबला करने की रणनीतियाँ प्रदान कर सकती है, भावनात्मक उपचार का समर्थन कर सकती है और नशे की लत में योगदान देने वाले अंतर्निहित मुद्दों को संबोधित कर सकती है)"
      },
      {
        "id": "118",
        "question": "What does the term 'support network' refer to in the context of addiction recovery? (नशे की लत से उबरने के संदर्भ में 'समर्थन नेटवर्क' की अवधारणा का क्या अर्थ है?)",
        "options": [
          "A group of people who encourage addiction (एक समूह जो नशे की लत को बढ़ावा देता है)",
          "A community of individuals who provide emotional, informational, and practical support for recovery (एक समुदाय जो पुनर्प्राप्ति के लिए भावनात्मक, सूचनात्मक और व्यावहारिक समर्थन प्रदान करता है)",
          "A network of healthcare professionals only (केवल स्वास्थ्य देखभाल पेशेवरों का नेटवर्क)",
          "It has no relevance to recovery (यह पुनर्प्राप्ति से कोई संबंध नहीं रखता)"
        ],
        "correct": "A community of individuals who provide emotional, informational, and practical support for recovery (एक समुदाय जो पुनर्प्राप्ति के लिए भावनात्मक, सूचनात्मक और व्यावहारिक समर्थन प्रदान करता है)"
      },
      {
        "id": "119",
        "question": "What significance does the concept of 'self-efficacy' hold in addiction recovery? (नशे की लत से उबरने में 'स्व-प्रभावशीलता' की अवधारणा का क्या महत्व है?)",
        "options": [
          "It has no relevance to recovery (इसका पुनर्प्राप्ति से कोई संबंध नहीं है)",
          "High self-efficacy can empower individuals to believe in their ability to overcome challenges and resist cravings, thus enhancing recovery success (उच्च स्व-प्रभावशीलता व्यक्तियों को चुनौतियों पर काबू पाने और क्रेविंग का विरोध करने की अपनी क्षमता में विश्वास करने के लिए सशक्त कर सकती है, इस प्रकार पुनर्प्राप्ति की सफलता को बढ़ावा देती है)",
          "It guarantees immediate recovery (यह त्वरित पुनर्प्राप्ति की गारंटी देती है)",
          "It discourages individuals from seeking help (यह व्यक्तियों को मदद मांगने से हतोत्साहित करती है)"
        ],
        "correct": "High self-efficacy can empower individuals to believe in their ability to overcome challenges and resist cravings, thus enhancing recovery success (उच्च स्व-प्रभावशीलता व्यक्तियों को चुनौतियों पर काबू पाने और क्रेविंग का विरोध करने की अपनी क्षमता में विश्वास करने के लिए सशक्त कर सकती है, इस प्रकार पुनर्प्राप्ति की सफलता को बढ़ावा देती है)"
      },
      {
        "id": "120",
        "question": "In 'Weed Out', what does the story suggest about the relationship between addiction and personal growth? (वीड आउट में, कहानी नशे की लत और व्यक्तिगत विकास के बीच संबंध के बारे में क्या सुझाव देती है?)",
        "options": [
          "Addiction hinders personal growth (नशे की लत व्यक्तिगत विकास में बाधा डालती है)",
          "There is no connection between addiction and personal growth (नशे की लत और व्यक्तिगत विकास के बीच कोई संबंध नहीं है)",
          "Overcoming addiction can lead to significant personal growth and self-discovery (नशे की लत पर काबू पाने से महत्वपूर्ण व्यक्तिगत विकास और आत्म-खोज हो सकती है)",
          "Personal growth is unrelated to recovery (व्यक्तिगत विकास का पुनर्प्राप्ति से कोई संबंध नहीं है)"
        ],
        "correct": "Overcoming addiction can lead to significant personal growth and self-discovery (नशे की लत पर काबू पाने से महत्वपूर्ण व्यक्तिगत विकास और आत्म-खोज हो सकती है)"
      }
      {
        "id": "128",
        "question": "How can setting boundaries help individuals recovering from addiction? (सीमाएँ निर्धारित करना नशे की लत से उबरने वाले व्यक्तियों की कैसे मदद कर सकता है?)",
        "options": [
          "It isolates them from support (यह उन्हें समर्थन से अलग करता है)",
          "Setting boundaries helps individuals protect their recovery process, manage triggers, and maintain healthy relationships (सीमाएँ निर्धारित करना व्यक्तियों को उनकी पुनर्प्राप्ति प्रक्रिया की रक्षा करने, ट्रिगर्स का प्रबंधन करने और स्वस्थ रिश्तों को बनाए रखने में मदद करता है)",
          "It complicates their relationships (यह उनके रिश्तों को जटिल बनाता है)",
          "It has no effect on recovery (इसका पुनर्प्राप्ति पर कोई प्रभाव नहीं होता)"
        ],
        "correct": "Setting boundaries helps individuals protect their recovery process, manage triggers, and maintain healthy relationships (सीमाएँ निर्धारित करना व्यक्तियों को उनकी पुनर्प्राप्ति प्रक्रिया की रक्षा करने, ट्रिगर्स का प्रबंधन करने और स्वस्थ रिश्तों को बनाए रखने में मदद करता है)"
      },
      {
        "id": "129",
        "question": "What role does forgiveness play in the recovery process as depicted in 'Weed Out'? (वीड आउट में दर्शाए गए अनुसार, माफी पुनर्प्राप्ति प्रक्रिया में क्या भूमिका निभाती है?)",
        "options": [
          "It is not important in recovery (यह पुनर्प्राप्ति में महत्वपूर्ण नहीं है)",
          "Forgiveness can help individuals let go of past resentments, which is crucial for emotional healing and moving forward (माफी व्यक्तियों को पिछले मनमुटाव को छोड़ने में मदद कर सकती है, जो भावनात्मक उपचार और आगे बढ़ने के लिए महत्वपूर्ण है)",
          "It guarantees success in recovery (यह पुनर्प्राप्ति में सफलता की गारंटी देती है)",
          "It only applies to family members (यह केवल परिवार के सदस्यों पर लागू होती है)"
        ],
        "correct": "Forgiveness can help individuals let go of past resentments, which is crucial for emotional healing and moving forward (माफी व्यक्तियों को पिछले मनमुटाव को छोड़ने में मदद कर सकती है, जो भावनात्मक उपचार और आगे बढ़ने के लिए महत्वपूर्ण है)"
      },
      {
        "id": "130",
        "question": "What is the importance of self-care in the recovery process? (पुनर्प्राप्ति प्रक्रिया में आत्म-देखभाल का क्या महत्व है?)",
        "options": [
          "It has no relevance to recovery (इसका पुनर्प्राप्ति से कोई संबंध नहीं है)",
          "Self-care practices can enhance physical and emotional well-being, helping individuals to cope better and reduce the risk of relapse (आत्म-देखभाल के अभ्यास शारीरिक और भावनात्मक कल्याण को बढ़ा सकते हैं, व्यक्तियों को बेहतर ढंग से मुकाबला करने और पुनरावृत्ति के जोखिम को कम करने में मदद कर सकते हैं)",
          "It guarantees immediate recovery (यह त्वरित पुनर्प्राप्ति की गारंटी देती है)",
          "It is only about physical health (यह केवल शारीरिक स्वास्थ्य के बारे में है)"
        ],
        "correct": "Self-care practices can enhance physical and emotional well-being, helping individuals to cope better and reduce the risk of relapse (आत्म-देखभाल के अभ्यास शारीरिक और भावनात्मक कल्याण को बढ़ा सकते हैं, व्यक्तियों को बेहतर ढंग से मुकाबला करने और पुनरावृत्ति के जोखिम को कम करने में मदद कर सकते हैं)"
      }
      {
        "id": "131",
        "question": "What does the term 'addiction recovery' encompass? (नशे की लत की पुनर्प्राप्ति की अवधारणा में क्या शामिल है?)",
        "options": [
          "Only stopping the use of substances (सिर्फ नशीली दवाओं का उपयोग बंद करना)",
          "A holistic process that includes physical, emotional, and psychological healing (एक समग्र प्रक्रिया जिसमें शारीरिक, भावनात्मक और मनोवैज्ञानिक उपचार शामिल होता है)",
          "Only attending therapy sessions (सिर्फ चिकित्सा सत्रों में भाग लेना)",
          "It is only about making financial restitution (यह सिर्फ वित्तीय मुआवजा देने के बारे में है)"
        ],
        "correct": "A holistic process that includes physical, emotional, and psychological healing (एक समग्र प्रक्रिया जिसमें शारीरिक, भावनात्मक और मनोवैज्ञानिक उपचार शामिल होता है)"
      },
      {
        "id": "132",
        "question": "How does understanding triggers and cravings aid in recovery from addiction? (ट्रिगर्स और क्रेविंग को समझना नशे की लत से उबरने में कैसे मदद करता है?)",
        "options": [
          "It makes cravings stronger (यह क्रेविंग को और मजबूत बनाता है)",
          "It allows individuals to avoid situations that lead to relapse (यह व्यक्तियों को उन परिस्थितियों से बचने की अनुमति देता है जो पुनरावृत्ति की ओर ले जाती हैं)",
          "It guarantees recovery success (यह पुनर्प्राप्ति की सफलता की गारंटी देता है)",
          "It has no relevance to the recovery process (यह पुनर्प्राप्ति प्रक्रिया से कोई संबंध नहीं रखता)"
        ],
        "correct": "It allows individuals to avoid situations that lead to relapse (यह व्यक्तियों को उन परिस्थितियों से बचने की अनुमति देता है जो पुनरावृत्ति की ओर ले जाती हैं)"
      },
      {
        "id": "133",
        "question": "What significance does group therapy hold in addiction recovery? (नशे की लत से उबरने में समूह चिकित्सा का क्या महत्व है?)",
        "options": [
          "It has no effect on recovery (इसका पुनर्प्राप्ति पर कोई प्रभाव नहीं है)",
          "Group therapy provides a sense of belonging, shared experiences, and support that can enhance recovery (समूह चिकित्सा belonging की भावना, साझा अनुभव, और समर्थन प्रदान करती है जो पुनर्प्राप्ति को बढ़ा सकती है)",
          "It only focuses on individual problems (यह केवल व्यक्तिगत समस्याओं पर ध्यान केंद्रित करती है)",
          "It guarantees immediate success (यह त्वरित सफलता की गारंटी देती है)"
        ],
        "correct": "Group therapy provides a sense of belonging, shared experiences, and support that can enhance recovery (समूह चिकित्सा belonging की भावना, साझा अनुभव, और समर्थन प्रदान करती है जो पुनर्प्राप्ति को बढ़ा सकती है)"
      },
      {
        "id": "134",
        "question": "How can mindfulness practices impact recovery from addiction? (ध्यान के अभ्यास नशे की लत से उबरने पर क्या प्रभाव डाल सकते हैं?)",
        "options": [
          "They have no impact on recovery (इनका पुनर्प्राप्ति पर कोई प्रभाव नहीं है)",
          "Mindfulness can help individuals stay present, reduce stress, and manage cravings more effectively (ध्यान व्यक्तियों को वर्तमान में बने रहने, तनाव को कम करने, और क्रेविंग का अधिक प्रभावी ढंग से प्रबंधन करने में मदद कर सकता है)",
          "Mindfulness guarantees immediate recovery (ध्यान त्वरित पुनर्प्राप्ति की गारंटी देता है)",
          "It is only about relaxation techniques (यह केवल विश्राम तकनीकों के बारे में है)"
        ],
        "correct": "Mindfulness can help individuals stay present, reduce stress, and manage cravings more effectively (ध्यान व्यक्तियों को वर्तमान में बने रहने, तनाव को कम करने, और क्रेविंग का अधिक प्रभावी ढंग से प्रबंधन करने में मदद कर सकता है)"
      },
      {
        "id": "135",
        "question": "In 'Weed Out', what is highlighted as an important factor for sustaining recovery? (वीड आउट में, स्थायी पुनर्प्राप्ति के लिए क्या महत्वपूर्ण कारक के रूप में उजागर किया गया है?)",
        "options": [
          "Financial stability (वित्तीय स्थिरता)",
          "Continuous support from family, friends, and support groups (परिवार, दोस्तों, और सहायता समूहों से निरंतर समर्थन)",
          "Avoiding all social interactions (सभी सामाजिक मेलजोल से बचना)",
          "Maintaining a strict diet (सख्त आहार बनाए रखना)"
        ],
        "correct": "Continuous support from family, friends, and support groups (परिवार, दोस्तों, और सहायता समूहों से निरंतर समर्थन)"
      },
      {
        "id": "136",
        "question": "What does the concept of 'sober living' entail? ( 'सोबर लिविंग' की अवधारणा में क्या शामिल है?)",
        "options": [
          "Living without any responsibilities (बिना किसी जिम्मेदारी के जीना)",
          "Living in a structured environment that supports sobriety and recovery (एक संरचित वातावरण में रहना जो संयम और पुनर्प्राप्ति का समर्थन करता है)",
          "Living in isolation from others (दूसरों से अलग-थलग रहना)",
          "It has no relevance to addiction recovery (यह नशे की लत से उबरने से कोई संबंध नहीं रखता)"
        ],
        "correct": "Living in a structured environment that supports sobriety and recovery (एक संरचित वातावरण में रहना जो संयम और पुनर्प्राप्ति का समर्थन करता है)"
      },
      {
        "id": "137",
        "question": "How does the book 'Weed Out' portray the journey of recovery as a non-linear process? (पुस्तक 'वीड आउट' पुनर्प्राप्ति की यात्रा को गैर-रेखीय प्रक्रिया के रूप में कैसे दर्शाती है?)",
        "options": [
          "It suggests that recovery is always a straightforward journey (यह सुझाव देता है कि पुनर्प्राप्ति हमेशा एक सीधा यात्रा है)",
          "It shows that setbacks and relapses are common and part of the journey, emphasizing resilience (यह दिखाता है कि विफलताएँ और पुनरावृत्तियाँ सामान्य हैं और यात्रा का हिस्सा हैं, जो लचीलापन पर जोर देती हैं)",
          "It ignores the difficulties of recovery (यह पुनर्प्राप्ति की कठिनाइयों की अनदेखी करता है)",
          "It presents recovery as an instant process (यह पुनर्प्राप्ति को एक तात्कालिक प्रक्रिया के रूप में प्रस्तुत करता है)"
        ],
        "correct": "It shows that setbacks and relapses are common and part of the journey, emphasizing resilience (यह दिखाता है कि विफलताएँ और पुनरावृत्तियाँ सामान्य हैं और यात्रा का हिस्सा हैं, जो लचीलापन पर जोर देती हैं)"
      },
      {
        "id": "138",
        "question": "What is the significance of community service in the recovery process? (पुनर्प्राप्ति प्रक्रिया में सामुदायिक सेवा का क्या महत्व है?)",
        "options": [
          "It has no relevance to recovery (इसका पुनर्प्राप्ति से कोई संबंध नहीं है)",
          "Community service can help individuals rebuild self-esteem, establish connections, and contribute positively to society (सामुदायिक सेवा व्यक्तियों को आत्म-सम्मान फिर से बनाने, संबंध स्थापित करने, और समाज में सकारात्मक योगदान देने में मदद कर सकती है)",
          "It guarantees immediate recovery (यह त्वरित पुनर्प्राप्ति की गारंटी देती है)",
          "It only serves to distract from personal issues (यह केवल व्यक्तिगत मुद्दों से ध्यान हटाने के लिए है)"
        ],
        "correct": "Community service can help individuals rebuild self-esteem, establish connections, and contribute positively to society (सामुदायिक सेवा व्यक्तियों को आत्म-सम्मान फिर से बनाने, संबंध स्थापित करने, और समाज में सकारात्मक योगदान देने में मदद कर सकती है)"
      },
      {
        "id": "139",
        "question": "How does the author of 'Weed Out' address the theme of hope in recovery? (वीड आउट के लेखक ने पुनर्प्राप्ति में आशा के विषय को कैसे संबोधित किया है?)",
        "options": [
          "By showing that recovery is impossible (यह दिखाकर कि पुनर्प्राप्ति असंभव है)",
          "By portraying characters who successfully overcome their struggles and find a new purpose in life (ऐसे पात्रों को दर्शाकर जो सफलतापूर्वक अपने संघर्षों पर काबू पाते हैं और जीवन में नया उद्देश्य पाते हैं)",
          "By ignoring the consequences of addiction (नशे की लत के परिणामों की अनदेखी करके)",
          "By focusing solely on the negative aspects of addiction (नशे की लत के नकारात्मक पहलुओं पर केवल ध्यान केंद्रित करके)"
        ],
        "correct": "By portraying characters who successfully overcome their struggles and find a new purpose in life (ऐसे पात्रों को दर्शाकर जो सफलतापूर्वक अपने संघर्षों पर काबू पाते हैं और जीवन में नया उद्देश्य पाते हैं)"
      },
      {
        "id": "140",
        "question": "What role does accountability play in maintaining sobriety? (संयम बनाए रखने में जवाबदेही का क्या महत्व है?)",
        "options": [
          "It is irrelevant to recovery (यह पुनर्प्राप्ति के लिए अप्रासंगिक है)",
          "Accountability helps individuals stay committed to their recovery goals and encourages them to take responsibility for their actions (जवाबदेही व्यक्तियों को उनकी पुनर्प्राप्ति के लक्ष्यों के प्रति प्रतिबद्ध रहने में मदद करती है और उन्हें अपने कार्यों के लिए जिम्मेदारी लेने के लिए प्रोत्साहित करती है)",
          "It guarantees recovery (यह पुनर्प्राप्ति की गारंटी देती है)",
          "It only focuses on financial aspects of recovery (यह केवल पुनर्प्राप्ति के वित्तीय पहलुओं पर ध्यान केंद्रित करती है)"
        ],
        "correct": "Accountability helps individuals stay committed to their recovery goals and encourages them to take responsibility for their actions (जवाबदेही व्यक्तियों को उनकी पुनर्प्राप्ति के लक्ष्यों के प्रति प्रतिबद्ध रहने में मदद करती है और उन्हें अपने कार्यों के लिए जिम्मेदारी लेने के लिए प्रोत्साहित करती है)"
      }
      {
        "id": "141",
        "question": "What is the significance of understanding one's personal triggers in the context of addiction recovery? (नशे की लत की पुनर्प्राप्ति के संदर्भ में अपने व्यक्तिगत ट्रिगर्स को समझने का क्या महत्व है?)",
        "options": [
          "It helps individuals ignore their cravings (यह व्यक्तियों को उनकी क्रेविंग को अनदेखा करने में मदद करता है)",
          "Understanding triggers allows individuals to develop coping strategies and avoid situations that may lead to relapse (ट्रिगर्स को समझना व्यक्तियों को मुकाबला करने की रणनीतियाँ विकसित करने और उन परिस्थितियों से बचने की अनुमति देता है जो पुनरावृत्ति की ओर ले जा सकती हैं)",
          "It is unnecessary for recovery (यह पुनर्प्राप्ति के लिए आवश्यक नहीं है)",
          "It complicates the recovery process (यह पुनर्प्राप्ति प्रक्रिया को जटिल बनाता है)"
        ],
        "correct": "Understanding triggers allows individuals to develop coping strategies and avoid situations that may lead to relapse (ट्रिगर्स को समझना व्यक्तियों को मुकाबला करने की रणनीतियाँ विकसित करने और उन परिस्थितियों से बचने की अनुमति देता है जो पुनरावृत्ति की ओर ले जा सकती हैं)"
      },
      {
        "id": "142",
        "question": "How can positive affirmations support individuals in recovery from addiction? (सकारात्मक आश्वासन नशे की लत से उबरने वाले व्यक्तियों का समर्थन कैसे कर सकते हैं?)",
        "options": [
          "They have no impact on recovery (इनका पुनर्प्राप्ति पर कोई प्रभाव नहीं होता)",
          "Positive affirmations can help build self-esteem, reinforce commitment to recovery, and counter negative thoughts (सकारात्मक आश्वासन आत्म-सम्मान बढ़ाने, पुनर्प्राप्ति के प्रति प्रतिबद्धता को मजबूत करने, और नकारात्मक विचारों का मुकाबला करने में मदद कर सकते हैं)",
          "They are only useful for physical health (वे केवल शारीरिक स्वास्थ्य के लिए उपयोगी होते हैं)",
          "They guarantee immediate recovery (यह त्वरित पुनर्प्राप्ति की गारंटी देते हैं)"
        ],
        "correct": "Positive affirmations can help build self-esteem, reinforce commitment to recovery, and counter negative thoughts (सकारात्मक आश्वासन आत्म-सम्मान बढ़ाने, पुनर्प्राप्ति के प्रति प्रतिबद्धता को मजबूत करने, और नकारात्मक विचारों का मुकाबला करने में मदद कर सकते हैं)"
      },
      {
        "id": "143",
        "question": "What does the term 'aftercare' refer to in addiction recovery? (नशे की लत की पुनर्प्राप्ति में 'आफ्टरकेयर' का क्या अर्थ है?)",
        "options": [
          "Support provided after initial treatment to help maintain sobriety and prevent relapse (आरंभिक उपचार के बाद प्रदान किया गया समर्थन जो संयम बनाए रखने और पुनरावृत्ति को रोकने में मदद करता है)",
          "A form of therapy used during treatment (उपचार के दौरान उपयोग की जाने वाली चिकित्सा का एक रूप)",
          "It has no relevance to recovery (यह पुनर्प्राप्ति से कोई संबंध नहीं रखता)",
          "Only involves medication management (केवल दवा प्रबंधन में शामिल होता है)"
        ],
        "correct": "Support provided after initial treatment to help maintain sobriety and prevent relapse (आरंभिक उपचार के बाद प्रदान किया गया समर्थन जो संयम बनाए रखने और पुनरावृत्ति को रोकने में मदद करता है)"
      },
      {
        "id": "144",
        "question": "How can understanding the brain's role in addiction influence recovery strategies? (नशे की लत में मस्तिष्क की भूमिका को समझने से पुनर्प्राप्ति की रणनीतियों पर क्या प्रभाव पड़ सकता है?)",
        "options": [
          "It has no impact on recovery strategies (इसका पुनर्प्राप्ति रणनीतियों पर कोई प्रभाव नहीं होता)",
          "Understanding the brain's mechanisms can lead to targeted interventions and therapies that address the biological aspects of addiction (मस्तिष्क के तंत्रों को समझने से लक्षित हस्तक्षेप और उपचार की ओर ले जा सकता है जो नशे की लत के जैविक पहलुओं को संबोधित करते हैं)",
          "It complicates the treatment process (यह उपचार प्रक्रिया को जटिल बनाता है)",
          "It guarantees recovery success (यह पुनर्प्राप्ति की सफलता की गारंटी देता है)"
        ],
        "correct": "Understanding the brain's mechanisms can lead to targeted interventions and therapies that address the biological aspects of addiction (मस्तिष्क के तंत्रों को समझने से लक्षित हस्तक्षेप और उपचार की ओर ले जा सकता है जो नशे की लत के जैविक पहलुओं को संबोधित करते हैं)"
      },
      {
        "id": "145",
        "question": "In 'Weed Out', what does Aarya’s character symbolize in terms of hope and resilience? (वीड आउट में, आर्या का चरित्र आशा और लचीलापन के संदर्भ में क्या प्रतीक है?)",
        "options": [
          "A character who gives up easily (एक ऐसा पात्र जो आसानी से हार मान लेता है)",
          "A character who symbolizes the possibility of change and the strength to overcome challenges (एक ऐसा पात्र जो बदलाव की संभावना और चुनौतियों पर काबू पाने की ताकत का प्रतीक है)",
          "A character who only focuses on material success (एक ऐसा पात्र जो केवल भौतिक सफलता पर ध्यान केंद्रित करता है)",
          "A character without any personal struggles (एक ऐसा पात्र जिसके पास कोई व्यक्तिगत संघर्ष नहीं है)"
        ],
        "correct": "A character who symbolizes the possibility of change and the strength to overcome challenges (एक ऐसा पात्र जो बदलाव की संभावना और चुनौतियों पर काबू पाने की ताकत का प्रतीक है)"
      },
      {
        "id": "146",
        "question": "What does the process of 'detoxification' entail in addiction treatment? (नशे की लत के उपचार में 'डिटॉक्सिफिकेशन' की प्रक्रिया में क्या शामिल है?)",
        "options": [
          "Only stopping drug use (केवल नशीली दवाओं का उपयोग बंद करना)",
          "A medically supervised process to remove addictive substances from the body while managing withdrawal symptoms (एक चिकित्सकीय रूप से निगरानी की गई प्रक्रिया जो शरीर से नशे की लत वाले पदार्थों को निकालने के लिए होती है जबकि वापसी के लक्षणों का प्रबंधन किया जाता है)",
          "It has no relevance to treatment (यह उपचार से कोई संबंध नहीं रखता)",
          "It guarantees immediate recovery (यह त्वरित पुनर्प्राप्ति की गारंटी देती है)"
        ],
        "correct": "A medically supervised process to remove addictive substances from the body while managing withdrawal symptoms (एक चिकित्सकीय रूप से निगरानी की गई प्रक्रिया जो शरीर से नशे की लत वाले पदार्थों को निकालने के लिए होती है जबकि वापसी के लक्षणों का प्रबंधन किया जाता है)"
      },
      {
        "id": "147",
        "question": "How does maintaining a healthy lifestyle support recovery from addiction? (स्वस्थ जीवनशैली बनाए रखना नशे की लत से उबरने का समर्थन कैसे करता है?)",
        "options": [
          "It has no effect on recovery (इसका पुनर्प्राप्ति पर कोई प्रभाव नहीं है)",
          "A healthy lifestyle can improve physical and mental health, boost mood, and reduce the risk of relapse (एक स्वस्थ जीवनशैली शारीरिक और मानसिक स्वास्थ्य में सुधार, मूड को बढ़ाने और पुनरावृत्ति के जोखिम को कम करने में मदद कर सकती है)",
          "It complicates the recovery process (यह पुनर्प्राप्ति प्रक्रिया को जटिल बनाता है)",
          "It guarantees financial stability (यह वित्तीय स्थिरता की गारंटी देता है)"
        ],
        "correct": "A healthy lifestyle can improve physical and mental health, boost mood, and reduce the risk of relapse (एक स्वस्थ जीवनशैली शारीरिक और मानसिक स्वास्थ्य में सुधार, मूड को बढ़ाने और पुनरावृत्ति के जोखिम को कम करने में मदद कर सकती है)"
      },
      {
        "id": "148",
        "question": "What is the relationship between stress management and addiction recovery? (तनाव प्रबंधन और नशे की लत की पुनर्प्राप्ति के बीच क्या संबंध है?)",
        "options": [
          "Stress management has no impact on recovery (तनाव प्रबंधन का पुनर्प्राप्ति पर कोई प्रभाव नहीं होता)",
          "Effective stress management techniques can help individuals cope with stressors without turning to substances, thus supporting recovery (प्रभावी तनाव प्रबंधन तकनीक व्यक्तियों को तनावपूर्ण परिस्थितियों का सामना करने में मदद कर सकती हैं बिना नशीली दवाओं का सहारा लिए, इस प्रकार पुनर्प्राप्ति का समर्थन करती हैं)",
          "Stress management is only for physical health (तनाव प्रबंधन केवल शारीरिक स्वास्थ्य के लिए है)",
          "It complicates the recovery process (यह पुनर्प्राप्ति प्रक्रिया को जटिल बनाता है)"
        ],
        "correct": "Effective stress management techniques can help individuals cope with stressors without turning to substances, thus supporting recovery (प्रभावी तनाव प्रबंधन तकनीक व्यक्तियों को तनावपूर्ण परिस्थितियों का सामना करने में मदद कर सकती हैं बिना नशीली दवाओं का सहारा लिए, इस प्रकार पुनर्प्राप्ति का समर्थन करती हैं)"
      },
      {
        "id": "149",
        "question": "In 'Weed Out', what does the concept of 'personal responsibility' emphasize in the context of addiction recovery? (वीड आउट में, नशे की लत से उबरने के संदर्भ में 'व्यक्तिगत जिम्मेदारी' की अवधारणा पर क्या जोर दिया गया है?)",
        "options": [
          "It means relying solely on others for recovery (इसका मतलब है कि पुनर्प्राप्ति के लिए केवल दूसरों पर निर्भर रहना)",
          "It emphasizes that individuals must take ownership of their actions and decisions in order to successfully recover from addiction (यह इस बात पर जोर देता है कि व्यक्तियों को नशे की लत से सफलतापूर्वक उबरने के लिए अपने कार्यों और निर्णयों की जिम्मेदारी लेनी चाहिए)",
          "It has no relevance to the recovery process (यह पुनर्प्राप्ति प्रक्रिया से कोई संबंध नहीं रखता)",
          "It guarantees success in recovery (यह पुनर्प्राप्ति में सफलता की गारंटी देता है)"
        ],
        "correct": "It emphasizes that individuals must take ownership of their actions and decisions in order to successfully recover from addiction (यह इस बात पर जोर देता है कि व्यक्तियों को नशे की लत से सफलतापूर्वक उबरने के लिए अपने कार्यों और निर्णयों की जिम्मेदारी लेनी चाहिए)"
      },
      {
        "id": "150",
        "question": "What overarching message does 'Weed Out' convey about the journey of recovery from addiction? (वीड आउट में नशे की लत से उबरने की यात्रा के बारे में क्या व्यापक संदेश दिया गया है?)",
        "options": [
          "That recovery is a one-time event (कि पुनर्प्राप्ति एक बार का मामला है)",
          "That recovery is a continuous journey that requires dedication, support, and resilience (कि पुनर्प्राप्ति एक निरंतर यात्रा है जिसमें समर्पण, समर्थन, और लचीलापन की आवश्यकता होती है)",
          "That addiction is always a choice (कि नशे की लत हमेशा एक विकल्प है)",
          "That recovery is solely about stopping drug use (कि पुनर्प्राप्ति केवल नशीली दवाओं का उपयोग रोकने के बारे में है)"
        ],
        "correct": "That recovery is a continuous journey that requires dedication, support, and resilience (कि पुनर्प्राप्ति एक निरंतर यात्रा है जिसमें समर्पण, समर्थन, और लचीलापन की आवश्यकता होती है)"
      }
];
