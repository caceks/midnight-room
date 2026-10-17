const DEMO = true;
const BUY_URL = "";
const TYPES = {
  fog:   { name: "Fog",   blurb: "You're missing something you need to know. The choice feels hard because the picture is incomplete." },
  tug:   { name: "Tug",   blurb: "Both options protect something you care about. The choice feels hard because two good things pull in different directions." },
  dread: { name: "Dread", blurb: "You can mostly see the options. The choice feels hard because you're afraid of wishing you'd chosen the other one." }
};

const CARDS = [
  // FOG
  { t:"fog", title:"The Missing Fact", q:"What one fact would make this obviously easier?",
    why:"Many dilemmas are really information gaps wearing a costume.",
    ex:"Write the fact. Then name one person or source that could reveal it within 3 days." },
  { t:"fog", title:"The Rumor Audit", q:"Which of my \"facts\" am I only assuming?",
    why:"We treat guesses as certainties, especially the ones that scare us.",
    ex:"List 5 beliefs behind this decision. Mark each Seen, Heard or Guessed. Circle the Guessed one carrying the most weight." },
  { t:"fog", title:"The Cheap Peek", locked:true },
  { t:"fog", title:"The Open-Tab Cost", locked:true },
  // TUG
  { t:"tug", title:"The Two Votes", q:"What is each option voting for?",
    why:"Every option protects a value. Naming it turns a fog of feelings into a clear trade-off.",
    ex:"Name each option's value in one word. Which one could you defend out loud to someone you respect?" },
  { t:"tug", title:"The Borrowed Voice", q:"Whose expectations are hiding inside my reasons?",
    why:"Some of your reasons were handed to you. They can feel like yours until you look closely.",
    ex:"Write the initials of the person behind each reason. Cross out the ones that aren't yours. Read what's left." },
  { t:"tug", title:"The Coin Tell", locked:true },
  { t:"tug", title:"The Third Door", locked:true },
  // DREAD
  { t:"dread", title:"The Regret Receipt", q:"If this goes badly, what exactly will I wish I'd done?",
    why:"Vague dread is bigger than a specific regret. Writing it out gives it edges.",
    ex:"Write one regret sentence per option. Label each Fixable, Survivable or Lasting." },
  { t:"dread", title:"The Fade Test", q:"When does this stop mattering?",
    why:"Adapted from the 10-10-10 rule popularized by Suzy Welch. Time changes what feels big.",
    ex:"For each option, finish: \"In 10 days… In 10 months… In 10 years…\". Underline the point where it fades." },
  { t:"dread", title:"The Rehearsed Worst", locked:true },
  { t:"dread", title:"The Door That Sticks", locked:true },
];

const QUIZ = [
  { q:"When you imagine choosing, what happens first?", a:[
    ["I realize I don't know something I need.", "fog"],
    ["I feel I'm giving up something I care about.", "tug"],
    ["I picture it going wrong and me wishing I'd picked the other.", "dread"] ] },
  { q:"What would help most right now?", a:[
    ["A key fact, or a small trial run.", "fog"],
    ["Knowing what matters most to me here.", "tug"],
    ["Knowing I could handle the downside.", "dread"] ] },
  { q:"Which sentence sounds most like you?", a:[
    ["\"If I just knew more, this would be easy.\"", "fog"],
    ["\"Both options are good, for different reasons.\"", "tug"],
    ["\"I can't stop replaying what could go wrong.\"", "dread"] ] }
];
