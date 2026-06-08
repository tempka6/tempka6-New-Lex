import { LegalGlossaryTerm } from '../types';

export const COMPREHENSIVE_GLOSSARY: LegalGlossaryTerm[] = [
  {
    term: "Audi Alteram Partem",
    origin: "Latin",
    category: "Latin Maxim",
    meaning: "Hear the other side. No person shall be condemned unheard. This is a fundamental principle of natural justice requiring that both parties be given a fair opportunity to present their case.",
    usage: "In Pakistani law, this principle is enshrined in Article 10-A (Right to Fair Trial) of the Constitution of Pakistan 1973. Any administrative or judicial decision taken without providing a fair hearing to the affected party is declared null and void.",
    example: "In Muhammad Bashir v. Station House Officer, Okara (2007 SCMR 539) and other landmark cases, Pakistani courts have repeatedly held that the right to a hearing is absolute and cannot be bypassed."
  },
  {
    term: "Res Judicata",
    origin: "Latin",
    category: "Latin Maxim",
    meaning: "A matter already judged. Once a court of competent jurisdiction has rendered a final judgment on the merits, the same parties cannot relitigate the same issue.",
    usage: "Codified under Section 11 of the Civil Procedure Code 1908 (CPC), preventing duplicate litigation and ensuring the finality of judicial decisions.",
    example: "If a civil lawsuit for land title has been resolved, a fresh suit on identical facts will be dismissed under this principle."
  },
  {
    term: "Stare Decisis",
    origin: "Latin",
    category: "Latin Maxim",
    meaning: "To stand by things decided. Courts should follow precedents set by higher courts and their own previous decisions to ensure consistency and predictability in the law.",
    usage: "In Pakistan, Supreme Court rulings are binding upon all courts (Article 189 of the Constitution), whereas High Court rulings bind those subordinate to them (Article 201).",
    example: "A Sessions Court is constitutionally bound to apply legal principles laid down in similar matters by the Supreme Court."
  },
  {
    term: "Ultra Vires",
    origin: "Latin",
    category: "Latin Maxim",
    meaning: "Beyond the powers. An act performed beyond the legal authority or power granted to a person, corporation, or government body.",
    usage: "Frequently used to challenge administrative policies, municipal laws, and regulations that exceed the parent statute's scope under Article 199.",
    example: "If a local council passes a regulation that is explicitly prohibited by its organizing Act, that regulation is declared ultra vires."
  },
  {
    term: "Habeas Corpus",
    origin: "Latin",
    category: "Constitutional",
    meaning: "You shall have the body. A writ requiring a person under arrest to be brought before a court, especially to secure the person's release unless lawful grounds for detention are shown.",
    usage: "Issued by High Courts under Article 199 of the Constitution to protect against illegal state or police custody.",
    example: "If a person is picked up without a registered FIR, their relatives can file a Habeas Corpus petition to force the police to produce them within 24 hours."
  },
  {
    term: "Suo Motu",
    origin: "Latin",
    category: "Constitutional",
    meaning: "On its own motion. When a court takes notice of a matter and initiates proceedings without any party filing a formal complaint or petition.",
    usage: "Traditionally exercised under Article 184(3) of the Constitution for public interest matters.",
    example: "The Chief Justice taking notice of public hospital medicine shortages due to human rights violations."
  },
  {
    term: "Mala Fide",
    origin: "Latin",
    category: "Latin Maxim",
    meaning: "In bad faith. Refers to actions taken with dishonest intent, malice, or ulterior motives rather than in good faith.",
    usage: "Serves as prominent grounds in administrative law for challenging biased executive orders, transfers, and illegal appointments.",
    example: "If a public engineer is transferred as direct political revenge rather than administrative need, it constitutes a mala fide action."
  },
  {
    term: "Prima Facie",
    origin: "Latin",
    category: "Evidence",
    meaning: "At first sight; on the face of it. Evidence that is sufficient to establish a fact unless rebutted or contradicted.",
    usage: "Critical for the grant of temporary injunctions under Order XXXIX CPC or during framing of charges in criminal trials.",
    example: "The plaintiff must establish a prima facie civil case showing direct ownership to obtain an interim stay order."
  },
  {
    term: "Ratio Decidendi",
    origin: "Latin",
    category: "Latin Maxim",
    meaning: "The reason for the decision. The legal principle or rule that forms the basis of a court's judgment and is binding as precedent.",
    usage: "This is the legally binding element of a precedent that subordinate courts are constitutionally forced to follow.",
    example: "The binding rule that honor killings cannot qualify as grave and sudden provocation under Section 302(c) PPC."
  },
  {
    term: "Obiter Dictum",
    origin: "Latin",
    category: "Latin Maxim",
    meaning: "A thing said in passing. Remarks or observations made by a judge that are not essential to the decision and do not form binding precedent, though they may be persuasive.",
    usage: "Highly persuasive in subordinate court arguments, though not strictly binding.",
    example: "General comments on judicial delays made by a Supreme Court judge while deciding a specific company dispute."
  },
  {
    term: "Writ of Mandamus",
    origin: "Latin",
    category: "Constitutional",
    meaning: "We command. A judicial order compelling a public authority or government official to perform a mandatory duty that they have failed or refused to perform.",
    usage: "Invoked under Article 199 to compel administrative entities to process lawful applications or issue certificates.",
    example: "Filing a petition to compel a university withholding results without cause to release the transcript."
  },
  {
    term: "Certiorari",
    origin: "Latin",
    category: "Constitutional",
    meaning: "To be made certain. A writ by which a higher court reviews the decision of a lower court or tribunal to determine whether it acted within its jurisdiction and followed proper procedure.",
    usage: "Primary mechanism under Article 199 to correct jurisdictional errors of rent boards, labor courts, or taxation tribunals.",
    example: "Quashing a taxation penalty passed by an officer without giving proper statutory notice."
  },
  {
    term: "Qanun-e-Shahadat",
    origin: "Urdu/Arabic",
    category: "Evidence",
    meaning: "The Law of Evidence. Pakistan's primary statute governing the admissibility, relevance, and weight of evidence in legal proceedings, replacing the Indian Evidence Act 1872.",
    usage: "The Qanun-e-Shahadat Order 1984 (QSO) regulates all evidence matters across both civil and criminal litigation.",
    example: "Determining whether electronic chat logs, WhatsApp voice notes, and CCTV footage are admissible under Article 164 QSO."
  },
  {
    term: "Diyat",
    origin: "Arabic/Islamic",
    category: "Islamic Law",
    meaning: "Blood money. Compensation paid to the victim or heirs of the victim in cases of murder or bodily injury, as an alternative to retributive punishment (Qisas).",
    usage: "Codified in Section 323 of the Pakistan Penal Code. The minimum rate is set annually by the government based on silver prices.",
    example: "If the heirs of the deceased agree to pardon the offender under Section 309 PPC in exchange for a mutually settled financial sum."
  },
  {
    term: "Qisas",
    origin: "Arabic/Islamic",
    category: "Islamic Law",
    meaning: "Retribution or retaliation. The principle of equal punishment — an eye for an eye — applied in cases of intentional murder or bodily harm under Islamic criminal law as codified in Pakistan.",
    usage: "Codified under section 302(a) PPC. Subject to strict Islamic evidence standards and can be pardoned by the victim's heirs.",
    example: "The execution of capital punishment in cases of heinous, premeditated crimes of murder under Islamic standards."
  },
  {
    term: "Hadd",
    origin: "Arabic/Islamic",
    category: "Islamic Law",
    meaning: "Fixed punishment prescribed by the Quran and Sunnah for specific offenses. Plural: Hudood. These are mandatory penalties that cannot be reduced, pardoned by the victim, or altered by the judge.",
    usage: "Applies to specific crimes like zina, theft (sarqah), and alcohol consumption when strict evidentiary standards are met under the Hudood Ordinances.",
    example: "Amputations or fixed stoning penalties, which are rarely applied in practice due to the extremely high burden of eyewitness proof."
  },
  {
    term: "Tazir",
    origin: "Arabic/Islamic",
    category: "Islamic Law",
    meaning: "Discretionary punishment. Penalties left to the discretion of the judge, applied when the strict evidentiary requirements for hadd punishment are not met, or for offenses not covered by hadd.",
    usage: "Covers the vast majority of offenses inside the Pakistan Penal Code 1860.",
    example: "Sentencing a thief to 3 years imprisonment under PPC tazir provisions due to lack of the specific Hadd eyewitness requirement."
  },
  {
    term: "Mahr",
    origin: "Arabic/Islamic",
    category: "Family Law",
    meaning: "Dower. A mandatory payment or gift from the husband to the wife at the time of marriage or deferred to a later date. It is the wife's exclusive right and a fundamental condition of a valid Muslim marriage.",
    usage: "An essential condition of the Nikah contract. Can be prompt (payable on demand) or deferred (payable upon divorce or death).",
    example: "If the Nikah Nama states PKR 200,000 as prompt Mehr, the wife holds the absolute legal right to demand its payment at any time."
  },
  {
    term: "Iddat",
    origin: "Arabic/Islamic",
    category: "Family Law",
    meaning: "Waiting period. The period a Muslim woman must observe after the dissolution of her marriage (by divorce or death of husband) before she can remarry.",
    usage: "Section 7 of the Muslim Family Laws Ordinance 1961 is aligned with the typical 90-day reconciliation and Iddat periods.",
    example: "A divorced woman cannot legally enter into another marriage contract until 90 days have expired from the Union Council notice."
  },
  {
    term: "Khula",
    origin: "Arabic/Islamic",
    category: "Family Law",
    meaning: "Release or redemption. A form of divorce initiated by the wife in which she returns part or all of her Mahr (dower) in exchange for dissolution of the marriage.",
    usage: "Governed under Section 2(viii) of the Dissolution of Muslim Marriages Act 1939 and judicial interpretation. The family court must decree Khula if the wife declares she cannot live within the limits of Allah.",
    example: "The landmark ruling Khurshid Bibi v. Muhammad Amin (PLD 1967 SC 97) establishing the wife's right to Khula without husband's consent."
  },
  {
    term: "Waqf",
    origin: "Arabic/Islamic",
    category: "Property Law",
    meaning: "Endowment. The permanent dedication of property for religious, charitable, or pious purposes under Islamic law. Once property is made Waqf, it cannot be sold, inherited, or gifted.",
    usage: "Waqf properties cease to be private inheritances and are governed by Provincial Auqaf departments.",
    example: "Dedicating a piece of land to permanently serve as a public graveyard or a public welfare dispensary."
  },
  {
    term: "Shura",
    origin: "Arabic/Islamic",
    category: "Constitutional",
    meaning: "Consultation. The principle of mutual consultation in governance, considered an essential element of Islamic democratic governance as enshrined in Pakistan's constitutional framework.",
    usage: "Reflected in parliamentary discussions and consultative processes required for constitutional drafting.",
    example: "The collaborative process of legal review through cabinet committees and parliamentary standing committees."
  },
  {
    term: "Injunction",
    origin: "English",
    category: "Civil Law",
    meaning: "A court order requiring a party to do or refrain from doing a specific act. Injunctions can be temporary (interim/ad interim), temporary with conditions, or permanent.",
    usage: "Governed by the Specific Relief Act 1877 (Sections 52-57) and the Civil Procedure Code 1908 (Order 39 Rules 1-2).",
    example: "A stay order preventing the demolition of a building until the main title suit is adjudicated."
  },
  {
    term: "Locus Standi",
    origin: "Latin",
    category: "Latin Maxim",
    meaning: "Place of standing. The right or capacity to bring an action or appear in court. A party must show sufficient connection to or harm from the law or action challenged.",
    usage: "A key threshold in writ petitions under Article 199. Relaxed in public interest litigation under Article 184(3) of the Constitution.",
    example: "A neighbor has locus standi to contest adjacent illegal commercial construction that direct blocks their street access."
  },
  {
    term: "De Novo",
    origin: "Latin",
    category: "Latin Maxim",
    meaning: "Anew; from the beginning. A trial de novo means a completely new trial, as if no previous trial had been held.",
    usage: "Ordered by appellate courts in situations where severe procedural irregularities occurred in the original trial.",
    example: "An appellate judge remanding an embezzlement case to the trial court with instructions to hold a de novo hearing under new evidence."
  },
  {
    term: "Nemo Judex in Causa Sua",
    origin: "Latin",
    category: "Latin Maxim",
    meaning: "No one should be a judge in their own cause. A fundamental principle of natural justice requiring that a decision-maker must be impartial and must not have any personal interest in the outcome.",
    usage: "Applied continuously to recuse judges, referees, or administrative officers who hold direct financial or familial links to litigants.",
    example: "A High Court judge recusing themselves from a case where one of the main shareholders of the disputing corporation is an immediate family member."
  },
  {
    term: "Caveat Emptor",
    origin: "Latin",
    category: "Latin Maxim",
    meaning: "Let the buyer beware. The principle that a buyer is responsible for examining goods before purchase and takes the risk of quality or condition unless protected by warranty.",
    usage: "Governed under the Sale of Goods Act 1930. The seller is not bound to point out general minor defects unless actively asked.",
    example: "Purchasing land requires the buyer's counsel to check registration records directly instead of accepting verbal guarantees."
  },
  {
    term: "Mens Rea",
    origin: "Latin",
    category: "Criminal Law",
    meaning: "Guilty mind. The mental element or criminal intent required to establish criminal liability. Most criminal offenses require proof of both the guilty act (actus reus) and the guilty mind.",
    usage: "Applied in criminal trials under the Pakistan Penal Code 1860 to distinguish accidental outcomes from intentional offenses.",
    example: "In a murder case under Section 302 PPC, the prosecution must show the accused held active malice and intended to cause death."
  },
  {
    term: "Actus Reus",
    origin: "Latin",
    category: "Criminal Law",
    meaning: "Guilty act. The physical element or external component of a crime — the actual prohibited conduct, omission, or state of affairs that constitutes the offense.",
    usage: "Coupled with Mens Rea to complete criminal culpability in penal prosecution.",
    example: "The physical act of firing a weapon that results in bodily injury corresponds to the actus reus of a non-fatal assault."
  },
  {
    term: "Bail",
    origin: "English/Common Law",
    category: "Criminal Law",
    meaning: "The temporary release of an accused person awaiting trial, sometimes on condition that a sum of money is lodged as security to guarantee their appearance in court.",
    usage: "Governed under Sections 496, 497, and 498 of the Code of Criminal Procedure 1898. Categorized into bailable and non-bailable cases.",
    example: "An accused securing post-arrest bail in a property theft dispute because the litigation requires further inquiry under Section 497(2) CrPC."
  },
  {
    term: "FIR (First Information Report)",
    origin: "Pakistani/Common Law",
    category: "Criminal Law",
    meaning: "The formal document recording the first information about a cognizable offense received by the police. It sets the criminal law machinery into motion.",
    usage: "Drafted under Section 154 of the Code of Criminal Procedure 1898. Essential for commencing investigation.",
    example: "Filing an FIR in a local police station immediately following a robbery to document crime details."
  },
  {
    term: "Amicus Curiae",
    origin: "Latin",
    category: "Latin Maxim",
    meaning: "Friend of the court. A person or organization that is not a party to the case but is permitted by the court to advise on a point of law or fact, typically in matters of public interest.",
    usage: "Appointed by appellate courts and High Courts to deliver specialized neutral legal research on complex policy matters.",
    example: "The Supreme Court appointing a senior legal scholar as amicus curiae to provide an expert opinion on reproductive health laws."
  },
  {
    term: "Contempt of Court",
    origin: "English/Common Law",
    category: "Procedural",
    meaning: "Any act of disobedience, defiance, or disrespect toward the court or its officers that obstructs the administration of justice.",
    usage: "Governed by the Contempt of Court Act and constitutional provisions enabling courts to punish disobedience.",
    example: "An administrative official refusing to implement a clear High Court directive can be prosecuted for contempt of court."
  },
  {
    term: "Estoppel",
    origin: "English/Common Law",
    category: "Civil Law",
    meaning: "A legal principle that prevents a person from asserting a claim or right that contradicts what they have previously said, done, or agreed to, if another party has relied on those actions to their detriment.",
    usage: "Enacted under Article 114 of the Qanun-e-Shahadat Order 1984, representing a vital bar on shifting civil postures.",
    example: "If a landlord represents that rent is paid up, they cannot later claim eviction based on default for those exact months."
  },
  {
    term: "Doctrine of Necessity",
    origin: "Constitutional",
    category: "Constitutional",
    meaning: "A constitutional doctrine under which extra-constitutional actions may be validated if they were necessary to avoid greater harm or to preserve the state when no other lawful alternative was available.",
    usage: "Historically used in Pakistan's constitutional jurisprudence to justify martial law regimes, though currently highly disfavored.",
    example: "The historic Begum Nusrat Bhutto v. Chief of Army Staff case (PLD 1977 SC 657) applied this doctrine, which was later rejected in modern decisions."
  },
  {
    term: "Suo Motu (Article 184(3))",
    origin: "Constitutional",
    category: "Constitutional",
    meaning: "The original jurisdiction of the Supreme Court of Pakistan to take up matters of public importance involving enforcement of Fundamental Rights, without requiring a formal petition.",
    usage: "Governed under Article 184(3) of the Constitution of Pakistan 1973.",
    example: "The Court taking notice of mass human rights violations in coal mining centers without a direct petition."
  },
  {
    term: "Proclamation and Attachment",
    origin: "Procedural",
    category: "Procedural",
    meaning: "A legal process for dealing with absconders. When an accused person cannot be found, the court issues a proclamation requiring appearance, followed by attachment (seizure) of their property if they fail to appear.",
    usage: "Administered under Sections 87 and 88 of the Code of Criminal Procedure 1898.",
    example: "Attaching the agricultural lands of a murder suspect who absconds and refuses to appear in front of the sessions court after multiple summons."
  },
  {
    term: "Writ of Prohibition",
    origin: "Latin/Constitutional",
    category: "Constitutional",
    meaning: "A writ issued by a higher court directing a lower court or tribunal to cease proceedings in a case where it has no jurisdiction or is exceeding its jurisdiction.",
    usage: "Available through Article 199 of the Constitution of Pakistan 1973 before provincial High Courts.",
    example: "A High Court issuing a prohibition writ to stand down an industrial tribunal attempting to arbitrate a commercial banking contract."
  },
  {
    term: "Tort",
    origin: "English/Common Law",
    category: "Civil Law",
    meaning: "A civil wrong, other than breach of contract, that causes harm or loss to another person and for which the law provides a remedy, typically in the form of damages.",
    usage: "Governed under uncodified common law and specific legislation like the Defamation Act.",
    example: "Suing an industrial factory under the tort of nuisance due to toxic steam escaping into adjoining residential units."
  },
  {
    term: "Nikah Nama",
    origin: "Urdu/Arabic",
    category: "Family Law",
    meaning: "Marriage contract/deed. The written document recording the terms and conditions of a Muslim marriage, including Mahr, conditions of divorce, and rights of the parties.",
    usage: "Governed by the Muslim Family Laws Ordinance 1961. It contains standard numbered clauses.",
    example: "Registering the Nikah Nama with local registrar bodies showing the clear financial terms of dower."
  },
  {
    term: "Talaq",
    origin: "Arabic/Islamic",
    category: "Family Law",
    meaning: "Divorce pronounced by the husband. The unilateral right of a Muslim husband to dissolve the marriage by pronouncing talaq.",
    usage: "Regulated under Section 7 of the Muslim Family Laws Ordinance 1961, requiring mandatory notice to the Union Council.",
    example: "Sending a written notice of talaq to the Union Council chairman to commence the 90-day arbitration timeline."
  },
  {
    term: "Void Ab Initio",
    origin: "Latin",
    category: "Latin Maxim",
    meaning: "Void from the beginning. An act, contract, or legal proceeding that is null and without legal effect from its inception, as if it never existed.",
    usage: "Applied strictly to illegal transactions, actions beyond statutory bounds, or constitutional violations.",
    example: "A marriage contract executed with an underage child is void ab initio under current child marriage prevention rules."
  },
  {
    term: "Force Majeure",
    origin: "French",
    category: "Civil Law",
    meaning: "Superior force. An unforeseeable and irresistible event beyond the control of the parties that prevents them from fulfilling contractual obligations.",
    usage: "Interpreted under Section 56 of the Contract Act 1872 regarding the frustration of contracts.",
    example: "A shipping contract halted indefinitely due to sudden navy blockades in international waters."
  },
  {
    term: "Writ of Quo Warranto",
    origin: "Latin/Constitutional",
    category: "Constitutional",
    meaning: "By what authority. A writ requiring a person to show by what authority they hold a public office. It is used to challenge illegal appointments or usurpation of public office.",
    usage: "Invoked under Article 199(1)(b)(ii) of the Constitution before High Courts.",
    example: "Challenging an official occupying a state corporate presidency without meeting the minimum age requirement."
  },
  {
    term: "Promissory Estoppel",
    origin: "English/Common Law",
    category: "Civil Law",
    meaning: "A principle preventing a party from withdrawing a promise made to another party if that party has relied on the promise and would suffer detriment if the promise is withdrawn.",
    usage: "Applied extensively in commercial disputes against both public entities and private parties.",
    example: "A company starting construction based on a government written promise of tax exemption can invoke this against sudden reversals."
  },
  {
    term: "Ex Parte",
    origin: "Latin",
    category: "Procedural",
    meaning: "From one side only. Legal proceedings conducted with only one party present, in the absence of the other party who has been given notice but failed to appear.",
    usage: "Governed by Order IX of the Civil Procedure Code 1908 (CPC).",
    example: "The court passing an ex parte decree in favor of the plaintiff after the defendant repeatedly fails to respond to summons."
  },
  {
    term: "Precedent",
    origin: "English/Common Law",
    category: "Latin Maxim",
    meaning: "A judicial decision that serves as an authority for deciding subsequent cases involving similar facts or legal issues. It is the foundation of the common law system.",
    usage: "Reflected in Article 189 of the Constitution ensuring Supreme Court rulings bind all sub-courts.",
    example: "Citing a detailed 2021 Supreme Court ruling on procedural bail parameters to secure a magistrate's concession."
  },
  {
    term: "Preemption (Shuf'a)",
    origin: "Islamic/Pakistani",
    category: "Property Law",
    meaning: "The right of a person to purchase property by preference over other buyers, arising from proximity as a neighbor, sharer, or participant in rights of way.",
    usage: "Governed by provincial pre-emption acts, requiring rapid formal demands (Talabs) as a procedural condition.",
    example: "A joint property co-sharer exercising their preemption right to halt home sales to an outside third party."
  },
  {
    term: "Benami",
    origin: "Urdu/Hindi",
    category: "Property Law",
    meaning: "Without name; fictitious. A transaction in which property is purchased in the name of one person (benamidar) but paid for by another (real owner) for the purpose of concealment.",
    usage: "Strictly banned and prosecuted under the Benami Transactions (Prohibition) Act 2017.",
    example: "An offshore executive registering commercial real estate under their driver's name is prosecuted under Benami rules."
  },
  {
    term: "Cy-près Doctrine",
    origin: "French/English",
    category: "Civil Law",
    meaning: "As near as possible. A doctrine applied when a charitable trust's original purpose cannot be fulfilled, allowing the court to redirect the trust's assets to a similar charitable purpose.",
    usage: "Commonly applied by trust regulators and civil courts during charitable trust closures.",
    example: "A trust fund initialized to cure an extinct minor disease is legally redirected by the court to general cancer research."
  },
  {
    term: "Specific Performance",
    origin: "English/Common Law",
    category: "Civil Law",
    meaning: "An equitable remedy compelling a party to perform their contractual obligations as agreed, rather than merely paying damages for breach.",
    usage: "Administered under the Specific Relief Act 1877 (primarily Sections 12 and 21).",
    example: "Forcing a property seller to deliver the exact parcel of land rather than returning money plus minor breach compensatory damages."
  },
  {
    term: "Pari Passu",
    origin: "Latin",
    category: "Latin Maxim",
    meaning: "On equal footing; with equal step. The principle that all creditors or parties should be treated equally and proportionally without preference.",
    usage: "Governed by the Companies Act 2017 during corporate liquidations and payouts.",
    example: "Creditors of equal preference levels ranking pari passu for payouts from remaining liquid assets during corporate bankruptcy."
  },
  {
    term: "Limitation",
    origin: "English/Common Law",
    category: "Procedural",
    meaning: "The legally prescribed time period within which a legal action must be brought. After the limitation period expires, the right to bring the action is barred.",
    usage: "Governed primarily by the Limitation Act 1908.",
    example: "A suit for debt recovery must be launched within 3 years or face automatic dismissal under Section 3 of the Limitation Act."
  },
  {
    term: "Fiduciary Duty",
    origin: "English/Common Law",
    category: "Civil Law",
    meaning: "The legal obligation of one party to act in the best interest of another, arising from a relationship of trust and confidence.",
    usage: "Applied continuously to corporate directors, estate trustees, and legal advisors.",
    example: "A corporate director breaching their fiduciary duty by purchasing real estate using private internal corporate knowledge."
  },
  {
    term: "Doctrine of Colourable Legislation",
    origin: "Constitutional",
    category: "Constitutional",
    meaning: "A principle preventing the legislature from doing indirectly what it cannot do directly. If a law appears to be within legislative competence but is in substance on a matter outside that competence, it is colourable legislation and void.",
    usage: "Applied by the Federal Constitutional Court during tests of federal vs. provincial legislative domains.",
    example: "A provincial legislature imposing a heavy 'security parking fee' that functions in substance as a federal income tax."
  },
  {
    term: "Delegatus Non Potest Delegare",
    origin: "Latin",
    category: "Latin Maxim",
    meaning: "A delegate cannot further delegate. A person to whom powers have been delegated cannot sub-delegate those powers to another, unless expressly authorized to do so.",
    usage: "Mainstay of administrative law, regulating how municipal commissioners or ministers exercise legal discretion.",
    example: "The chairman of an environmental board cannot unilaterally delegate their final review powers to a junior administrative intern."
  },
  {
    term: "Lis Pendens",
    origin: "Latin",
    category: "Property Law",
    meaning: "Pending litigation. The principle that during the pendency of a suit concerning property, any transfer or dealing with that property is subject to the outcome of the suit.",
    usage: "Enacted under Section 52 of the Transfer of Property Act 1882.",
    example: "If a party buys land during an active title dispute, their purchase remains subject to the final decree."
  },
  {
    term: "Volenti Non Fit Injuria",
    origin: "Latin",
    category: "Latin Maxim",
    meaning: "To one who is willing, no injury is done. A person who voluntarily assumes the risk of a known danger cannot later sue for injuries sustained as a result.",
    usage: "Commonly cited in civil tort litigation to defend claims centering on leisure, transport, or sporting risks.",
    example: "A spectator hit by a sports ball during a stadium match cannot sue the team if adequate safety nets were in place."
  },
  {
    term: "Res Ipsa Loquitur",
    origin: "Latin",
    category: "Evidence",
    meaning: "The thing speaks for itself. A doctrine of evidence whereby the mere occurrence of an accident implies negligence on the part of the defendant, shifting the burden of proof.",
    usage: "Primary mechanism used in consumer and medical liability lawsuits where direct paper evidence is unavailable.",
    example: "A surgical tool left inside a patient's abdomen is a classic illustration of res ipsa loquitur."
  },
  {
    term: "Sub Judice",
    origin: "Latin",
    category: "Procedural",
    meaning: "Under judgment; under consideration by a court. A matter that is currently before a court and awaiting decision.",
    usage: "Prevents public media or administrative figures from publishing prejudicial speculations that might affect the judicial outcome.",
    example: "A news outlet refraining from declaring a suspect guilty in active trials since the facts remain sub judice."
  },
  {
    term: "Ipso Facto",
    origin: "Latin",
    category: "Latin Maxim",
    meaning: "By the fact itself. Something that occurs as a direct and inevitable consequence of an act or fact, without requiring further legal proceedings.",
    usage: "Used inside statutory drafts or private corporate agreements defining automatic breaches.",
    example: "A partner declaring bankruptcy terminates the general partnership ipso facto under standard commercial drafts."
  },
  {
    term: "Functus Officio",
    origin: "Latin",
    category: "Latin Maxim",
    meaning: "Having performed one's office. A court or tribunal that has made a final decision on a matter has exhausted its authority and cannot revisit or alter its decision.",
    usage: "Restrains administrative authorities or arbitrators from rewriting their legal decisions once published.",
    example: "An arbitrator cannot alter their final award after it is filed and signed except for minor clerical typos."
  },
  {
    term: "Interlocutory Order",
    origin: "English/Common Law",
    category: "Procedural",
    meaning: "An order made during the course of proceedings that does not finally determine the rights of the parties. It is temporary or provisional in nature.",
    usage: "Includes temporary injunctions, receiver appointments, or cost orders under the CPC.",
    example: "An order by the civil judge appointing a local commissioner to partition land is an interlocutory order."
  },
  {
    term: "Wakalat Nama",
    origin: "Urdu/Arabic",
    category: "Procedural",
    meaning: "Power of attorney for legal representation. The document authorizing an advocate to appear and act on behalf of a party in legal proceedings.",
    usage: "Required under the Civil Procedure Code 1908 (Order III) and criminal rules before any filing.",
    example: "Signing a formal Wakalat Nama enabling a registered high court advocate to file a dynamic appellate writ."
  },
  {
    term: "Jirga / Panchayat",
    origin: "Pashto/Urdu",
    category: "Procedural",
    meaning: "Traditional dispute resolution councils. Jirga (in Pashtun areas) and Panchayat (in Punjab/Sindh) are informal community-based bodies that resolve disputes through mediation and consensus.",
    usage: "Regulated and integrated under the Alternative Dispute Resolution (ADR) Act 2017 to handle minor civil/family issues.",
    example: "A local Panchayat resolving a minor neighborhood pathway boundary issue using community mediation records."
  },
  {
    term: "Maintenance (Nafaqah)",
    origin: "Islamic/Urdu",
    category: "Family Law",
    meaning: "Financial support that a husband is legally obligated to provide to his wife and children. Under Islamic law, maintenance includes food, clothing, shelter, and medical expenses.",
    usage: "Enforced by family courts under Section 9 of the Muslim Family Laws Ordinance 1961.",
    example: "A family court ordering a father to pay PKR 15,000 monthly maintenance for his school-going children."
  },
  {
    term: "Fasakh",
    origin: "Arabic/Islamic",
    category: "Family Law",
    meaning: "Judicial dissolution of marriage. Annulment of a Muslim marriage by the court on grounds specified in law, at the request of the wife.",
    usage: "Administered under the Dissolution of Muslim Marriages Act 1939, enabling wives to seek divorces for non-provision of maintenance or cruelty.",
    example: "The wife seeking Fasakh on the grounds that the husband's location has remained unknown for over 4 continuous years."
  },
  {
    term: "Damnum Sine Injuria",
    origin: "Latin",
    category: "Latin Maxim",
    meaning: "Damage without legal wrong. A situation where a person suffers actual loss or harm but has no legal remedy because no legal right has been violated.",
    usage: "Fundamental civil tort rule determining whether a lawsuit holds a valid cause of action.",
    example: "A business rival opening an identical clothing shop next door causing local sales to drop constitutes damnum sine injuria."
  },
  {
    term: "Injuria Sine Damno",
    origin: "Latin",
    category: "Latin Maxim",
    meaning: "Legal wrong without actual damage. A violation of a legal right even where no actual damage or loss has occurred. The law provides a remedy because the right itself has been violated.",
    usage: "Enables nominal damages in trespass, libel, or constitutional rights violations.",
    example: "An officer illegally blocking a citizen from casting their voter ballot is injuria sine damno."
  },
  {
    term: "Jurisprudence (Fiqh)",
    origin: "Islamic/Arabic",
    category: "Islamic Law",
    meaning: "Islamic jurisprudence. The science of deriving and applying Islamic law from its primary sources — the Quran, Sunnah, Ijma (consensus), and Qiyas (analogical reasoning).",
    usage: "Used by the Federal Shariat Court to test potential statutory repugnancy under Islamic injunctions.",
    example: "The court reviewing modern business contracts and banking models using Islamic Fiqh declarations."
  },
  {
    term: "Suo Motu Power of High Courts",
    origin: "Constitutional",
    category: "Constitutional",
    meaning: "The inherent power of High Courts to take notice of matters involving violation of fundamental rights within their territorial jurisdiction, without requiring a formal petition.",
    usage: "Exercised under Article 199 as a fundamental constitutional prerogative.",
    example: "A High Court initiating direct proceedings into toxic waste spillages in provincial industrial neighborhoods."
  },
  {
    term: "Doctrine of Basic Structure",
    origin: "Constitutional",
    category: "Constitutional",
    meaning: "A constitutional doctrine holding that certain fundamental features of the Constitution cannot be amended or altered by the legislature, as they form its essential identity.",
    usage: "Reviewed heavily inside Pakistani Supreme Court benches regarding judicial independence and basic parliamentary rights.",
    example: "Litigators arguing that any amendment abolishing democratic elections is void as a violation of basic structure."
  },
  {
    term: "Malicious Prosecution",
    origin: "English/Common Law",
    category: "Criminal Law",
    meaning: "The institution of criminal proceedings against another person without reasonable and probable cause, with malice, resulting in the proceedings terminating in favor of the accused.",
    usage: "Enables civil lawsuits for damages and compensation under the Law of Torts.",
    example: "Suing a former employer for damages after they filed a falsified theft FIR that was dismissed by the court."
  },
  {
    term: "Plea Bargain",
    origin: "English/Common Law",
    category: "Criminal Law",
    meaning: "An agreement between the prosecution and the accused where the accused pleads guilty to a lesser charge or receives a reduced sentence in exchange for cooperation.",
    usage: "Governed and regulated under Section 25-B of the National Accountability Ordinance 1999.",
    example: "A company director returning embezzled public funds under a plea bargain to avoid active imprisonment."
  },
  {
    term: "Cognizable Offense",
    origin: "Criminal Law/Indian Subcontinent",
    category: "Criminal Law",
    meaning: "An offense in which the police can arrest without a warrant and begin investigation without the permission of a magistrate.",
    usage: "Defined in Section 4(1)(f) of the Code of Criminal Procedure 1898. Includes murder, dacoity, and severe assault.",
    example: "Police authorities arresting an armed assault suspect immediately without awaiting a magistrate's physical warrant."
  },
  {
    term: "Nemo Debet Bis Vexari",
    origin: "Latin",
    category: "Latin Maxim",
    meaning: "No one should be vexed twice for the same cause. The principle against double jeopardy — no person shall be prosecuted or punished twice for the same offense.",
    usage: "Enshrined in Article 13 of the Constitution and Section 403 of the CrPC.",
    example: "Acquitting a defendant of a specific fraud charge bars any subsequent trial on identical police statements."
  },
  {
    term: "Adverse Possession",
    origin: "English/Common Law",
    category: "Property Law",
    meaning: "The acquisition of title to property by continuous, open, hostile, and uninterrupted possession for the statutory period prescribed by law, without the true owner's consent.",
    usage: "Enforced under the Limitation Act 1908 (prescriptive period of 12 years for private land holds).",
    example: "An occupant managing agricultural fields openly for over 15 years without paying rent can contest title against passive owners."
  },
  {
    term: "Habitual Offender",
    origin: "Criminal Law",
    category: "Criminal Law",
    meaning: "A person who has been convicted of criminal offenses on multiple occasions, demonstrating a pattern of criminal behavior. Enhanced penalties may apply to habitual offenders.",
    usage: "Governed by the CrPC and provincial tracking statutes enabling specialized police monitoring.",
    example: "A judge imposing maximum statutory prison terms for a theft citation due to the convict's prior multiple convictions."
  },
  {
    term: "Right of Pre-emption (Haq-e-Shuf'a)",
    origin: "Islamic/Pakistani",
    category: "Property Law",
    meaning: "The preferential right of a co-sharer, adjoining owner, or person with a right of way to purchase immovable property being sold, in priority over other buyers.",
    usage: "Provincial acts regulate these demands, requiring procedural compliance of immediate notice (Talab-e-Muwathibat).",
    example: "Filing a pre-emption lawsuit to claim real estate purchased by a third party adjacent to the plaintiff's home."
  },
  {
    term: "Doctrine of Laches",
    origin: "English/Equity",
    category: "Civil Law",
    meaning: "Unreasonable delay in asserting a right or claim. A doctrine preventing a party from bringing a claim if they waited an unreasonably long time, causing prejudice to the other party.",
    usage: "Applied by High Courts to reject constitutional writ petitions filed multiple years after the executive action occurred.",
    example: "An employee challenging an illegal dismissal 8 years after the event is barred under the doctrine of laches."
  },
  {
    term: "Chattel",
    origin: "English/Common Law",
    category: "Property Law",
    meaning: "Personal or movable property as distinguished from real property (immovable property). Chattels include goods, animals, furniture, and other tangible movable objects.",
    usage: "Subject to the Sale of Goods Act 1930 and specific torts of conversion.",
    example: "Movable industrial tools, transport vehicles, and packaged wheat represent chattels."
  },
  {
    term: "Writ of Certiorari",
    origin: "Latin/Constitutional",
    category: "Constitutional",
    meaning: "A writ by which a superior court calls up the record of proceedings from an inferior court or tribunal to examine whether the decision was made within jurisdiction and in accordance with law.",
    usage: "Primary remedy under Article 199 to quash illegal rulings of tribunals.",
    example: "Quashing a taxation board fine because they failed to afford any administrative notice to the business owner."
  },
  {
    term: "Doctrine of Repugnancy",
    origin: "Constitutional",
    category: "Constitutional",
    meaning: "The principle that a provincial law is void to the extent it conflicts with a federal law on a concurrent legislative subject.",
    usage: "Reviewed by higher courts when assessing conflicting federal and provincial rules.",
    example: "A provincial environmental standard being declared void because it explicitly contradicts federal health codes."
  },
  {
    term: "Intra Vires",
    origin: "Latin",
    category: "Latin Maxim",
    meaning: "Within the powers. An act that is within the legal authority or power granted to a person, corporation, or government body — the opposite of ultra vires.",
    usage: "Applied to confirm the validity of administrative rules and orders.",
    example: "A regulatory body issuing transport safety notifications strictly within the parameters allowed by the parent Act."
  },
  {
    term: "Guardian Ad Litem",
    origin: "Latin/English",
    category: "Procedural",
    meaning: "A guardian appointed by the court to represent the interests of a minor or a person of unsound mind in legal proceedings.",
    usage: "Governed under Order XXXII of the Civil Procedure Code 1908 (CPC).",
    example: "Appointing a maternal aunt as guardian ad litem to represent a minor child in a land inheritance lawsuit."
  },
  {
    term: "Double Jeopardy",
    origin: "English/Constitutional",
    category: "Constitutional",
    meaning: "The constitutional prohibition against prosecuting or punishing a person twice for the same offense after they have been acquitted or convicted.",
    usage: "Protected heavily under Article 13 of the Constitution of Pakistan 1973.",
    example: "Stopping a new prosecution under a different section of law after the defendant was cleared of murder for the same incident."
  },
  {
    term: "Caveat",
    origin: "Latin",
    category: "Procedural",
    meaning: "Let the person beware. A formal notice filed by a party requesting the court not to pass any order in a matter without first notifying and hearing them.",
    usage: "Governed under Section 148-A of the Civil Procedure Code 1908 (CPC).",
    example: "An owner filing a caveat to ensure they are heard before a developer is granted any ex-parte stay order on construction."
  },
  {
    term: "Suo Motu Revision",
    origin: "Procedural",
    category: "Procedural",
    meaning: "The inherent power of a Sessions Court or High Court to call for and examine the record of a case decided by a subordinate court, on its own motion, to correct errors of jurisdiction or procedure.",
    usage: "Invoked under Section 439 of the Code of Criminal Procedure 1898.",
    example: "A High Court judge reviewing an extremely lenient sentencing for a heinous crime without any formal appeal from the prosecution."
  },
  {
    term: "Fasad-fil-Arz",
    origin: "Arabic/Islamic",
    category: "Criminal Law",
    meaning: "Spreading mischief on earth. A concept in Islamic criminal jurisprudence referring to acts that create disorder, chaos, or corruption in society.",
    usage: "Referenced inside the PPC to justify severe tazir penalties for heinous crimes like terrorism or mass robberies.",
    example: "The court declaring that acts of public building demolitions constitute Fasad-fil-Arz, enabling maximum sentencing."
  },
  {
    term: "Bonafide Purchaser",
    origin: "Latin/English",
    category: "Property Law",
    meaning: "A buyer who purchases property in good faith, for valuable consideration, and without notice of any defect in the seller's title.",
    usage: "Protected under Section 41 of the Transfer of Property Act 1882.",
    example: "Protecting a buyer who reviewed land registries and purchased real estate from the ostensible owner without any notice of hidden family deeds."
  },
  {
    term: "Onus Probandi",
    origin: "Latin",
    category: "Evidence",
    meaning: "The burden of proof. The obligation on a party to prove their case or a particular fact in issue.",
    usage: "Regulated comprehensively under Chapter VII of the Qanun-e-Shahadat Order 1984.",
    example: "In a criminal prosecution, the onus probandi is primarily on the state to prove the accused's guilt beyond reasonable doubt."
  },
  {
    term: "Decree",
    origin: "English/Common Law",
    category: "Procedural",
    meaning: "The formal expression of an adjudication by a court that conclusively determines the rights of the parties with regard to the matters in controversy.",
    usage: "Defined under Section 2(2) of the Civil Procedure Code 1908 (CPC).",
    example: "A civil court issuing a partition decree defining the exact shares of land ownership between heirs."
  },
  {
    term: "Muawin-e-Adalat",
    origin: "Urdu",
    category: "Procedural",
    meaning: "Assistant of the court. A person appointed to assist the court in legal proceedings, similar to a court commissioner or amicus curiae in specific procedural contexts.",
    usage: "Appointed by local magistrates or civil judges to survey a dispute on-site.",
    example: "The court appointing an engineer as Muawin-e-Adalat to inspect and report on building damage claims."
  },
  {
    term: "Ignorantia Juris Non Excusat",
    origin: "Latin",
    category: "Latin Maxim",
    meaning: "Ignorance of the law is no excuse. Every person is presumed to know the law, and no one can escape liability by claiming they were unaware of a legal prohibition.",
    usage: "Applied broadly in criminal and civil matters; you cannot defend theft by claiming to not know it is illegal.",
    example: "A trader importing banned items cannot claim they were unaware of custom regulations published in the official Gazette."
  },
  {
    term: "Nulla Poena Sine Lege",
    origin: "Latin",
    category: "Latin Maxim",
    meaning: "No punishment without law. No person can be punished for an act that was not defined as a criminal offense by law at the time it was committed.",
    usage: "Constitutional protection against retrospective punishment under Article 12 of the Constitution of Pakistan 1973.",
    example: "Striking down a penalty imposed on a citizen for digital activities that were not illegal when performed."
  },
  {
    term: "Ubi Jus Ibi Remedium",
    origin: "Latin",
    category: "Latin Maxim",
    meaning: "Where there is a right, there is a remedy. The law will always provide a remedy for the violation of a legal right.",
    usage: "The foundation of common law litigation and the exercise of original jurisdiction by High Courts.",
    example: "The court carving out specialized administrative directives to enforce public safety rights even if no specific statutory penalty exists."
  },
  {
    term: "Actio Personalis Moritur Cum Persona",
    origin: "Latin",
    category: "Latin Maxim",
    meaning: "A personal action dies with the person. Certain legal actions, particularly those of a purely personal nature, cannot be continued after the death of the party who held the right.",
    usage: "Applies to personal tort actions like libel, slander, or personal physical assaults.",
    example: "A suit for defamation is automatically dismissed upon the death of either the plaintiff or the defendant."
  },
  {
    term: "Salus Populi Suprema Lex",
    origin: "Latin",
    category: "Latin Maxim",
    meaning: "The welfare of the people is the supreme law. The safety and well-being of the public takes precedence over individual rights or technical legal rules.",
    usage: "Invoked in national emergencies, land acquisition, or public health lockdowns.",
    example: "Demolishing an unstable building during earthquakes to protect passing citizens represents salus populi supreme lex."
  },
  {
    term: "Expressio Unius Est Exclusio Alterius",
    origin: "Latin",
    category: "Latin Maxim",
    meaning: "The expression of one thing is the exclusion of another. When a law expressly mentions specific things, it impliedly excludes all other things not mentioned.",
    usage: "Applied when interpreting statutory sections or contract listings.",
    example: "If a tax code specifically exempts 'doctors and teachers,' it is interpreted as excluding engineers from that exemption."
  },
  {
    term: "Ejusdem Generis",
    origin: "Latin",
    category: "Latin Maxim",
    meaning: "Of the same kind or class. When general words follow specific words in a statute, the general words are limited to things of the same kind as the specific words.",
    usage: "Applied to restrict overly broad catch-all words in statutory drafts.",
    example: "In a law banning 'cars, trucks, motorcycles, and other vehicles,' the general words are restricted to land-based motorized vehicles."
  },
  {
    term: "Noscitur a Sociis",
    origin: "Latin",
    category: "Latin Maxim",
    meaning: "A word is known by the company it keeps. The meaning of an ambiguous word or term in a statute should be determined by reference to the surrounding words and context.",
    usage: "Used to determine legislative intent of vague or dual-use legal phrases.",
    example: "In a statute referring to 'mines, quarries, and other excavations,' the term 'excavation' is limited to extraction ventures."
  },
  {
    term: "Qui Facit Per Alium Facit Per Se",
    origin: "Latin",
    category: "Latin Maxim",
    meaning: "He who acts through another acts himself. A person who causes another to perform an act is legally responsible as if they had performed the act themselves.",
    usage: "The foundation of vicarious liability in both civil torts and agency contracts under the Contract Act 1872.",
    example: "A transport business owner is held liable for accident damages caused by their truck driver during deliveries."
  },
  {
    term: "De Minimis Non Curat Lex",
    origin: "Latin",
    category: "Latin Maxim",
    meaning: "The law does not concern itself with trifles. Courts will not adjudicate matters that are too insignificant or trivial to warrant judicial attention.",
    usage: "Used by civil and criminal judges to clear courts of extremely frivolous prosecutions.",
    example: "The court rejecting a lawsuit centering on the theft of a single sheet of paper or a tiny fraction of currency."
  },
  {
    term: "Ex Turpi Causa Non Oritur Actio",
    origin: "Latin",
    category: "Latin Maxim",
    meaning: "No action arises from a wrongful cause. A person cannot bring a legal action founded upon their own illegal or immoral act.",
    usage: "Commonly applied to dismiss civil lawsuits seeking enforcement of illegal drug contracts or shares of stolen gains.",
    example: "Reaffirming that partners who cooperate to run an unlicensed casino cannot sue each other for sharing profits."
  },
  {
    term: "Cessante Ratione Legis, Cessat Ipsa Lex",
    origin: "Latin",
    category: "Latin Maxim",
    meaning: "When the reason for the law ceases, the law itself ceases. A legal rule should no longer be applied when the underlying reason or purpose for its existence no longer exists.",
    usage: "Cited when arguing for the removal of outdated, historical colonial-era laws or procedural steps.",
    example: "A court relaxing physical attendance rules during public outbreaks when electronic video channels are fully operational."
  },
  {
    term: "Res Sub Judice",
    origin: "Latin",
    category: "Procedural",
    meaning: "A matter under judicial consideration. When a case is pending before a court, no other court of concurrent jurisdiction should try the same matter between the same parties.",
    usage: "Governed under Section 10 of the Civil Procedure Code 1908 (CPC).",
    example: "A judge staying a newly filed civil contract dispute because an identical lawsuit is already pending in Karachi courts."
  },
  {
    term: "Doli Incapax",
    origin: "Latin",
    category: "Criminal Law",
    meaning: "Incapable of wrongdoing. A legal presumption that children below a certain age are incapable of forming criminal intent and therefore cannot be held criminally liable.",
    usage: "Codified in Section 82 and 83 of the Pakistan Penal Code 1860, exempting young children.",
    example: "A child under 10 years of age is considered completely doli incapax and cannot be prosecuted for property theft."
  },
  {
    term: "Alibi",
    origin: "Latin",
    category: "Criminal Law",
    meaning: "Elsewhere. A defense in criminal law whereby the accused claims they were at a different location when the alleged offense was committed, making it impossible for them to have committed the crime.",
    usage: "Examined under the rules of the Qanun-e-Shahadat Order 1984 (Article 24).",
    example: "A suspect accused of a Karachi robbery providing biometric attendance logs proving they were working in Lahore during that hour."
  },
  {
    term: "Bona Vacantia",
    origin: "Latin",
    category: "Property Law",
    meaning: "Ownerless goods. Property that has no identifiable owner, which by law passes to the Crown or the state.",
    usage: "Applied to real estate of citizens dying completely intestate without heirs, or accounts of collapsed companies.",
    example: "A dormant bank account of an extinct non-profit transitioning legally to the state treasury after statutory timeframes limit claims."
  },
  {
    term: "Contra Proferentem",
    origin: "Latin",
    category: "Latin Maxim",
    meaning: "Against the drafter. An ambiguous term in a contract or legal document is to be interpreted against the party who drafted or inserted it.",
    usage: "Applied extensively to insurance agreements or boilerplate standard corporate contracts.",
    example: "If an insurance clause on water damage is vague, courts will interpret it in favor of the consumer rather than the insurance company."
  },
  {
    term: "In Pari Delicto",
    origin: "Latin",
    category: "Latin Maxim",
    meaning: "In equal fault. When both parties to a dispute are equally at fault, neither can seek relief against the other.",
    usage: "Prevents courts from assisting parties who willingly participated inside unlawful deals.",
    example: "A court refusing to order the refund of money paid to a middleman as a direct bribe to bypass recruitment rules."
  },
  {
    term: "Restitutio in Integrum",
    origin: "Latin",
    category: "Latin Maxim",
    meaning: "Restoration to the original condition. The principle of restoring a party to the position they were in before a wrongful act or a contract was entered into.",
    usage: "Mainstay of contract breaches under Section 64 & 65 of the Contract Act and tort law damages assessments.",
    example: "Directing a fraudulent car seller to return all funds and accepting the vehicle back to restore initial status."
  },
  {
    term: "Sic Utere Tuo Ut Alienum Non Laedas",
    origin: "Latin",
    category: "Latin Maxim",
    meaning: "Use your property in such a way that you do not injure another's. The obligation to use one's own property without causing harm or nuisance to others.",
    usage: "Fundamental rule in trespass, physical nuisance, and urban development codes.",
    example: "Blocking a home developer from starting loud, heavy industrial cement grinding machines inside narrow residential districts."
  },
  {
    term: "Lex Loci",
    origin: "Latin",
    category: "Latin Maxim",
    meaning: "The law of the place. The principle that the law of the jurisdiction where an act occurred or a contract was made governs the legal consequences of that act or contract.",
    usage: "Applied during international business litigations and cross-border commercial transactions.",
    example: "A contract executed and performed in Lahore is interpreted under the laws of Punjab and Pakistan."
  },
  {
    term: "Pendente Lite",
    origin: "Latin",
    category: "Procedural",
    meaning: "During litigation. Refers to actions, events, or orders that take place while a lawsuit is ongoing and pending final judgment.",
    usage: "Includes ordering pendente lite maintenance for children or temporary property asset freezes.",
    example: "The court ordering PKR 12,000 monthly children's food support pendente lite until the custody case is final."
  },
  {
    term: "Ratio Legis",
    origin: "Latin",
    category: "Latin Maxim",
    meaning: "The reason or purpose of the law. The underlying rationale, policy, or objective behind a legislative provision.",
    usage: "Utilized by judges during statutory construction to avoid absurd results and fulfill legislative intent.",
    example: "Interpreting 'written signature' to cover digital biometric logs to align with the safety ratio legis of trade laws."
  },
  {
    term: "Per Incuriam",
    origin: "Latin",
    category: "Latin Maxim",
    meaning: "Through lack of care or inadvertence. A judicial decision rendered in ignorance or disregard of a relevant statutory provision or binding precedent.",
    usage: "Such decisions hold no precedential value and are not binding on sub-courts.",
    example: "A trial court bypassing a clear Lahore High Court ruling on bail because the precedent was not cited to the judge."
  },
  {
    term: "Wasilat-e-Haq",
    origin: "Urdu/Arabic",
    category: "Procedural",
    meaning: "A means or method of obtaining a right. The process or procedure through which a legal right is asserted or enforced in court.",
    usage: "Employed in property, civil procedures, and administrative protocols.",
    example: "Filing an eviction petition constitutes the proper wasilat-e-haq for recovery of rental property under provincial rent acts."
  },
  {
    term: "Haq-e-Mehr",
    origin: "Arabic/Urdu",
    category: "Family Law",
    meaning: "The right to dower. The sum of money or property that the husband is obligated to pay to the wife as a marriage consideration. It is the wife's absolute right and remains payable whether the marriage is consummated or not.",
    usage: "Enforced securely by family courts under the West Pakistan Family Courts Act 1964.",
    example: "A divorced wife successfully filing a recovery claim for gold jewelry listed as deferred Haq-e-Mehr in her Nikah Nama."
  },
  {
    term: "Nemo Dat Quod Non Habet",
    origin: "Latin",
    category: "Latin Maxim",
    meaning: "No one can give what they do not have. A person cannot transfer a better title to property than they themselves possess.",
    usage: "Codified under section 27 of the Sale of Goods Act 1930.",
    example: "A thief attempts to sell furniture; the buyer receives no legal ownership title because the seller had none."
  },
  {
    term: "Nolle Prosequi",
    origin: "Latin",
    category: "Criminal Law",
    meaning: "To be unwilling to pursue. A formal declaration by the prosecution that they will no longer pursue charges against the accused in a criminal case.",
    usage: "Reflected in Section 494 of the Code of Criminal Procedure 1898 regarding withdrawal of prosecution.",
    example: "The state prosecutor informing the sessions court that it is withdrawing theft charges against the defendant."
  },
  {
    term: "Mutatis Mutandis",
    origin: "Latin",
    category: "Latin Maxim",
    meaning: "With the necessary changes having been made. Applied when provisions of one law are applied to another context, with appropriate modifications to fit the new context.",
    usage: "Used inside legislative enactments or appellate judgments applying rules of civil procedures to revenue courts.",
    example: "Applying High Court filing guidelines to local tax boards, mutatis mutandis."
  },
  {
    term: "Inter Alia",
    origin: "Latin",
    category: "Latin Maxim",
    meaning: "Among other things. Used in legal documents and judgments to indicate that the items mentioned are not an exhaustive list but are part of a larger set.",
    usage: "Standard technical phrase inside pleadings and statements of facts.",
    example: "The petition stated, inter alia, that the developer failed to purchase structural steel certificates from inspectors."
  },
  {
    term: "Pro Bono",
    origin: "Latin",
    category: "Legal Term",
    meaning: "For the public good. Legal services provided voluntarily and without payment for the benefit of the public or persons who cannot afford legal representation.",
    usage: "Promoted actively by Bar Associations to support impoverished litigants.",
    example: "A senior constitutional advocate presenting a writ petition pro bono to protect clean forest areas from land development."
  },
  {
    term: "Sine Die",
    origin: "Latin",
    category: "Procedural",
    meaning: "Without a fixed day. An adjournment sine die means postponement without setting a specific date for the next hearing or resumption.",
    usage: "Common in civil court proceedings when waiting for higher court stay rulings.",
    example: "The civil judge adjourned the land dispute sine die until the appellate court resolves the pending title revision."
  },
  {
    term: "Suo Motu Notice (Article 199)",
    origin: "Constitutional",
    category: "Constitutional",
    meaning: "The exercise of original jurisdiction by a High Court on its own motion to enforce fundamental rights within its territorial jurisdiction.",
    usage: "Used by High Court Chief Justices to correct glaring administrative injustices.",
    example: "The High Court taking a suo motu notice of illegal industrial wastes polluting municipal water canals."
  },
  {
    term: "Hisba",
    origin: "Arabic/Islamic",
    category: "Islamic Law",
    meaning: "Accountability or enjoining good and forbidding evil. An Islamic legal concept that forms the basis of public accountability and oversight of market practices and public morality.",
    usage: "Forms the conceptual roots of provincial ombudsman (Mohtasib) services in Pakistan.",
    example: "Filing an administrative grievance against corporate power utility billing directly before the Provincial Mohtasib."
  },
  {
    term: "Fiat Justitia Ruat Caelum",
    origin: "Latin",
    category: "Latin Maxim",
    meaning: "Let justice be done though the heavens fall. Justice must be administered regardless of the consequences, emphasizing the paramount importance of justice above all other considerations.",
    usage: "The motto of senior judiciaries reflecting an absolute focus on rule of law over political alignments.",
    example: "The Federal Constitutional Court enforcement of citizen privacy rights regardless of fiscal or governmental agency objections."
  },
  {
    term: "Jus Cogens",
    origin: "Latin",
    category: "Legal Term",
    meaning: "Compelling law. A peremptory norm of international law that is accepted and recognized by the international community as a norm from which no derogation is permitted.",
    usage: "Incorporated inside constitutional values regarding absolute protection against torture and illegal captures.",
    example: "Relying on jus cogens norms to argue that no administrative state rules can validate inhumane custodial treatment."
  },
  {
    term: "Pacta Sunt Servanda",
    origin: "Latin",
    category: "Latin Maxim",
    meaning: "Agreements must be kept. The fundamental principle that treaties and contracts are binding on the parties and must be performed in good faith.",
    usage: "Enforced under Section 37 of the Contract Act 1872 as the absolute bedrock of commercial relationships.",
    example: "A corporate buyer must proceed with payouts once they have signed a binding raw material delivery agreement."
  },
  {
    term: "Ultra Petita",
    origin: "Latin",
    category: "Procedural",
    meaning: "Beyond what is sought. A court decision that grants more than what was requested by the parties in their pleadings.",
    usage: "Strictly limited in civil litigation; judges are generally restricted to the specifically prayed remedies.",
    example: "An appellate bench quashing a trial court order because it granted millions in extra unprayed commercial damages."
  },
  {
    term: "Audi Alteram Partem (Extended)",
    origin: "Latin",
    category: "Latin Maxim",
    meaning: "Hear the other side. A fundamental principle of natural justice that no decision shall be made against a party without giving them a fair opportunity to be heard.",
    usage: "Reiterated inside all administrative frameworks to prevent summary firings or arbitrary cancellations of trading licences.",
    example: "The licensing board reversing a summary trade license cancellation because they failed to afford any prior hearing window."
  }
];
