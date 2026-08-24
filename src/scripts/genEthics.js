import fs from "fs";

function q(id, topicRef, question, correctText, wrongTexts, explanation) {
  const allTexts = [
    { text: correctText, isCorrect: true },
    { text: wrongTexts[0], isCorrect: false },
    { text: wrongTexts[1], isCorrect: false },
    { text: wrongTexts[2], isCorrect: false }
  ];
  const keys = ['A', 'B', 'C', 'D'];
  const offset = id % 4;
  const rotated = [];
  for (let i = 0; i < 4; i++) {
    rotated.push(allTexts[(i + offset) % 4]);
  }
  let correctAnswer = 'A';
  const options = rotated.map((item, idx) => {
    const key = keys[idx];
    if (item.isCorrect) correctAnswer = key;
    return { key, text: item.text };
  });
  return { id, topicRef, question, options, correctAnswer, explanation };
}

const list = [];
const data = [
  ["Morality vs Law & Conventions", "A citizen shelters political refugees in defiance of an authoritarian ordinance mandating their immediate arrest. From an ethical standpoint, this demonstrates that:", "An act may be legally prohibited by positive law yet ethically justifiable under universal moral principles.", ["Civil statutes are the ultimate foundation and source of all moral truth.", "Etiquette and local social customs supersede fundamental human dignity.", "Moral obligations are strictly determined by state police power."], "Law and morality are distinct normative systems; positive law can be unjust, whereas morality is grounded in human dignity and universal principles."],
  ["Moral Dilemmas: Organizational Level", "A hospital administrator must choose between enforcing an austerity policy that cuts critical nursing staff or maintaining safe staffing at the risk of corporate insolvency. At what level is this dilemma situated?", "Organizational dilemma, as it involves institutional policies, operational mandates, and business survival.", ["Individual dilemma, as it only impacts the personal conscience of the hospital director.", "Structural dilemma, as it stems exclusively from international trade treaties.", "Pre-conventional dilemma, as it is determined strictly by physiological needs."], "Organizational dilemmas occur within institutions and corporate systems involving conflicting operational policies, economic viability, and ethical duties."],
  ["Cultural Relativism vs Moral Objectivism", "Cultural relativism asserts that moral rightness is solely defined by the prevailing norms of a specific society. Which of the following is the most substantial philosophical objection to this theory?", "It deprives society of any moral basis to condemn grave historical atrocities like slavery or apartheid in other cultures.", ["It assumes that physical nature is governed by immutable mathematical laws.", "It forces all individuals to adopt Western democratic governance frameworks.", "It eliminates the psychological distinction between conscious ego and the collective unconscious."], "If cultural relativism were strictly true, no culture could ever be objectively criticized for practices like torture, slavery, or genocide."],
  ["Kohlberg: Pre-Conventional", "A primary pupil refrains from taking a classmate's crayons exclusively out of fear of being scolded by the teacher. What stage of moral reasoning is this child demonstrating?", "Stage 1: Punishment and Obedience Orientation.", ["Stage 3: Good Boy / Nice Girl Interpersonal Conformity.", "Stage 4: Law and Order Social System Maintenance.", "Stage 5: Social Contract and Individual Rights Orientation."], "Stage 1 reasoning is governed purely by fear of physical punishment and obedience to power."],
  ["Kohlberg: Law and Order", "A civil servant refuses an improper expedited request from a close relative, explaining that rules must apply equally to all citizens to maintain social order. Which Kohlberg stage is illustrated?", "Stage 4: Social System and Conscience (Law and Order).", ["Stage 2: Individualism, Instrumental Purpose, and Exchange.", "Stage 6: Universal Ethical Principles.", "Stage 1: Punishment and Obedience Orientation."], "Stage 4 emphasizes duty, law, social order, and maintaining institutional integrity for the common good."]
];

for (let i = 0; i < data.length; i++) {
  list.push(q(i + 1, data[i][0], data[i][1], data[i][2], data[i][3], data[i][4]));
}

console.log(`Ethics batch check: ${list.length} questions.`);
