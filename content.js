const DEMO = true;
const BUY_URL = "";
const TYPES = {
  fog:   { name: "Need more info",   say: "You need a bit more info",
           blurb: "Something's missing, so it's hard to settle." },
  tug:   { name: "Both matter",      say: "Both options matter to you",
           blurb: "Each option protects something you care about, so they pull in different directions." },
  dread: { name: "Scared of regret", say: "You're scared of getting it wrong",
           blurb: "You can see your options. It's the \"what if I regret it?\" that's loud." }
};

const CARDS = [
  // NEED MORE INFO
  { t:"fog", title:"The one missing thing", q:"What's one thing you wish you knew right now?",
    why:"Sometimes the choice isn't hard. You're just missing a piece.",
    ex:"Write it down. Then think of one person or place that could tell you, and ask in the next few days." },
  { t:"fog", title:"Fact or guess?", q:"Which of your \"facts\" are really just guesses?",
    why:"Our brains treat guesses like facts, especially the scary ones.",
    ex:"List 5 things you believe about this. Mark each: I saw it, I heard it, or I'm guessing. Circle the biggest guess." },
  { t:"fog", title:"A tiny taste", locked:true },
  { t:"fog", title:"What waiting costs", locked:true },
  // BOTH MATTER
  { t:"tug", title:"What each side protects", q:"What is each option looking out for?",
    why:"Every choice protects something you care about. Naming it makes things clearer.",
    ex:"Give each option one word, like \"safety\" or \"freedom\". Which one would you stand up for?" },
  { t:"tug", title:"Whose voice is that?", q:"Which of your reasons are really someone else's?",
    why:"Some reasons were handed to you by other people. They can feel like yours.",
    ex:"Next to each reason, write whose voice it is (you, mum, your boss…). Cross out the ones that aren't yours. See what's left." },
  { t:"tug", title:"The coin check", locked:true },
  { t:"tug", title:"The in-between option", locked:true },
  // SCARED OF REGRET
  { t:"dread", title:"Name the regret", q:"If it goes badly, what exactly would you wish you'd done?",
    why:"A vague worry feels huge. A specific one is easier to handle.",
    ex:"Write one \"I wish I'd…\" for each option. Then mark each: fixable, survivable, or here to stay." },
  { t:"dread", title:"Will it matter later?", q:"How much will this matter in 10 days? 10 months? 10 years?",
    why:"Based on the 10-10-10 idea from Suzy Welch. Time changes what feels big.",
    ex:"For each option, finish those three sentences. Underline the point where it stops mattering." },
  { t:"dread", title:"If the worst happens", locked:true },
  { t:"dread", title:"Can you undo it?", locked:true },
];

const QUIZ = [
  { q:"When you picture choosing one, what pops up first?", a:[
    ["Hmm, I don't know enough yet.", "fog"],
    ["I'd miss something I really care about.", "tug"],
    ["What if I regret it?", "dread"] ] },
  { q:"What would feel like a relief right now?", a:[
    ["Finding out one key thing.", "fog"],
    ["Knowing what matters most to me.", "tug"],
    ["Knowing I'd be okay either way.", "dread"] ] },
  { q:"Which one sounds most like your inner voice?", a:[
    ["\"If I just knew more, this would be easy.\"", "fog"],
    ["\"They're both good. Ugh.\"", "tug"],
    ["\"I keep replaying what could go wrong.\"", "dread"] ] }
];
