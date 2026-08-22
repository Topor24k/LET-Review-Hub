// Messages from Kayeen — shown after exam submission based on score range

export const KAYEEN_MESSAGES_LOW: string[] = [
  "Hey. This one didn''t go your way — that''s okay babe.",
  "I''m not worried about us over this. One result doesn''t change what we have.",
  "You don''t have to hold it together for me right now.",
  "I love you the same on your worst score as your best one.",
  "Bad days happen to people I still choose, every time.",
  "Let''s not make this bigger than it is. I''m still here.",
  "I trust you to work through this more than I need to fix it for you.",
  "Talk to me about it whenever you''re ready. I''m not going anywhere.",
  "You''re my person regardless of what that page says.",
  "This is a setback, not a referendum on us or on you.",
  "I know you''re harder on yourself than I''ll ever be.",
  "Nothing about this changes how I see you when I look at you.",
  "You don''t need to bounce back today. Just let me be in your corner.",
  "I''d rather sit in this with you than pretend it doesn''t sting.",
  "Rough one. I''m not going to dress it up — I''m just staying close.",
  "We can look at it together if you want. No lecture, just me and you.",
];

export const KAYEEN_MESSAGES_MID: string[] = [
  "This is closer to where you''re headed than where you started, and I notice that.",
  "You''re not there yet — and I''m not going anywhere in the meantime.",
  "I see the difference from last time, even if it''s small. I pay attention.",
  "This still counts. I don''t need it to be dramatic to be proud.",
  "You''re doing the unglamorous part, and I''m watching you do it.",
  "Not going to inflate it — but it''s a real step, and I''m glad to see it with you.",
  "You don''t need a big leap. I like this pace on you.",
  "I noticed the effort showing up before the number caught up.",
  "You''re closer to your ceiling than your floor, Langga.",
  "This is what ''getting there'' looks like from where I''m standing.",
  "You don''t have to feel proud yet — I just want you to know I see it.",
  "Still not where you want it, and I get why that''s frustrating.",
  "Keep the version of you that''s putting in this work. I''m fond of her.",
  "This is a middle chapter of ours, not the ending.",
  "I trust where this is going more than I care about today''s number.",
  "I''m in this pace with you, not just the finish line.",
];

export const KAYEEN_MESSAGES_HIGH: string[] = [
  "I''m proud of you. Plainly, no exaggeration, just true.",
  "This is the work you put in showing up on the page. I like watching that.",
  "You don''t need me to say this is good — but I''m saying it anyway.",
  "I noticed the effort before the result came in. This just confirms what I already thought.",
  "This is what you consistently showing up looks like, and I get a front-row seat to it.",
  "You earned this one. Not a reflex compliment — I mean it specifically.",
  "I''m glad you get to feel good about something you worked for, and I get to feel it with you.",
  "This is solid. Let''s actually sit with it before moving to the next thing.",
  "You closed the gap between effort and outcome. I know what that took.",
  "I respect how you got here more than the number itself.",
  "This is you proving something to yourself. I''m just lucky to witness it.",
  "Not surprised. Just genuinely glad, and a little smug that I get to love you.",
  "You didn''t need my validation to know this was good — but it''s yours anyway.",
  "This is the version of you that trusts the process. I''m keeping her.",
  "I see the consistency behind this, not just today''s result.",
  "Good. Actually good. Not ''good for you'' good — just good, and I''m here for it.",
];

export function getKayeenMessage(score: number, attemptSeed: number): string {
  let pool: string[];
  if (score <= 25) {
    pool = KAYEEN_MESSAGES_LOW;
  } else if (score <= 50) {
    pool = KAYEEN_MESSAGES_MID;
  } else {
    pool = KAYEEN_MESSAGES_HIGH;
  }
  const index = (score + attemptSeed) % pool.length;
  return pool[index];
}
