// src/i18n.js

export const LANG = {
  EN: "en",
  MY: "my",
};

export const CONTENT = {
  [LANG.EN]: {
    nav: {
      brand: "MOE KYAW AUNG",
      about: "About",
      expertise: "Expertise",
      projects: "Projects",
      githubCerts: "GitHub & Certs",
      contact: "Contact",
    },
    hero: {
      title: "Senior Android & Full‑Stack Engineer",
      subtitle:
        "Kotlin · Jetpack Compose · AI/ML · Cybersecurity. Building scalable mobile systems and AI‑powered apps from Myanmar to the world.",
      tags: [
        "Android",
        "Kotlin",
        "Jetpack Compose",
        "Firebase",
        "AI/ML",
        "Cybersecurity",
        "CI/CD",
      ],
      ctaViewWork: "View Work",
      ctaContact: "Contact",
    },
    about: {
      title: "About",
      p1:
        "I’m Moe Kyaw Aung, a senior Android and full‑stack engineer based in Tachileik, Myanmar 🇲🇲, working with teams across Southeast Asia.",
      p2:
        "I specialize in Kotlin, Jetpack Compose, Clean Architecture, and Firebase, with deep interest in AI/ML on device, cybersecurity, and developer tooling.",
      p3:
        "My goal is to build world‑class products that bridge Myanmar and global tech ecosystems—code with culture, build with purpose.",
    },
    expertise: {
      title: "Expertise",
      sections: [
        {
          title: "Android / Mobile",
          items: [
            "Kotlin, Coroutines, Flow",
            "Jetpack Compose, ViewModel, Navigation",
            "Room, Paging, DataStore",
            "Material 3, Custom Design Systems",
          ],
        },
        {
          title: "Architecture",
          items: [
            "Clean Architecture",
            "MVVM / MVI",
            "Multi‑module apps",
            "SOLID, OOP, Testing strategies",
          ],
        },
        {
          title: "Backend & Cloud",
          items: [
            "Firebase (Auth, Firestore, FCM)",
            "REST APIs, Retrofit, OkHttp",
            "Basic Python backends",
            "CI/CD with GitHub Actions, Azure DevOps",
          ],
        },
        {
          title: "AI / ML",
          items: [
            "Claude API integration",
            "TFLite, on‑device ML",
            "AI translation & assistants",
            "Data pipelines for ML features",
          ],
        },
        {
          title: "Cybersecurity",
          items: [
            "Ethical hacking fundamentals",
            "Secure storage & networking",
            "Threat modeling for mobile apps",
            "Security‑first coding practices",
          ],
        },
        {
          title: "Dev Tools",
          items: [
            "Git, GitHub, GitLab",
            "Fastlane, Gradle, Kotlin DSL",
            "Jira, Agile/Scrum",
            "Performance profiling & debugging",
          ],
        },
      ],
    },
    professionalSummary: {
      title: "Professional Summary",
      bullets: [
        "10+ years building production Android apps used by hundreds of thousands of users across Myanmar and Southeast Asia.",
        "Led architecture redesigns that improved app startup time by ~40% and reduced crash‑free session rates to >99%.",
        "Designed CI/CD pipelines (GitHub Actions, Azure DevOps) that cut release cycles from days to under an hour.",
        "Integrated Firebase and REST APIs to enable real‑time features, offline‑first UX, and robust analytics.",
        "Mentored multiple junior/mid‑level engineers on Kotlin, Compose, Clean Architecture, and testing practices.",
      ],
    },
    githubCerts: {
      title: "GitHub & Certifications",
      github: {
        title: "GitHub",
        p:
          "I build open‑source tools, sample architectures, and experimental apps focused on Android, AI, and developer productivity.",
        items: [
          "Profile: github.com/Dev-moe-kyawaung",
          "Flagship repos: MoekyawTranslator, PulseSync, portfolio apps",
          "CI/CD with GitHub Actions, reusable workflows",
        ],
      },
      certs: {
        title: "Certifications & Achievements",
        items: [
          "40+ certifications across Android, Kotlin, Firebase, ML",
          "Google Developers Launchpad participant",
          "Firebase Associate Developer",
          "Git & GitHub Professional Certificate",
          "Security & ethical hacking training",
          "AI/ML self‑directed R&D (Claude API, TFLite)",
        ],
      },
    },
    contact: {
      title: "Contact",
      p:
        "I’m open to senior Android roles, full‑stack opportunities, and collaborations on AI/ML and security‑focused mobile products.",
      links: {
        email: "Email",
        github: "GitHub",
        tumblr: "Tumblr",
        strikingly: "Strikingly",
        slack: "Slack",
        bluesky: "Bluesky",
      },
    },
    toggle: {
      en: "EN",
      my: "မြန်",
    },
  },
  [LANG.MY]: {
    nav: {
      brand: "မိုးကျော်အောင်",
      about: "အကြောင်း",
      expertise: "ကျွမ်းကျင်မှု",
      projects: "ပရောဂျက်များ",
      githubCerts: "GitHub နှင့် လက်မှတ်များ",
      contact: "ဆက်သွယ်ရန်",
    },
    hero: {
      title: "အကြီးတန်း Android နှင့် Full‑Stack အင်ဂျင်နီယာ",
      subtitle:
        "Kotlin · Jetpack Compose · AI/ML · Cybersecurity။ မြန်မာနိုင်ငံမှ ကမ္ဘာ့ဈေးကွက်သို့ စကေးကြီးမားသော မိုဘိုင်းစနစ်များနှင့် AI‑အခြေခံ အက်ပ်များကို တည်ဆောက်နေသူ။",
      tags: [
        "Android",
        "Kotlin",
        "Jetpack Compose",
        "Firebase",
        "AI/ML",
        "Cybersecurity",
        "CI/CD",
      ],
      ctaViewWork: "လုပ်ငန်းများကို ကြည့်ရန်",
      ctaContact: "ဆက်သွယ်ရန်",
    },
    about: {
      title: "အကြောင်း",
      p1:
        "ကျွန်တော်သည် မိုးကျော်အောင် ဖြစ်ပြီး တာချီလိတ်၊ မြန်မာနိုင်ငံ 🇲🇲 တွင် အခြေစိုက်ကာ အရှေ့တောင်အာရှတစ်ဝှမ်းရှိ အဖွဲ့အစည်းများနှင့်အတူ လုပ်ကိုင်နေသော အကြီးတန်း Android နှင့် full‑stack အင်ဂျင်နီယာ တစ်ဦး ဖြစ်သည်။",
      p2:
        "Kotlin, Jetpack Compose, Clean Architecture နှင့် Firebase တို့တွင် အထူးပြုပြီး စက်ပစ္စည်းပေါ်တွင် AI/ML၊ cybersecurity နှင့် developer tooling တို့ကို နက်နက်ရှိုင်းရှိုင်း စိတ်ဝင်စားသည်။",
      p3:
        "မြန်မာနှင့် ကမ္ဘာ့နည်းပညာ စနစ်များကို ချိတ်ဆက်ပေးနိုင်မည့် ကမ္ဘာ့အဆင့်မီ ထုတ်ကုန်များကို တည်ဆောက်ရန် ရည်ရွယ်သည်—Code with culture. Build with purpose.",
    },
    expertise: {
      title: "ကျွမ်းကျင်မှု",
      sections: [
        {
          title: "Android / Mobile",
          items: [
            "Kotlin, Coroutines, Flow",
            "Jetpack Compose, ViewModel, Navigation",
            "Room, Paging, DataStore",
            "Material 3, Custom Design Systems",
          ],
        },
        {
          title: "Architecture",
          items: [
            "Clean Architecture",
            "MVVM / MVI",
            "Multi‑module apps",
            "SOLID, OOP, Testing strategies",
          ],
        },
        {
          title: "Backend & Cloud",
          items: [
            "Firebase (Auth, Firestore, FCM)",
            "REST APIs, Retrofit, OkHttp",
            "Basic Python backends",
            "CI/CD with GitHub Actions, Azure DevOps",
          ],
        },
        {
          title: "AI / ML",
          items: [
            "Claude API integration",
            "TFLite, on‑device ML",
            "AI translation & assistants",
            "Data pipelines for ML features",
          ],
        },
        {
          title: "Cybersecurity",
          items: [
            "Ethical hacking fundamentals",
            "Secure storage & networking",
            "Threat modeling for mobile apps",
            "Security‑first coding practices",
          ],
        },
        {
          title: "Dev Tools",
          items: [
            "Git, GitHub, GitLab",
            "Fastlane, Gradle, Kotlin DSL",
            "Jira, Agile/Scrum",
            "Performance profiling & debugging",
          ],
        },
      ],
    },
    professionalSummary: {
      title: "အလုပ်အကိုင် အကျဉ်းချုပ်",
      bullets: [
        "၁၀+ နှစ်ကြာ ထုတ်လုပ်မှုအဆင့် Android အက်ပ်များ တည်ဆောက်ခဲ့ပြီး မြန်မာနိုင်ငံနှင့် အရှေ့တောင်အာရှတစ်ဝှမ်းရှိ သုံးစွဲသူ သောင်းနှင့်ချီ၍ အသုံးပြုနေသည်။",
        "Architecture ပြန်လည်ဒီဇိုင်းဆွဲမှုများကို ဦးဆောင်ခဲ့ပြီး အက်ပ် စတင်တက်ချိန်ကို ~၄၀% တိုးတက်စေကာ crash‑free session rate ကို ၉၉% အထက်သို့ ရောက်စေခဲ့သည်။",
        "CI/CD pipelines များ (GitHub Actions, Azure DevOps) ကို ဒီဇိုင်းဆွဲခဲ့ပြီး release လုပ်ငန်းစဉ်များကို ရက်များမှ တစ်နာရီအောက်သို့ လျှော့ချပေးခဲ့သည်။",
        "Firebase နှင့် REST APIs များကို ပေါင်းစပ်ကာ real‑time features များ၊ offline‑first UX နှင့် ခိုင်မာသော analytics များကို ဖြစ်နိုင်စေခဲ့သည်။",
        "Kotlin, Compose, Clean Architecture နှင့် testing လုပ်ငန်းစဉ်များတွင် junior/mid‑level အင်ဂျင်နီယာ အများအပြားကို လမ်းညွှန်သင်ကြားပေးခဲ့သည်။",
      ],
    },
    githubCerts: {
      title: "GitHub နှင့် လက်မှတ်များ",
      github: {
        title: "GitHub",
        p:
          "Android, AI နှင့် developer productivity တို့တွင် အဓိကထားသော open‑source tools, sample architectures နှင့် စမ်းသပ် အက်ပ်များကို တည်ဆောက်သည်။",
        items: [
          "Profile: github.com/Dev-moe-kyawaung",
          "Flagship repos: MoekyawTranslator, PulseSync, portfolio apps",
          "CI/CD with GitHub Actions, reusable workflows",
        ],
      },
      certs: {
        title: "လက်မှတ်များနှင့် ရောင်ပြန်ဟပ်မှုများ",
        items: [
          "Android, Kotlin, Firebase, ML တို့တွင် လက်မှတ် ၄၀+ ရရှိ",
          "Google Developers Launchpad တွင် ပါဝင်ခဲ့",
          "Firebase Associate Developer",
          "Git & GitHub Professional Certificate",
          "Security နှင့် ethical hacking သင်တန်းများ",
          "AI/ML ကိုယ်တိုင် လေ့လာသုတေသန (Claude API, TFLite)",
        ],
      },
    },
    contact: {
      title: "ဆက်သွယ်ရန်",
      p:
        "အကြီးတန်း Android ရာထူးများ၊ full‑stack အခွင့်အလမ်းများနှင့် AI/ML နှင့် security‑အခြေခံ မိုဘိုင်းထုတ်ကုန်များပေါ်တွင် ပူးပေါင်းဆောင်ရွက်ရန် ဖွင့်လှစ်ထားသည်။",
      links: {
        email: "အီးမေးလ်",
        github: "GitHub",
        tumblr: "Tumblr",
        strikingly: "Strikingly",
        slack: "Slack",
        bluesky: "Bluesky",
      },
    },
    toggle: {
      en: "EN",
      my: "မြန်",
    },
  },
};
