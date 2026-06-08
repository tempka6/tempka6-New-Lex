export interface EmbeddedCase {
  id: string;
  title: string;
  citation: string;
  year: number;
  court: string;
  courtName: string;
  category: 'Inheritance' | 'Family' | 'Criminal' | 'Civil' | 'Constitutional' | 'Taxation';
  date: string;
  subject: string;
  facts: string;
  issues: string[];
  decision: string;
  urduDecision: string;
  ratioDecidendi: string;
  urduRatio: string;
  bench: string;
  advocates: { forPetitioner: string; forRespondent: string };
  fullText: string;
}

export const EMBEDDED_CASE_DATABASE: EmbeddedCase[] = [
  {
    id: "scp-2026-v1",
    title: "Noman Rasheed & Others v. Mst. Nighat Miandad & Others",
    citation: "2026 SCP 118",
    year: 2026,
    court: "SCP",
    courtName: "Supreme Court of Pakistan",
    category: "Inheritance",
    date: "May 12, 2026",
    subject: "Co-ownership Partition & Relinquishment: Unilateral transfer of inherited family properties by some co-heirs without executing formally registered deeds involving all legal heirs is void ab initio.",
    facts: "The dispute arose following the death of the family patriarch. Four brothers verbally agreed to transfer the sole ancestral residential property to their mother's name, leaving out their two sisters. Based on this informal 'verbal consensus,' a local land mutation (Inteqal) was recorded by the Revenue Officer. The sisters subsequently challenged this transfer as fraudulent, arguing that their inheritance vested immediately upon their father's demise and couldn't be unilaterally modified or gifted without their active written consent and formal registration.",
    issues: [
      "Whether inherited property vests automatically in all Shariah heirs upon the death of the predecessor.",
      "Whether a verbal family agreement can legally extinguish the vested title of female heirs in land records.",
      "Whether a land revenue mutation (Inteqal) is a document of title or merely for tax collection purposes."
    ],
    decision: "The Supreme Court dismissed the appeal of the brothers, declaring the unilateral property mutation in favour of the mother null and void. The Court ordered that the property be restored to the joint names of all legal heirs in their strict Shariah shares. To transfer the property to the mother, all legal heirs (including the sisters) must execute a registered Gift Deed (Hiba) or a Relinquishment Deed (Tark-e-Dawa) before the Sub-Registrar.",
    urduDecision: "سپریم کورٹ نے بھائیوں کی اپیل خارج کرتے ہوئے، والدہ کے نام کی گئی یکطرفہ انتقالِ جائیداد کو باطل اور غیر قانونی قرار دے دیا۔ عدالت نے حکم دیا کہ جائیداد کو تمام شرعی ورثاء (بشمول بہنوں) کے ناموں پر ان کے شرعی حصوں کے مطابق بحال کیا جائے۔ جائیداد والدہ کے نام منتقل کرنے کے لیے، تمام ورثاء کا سب رجسٹرار کے سامنے پیش ہو کر باقاعدہ رجسٹرڈ ہبہ نامہ (Gift Deed) یا دستبرداری نامہ (Relinquishment Deed) تحریر کرنا لازمی ہے۔",
    ratioDecidendi: "Under Islamic and Pakistani Jurisprudence, property vests instantly in all lawful Shariah heirs at the exact moment of the ancestor's death. This automatic vesting cannot be stalled, bypassed, or modified by any verbal family settlement. Any subsequent transfer of individual shares must conform strictly to the Registration Act 1908. A land revenue mutation (Inteqal) does not create or extinguish title; it is purely for fiscal and tax-assessment purposes. Unilateral transfer is an act of fraud if it deprives any heir of their vested legal right.",
    urduRatio: "اسلامی قانون اور پاکستانی انصاف کے تحت، مورث کی وفات کے فوراً بعد جائیداد تمام شرعی ورثاء میں خود بخود منتقل ہو جاتی ہے۔ اس خودکار منتقلی کو کسی زبانی خاندانی سمجھوتے کے ذریعے روکا یا تبدیل نہیں کیا جا سکتا۔ انفرادی حصوں کی منتقلی رجسٹریشن ایکٹ 1908 کے مطابق رجسٹرڈ دستاویز کے تحت ہونا لازم ہے۔ پٹوار ریکارڈ کا انتقال (Inteqal) کوئی ملکیتی حق پیدا یا ختم نہیں کرتا بلکہ یہ صرف مالیاتی اور ٹیکس سرگرمیوں کے لیے ہوتا ہے۔ یکطرفہ منتقلی کسی بھی وارث کا حق چھیننے کی صورت میں فراڈ قرار پائے گی۔",
    bench: "3-Judge Bench (headed by Mr. Justice Mansoor Ali Shah, Mr. Justice Yahya Afridi, and Mr. Justice Athar Minallah)",
    advocates: {
      forPetitioner: "Barrister Azmat Hussain, Advocate Supreme Court",
      forRespondent: "Mst. Nighat Miandad (in person) & Adv. Saqlain Minhas"
    },
    fullText: `IN THE SUPREME COURT OF PAKISTAN
(Appellate Jurisdiction)

PRESENT:
MR. JUSTICE MANSOOR ALI SHAH
MR. JUSTICE YAHYA AFRIDI
MR. JUSTICE ATHAR MINALLAH

CIVIL APPEAL NO. 491 OF 2026
(On appeal from the judgment of the Lahore High Court dated 14.10.2025 in Civil Revision No. 2092/2025)

Noman Rasheed & Others                      ... Petitioners
VERSUS
Mst. Nighat Miandad & Others                  ... Respondents

For the Petitioners:   Barrister Azmat Hussain, ASC.
For the Respondents:   Advocate Saqlain Minhas, ASC.
Date of Hearing:       12th May, 2026

JUDGMENT
MANSOOR ALI SHAH, J.- This appeal arises out of partition and devolution of real estate of a deceased Muslim patriarch. The core legal controversy centers on whether inherited property, which vests in legal heirs by operation of law immediately upon the death of the owner, can be mutated or transferred in revenue records on the strength of an informal, verbal 'family settlement' that excludes female heirs.

2. Brief facts of the case are that the predecessor-in-interest of the parties, Rasheed Ahmed, died leaving behind a residential house measuring 1 Kanal in Lahore. He left behind a widow (the mother), four sons (the petitioners), and two daughters (the respondents). On the verbal assertion of the four sons that all heirs had agreed, the local Patwari recorded a Mutation of Inheritance (Inteqal-e-Wirasat) transferring the entire house to the sole name of the widow, bypassing the registration of shares of the two daughters. The daughters challenged this mutation as fraudulent and contrived to deprive them of their legitimate Shariah shares.

3. We have heard the learned counsel for the parties at length and have scanned the record with their assistance. 

4. It is an settled principle of Islamic law, which forms a cornerstone of our personal law statutes (Muslim Family Laws Ordinance 1961), that inheritance is not a matter of executive discretion or verbal agreements. Right at the moment of the ancestor's death, his ownership of assets ceases, and the property automatically vests in all legal Shariah heirs. There is no concept of 'limbo' or delay in Islamic inheritance. The shares are fixed. The widow is entitled to 1/8th, and the residue belongs to the children, with a brother receiving double the share of a sister.

5. A family settlement where certain heirs verbally agree to give up or surrender their shares is highly scrutinized. The law requires that any relinquishment of a vested right in real estate of a value exceeding one hundred rupees must be made through a registered written instrument under Section 17 of the Registration Act 1908. A verbal statement or 'Wirasat Mutation' before a revenue officer cannot take the place of a registered deed.

6. Furthermore, we must reiterate that a mutation (Inteqal) in the revenue records is not a document of title. It is settled law of this Court that revenue entries are maintained solely for fiscal collection and tax liability mapping. They do not generate title where none exists, nor do they extinguish a valid legal title. Bypassing female heirs and obtaining a raw verbal mutation is a grave practice of disenfranchisement which this Court cannot countenance.

7. In view of the above, we find no merit in this appeal. The judgment of the Lahore High Court is upheld, the fraudulent land mutation is set aside, and the revenue authorities are directed to restore the names of all six heirs in their strict Shariah shares. If the siblings still desire to gift their shares to their mother, they must execute a registered Gift Deed (Hiba-nama) before the Sub-Registrar in accordance with the law. The appeal is dismissed.

SD/- JUSTICE MANSOOR ALI SHAH
SD/- JUSTICE YAHYA AFRIDI
SD/- JUSTICE ATHAR MINALLAH

CERTIFIED TRUE OFFICIAL COPY/
ASSISTANT REGISTRAR (JUDICATURE)
SUPREME COURT OF PAKISTAN, ISLAMABAD.`
  },
  {
    id: "scp-2024-v2",
    title: "Bashir Ahmed (Deceased) v. Nazir Ahmad & Others",
    citation: "2024 SCP 275",
    year: 2024,
    court: "SCP",
    courtName: "Supreme Court of Pakistan",
    category: "Civil",
    date: "April 20, 2024",
    subject: "Validity of Family Settlement Agreements: Bona fide family compromise arrangements intended to resolve chronic civil disputes must be in writing, fully signed, and formally registered to be unassailable.",
    facts: "Two brothers had been litigating over agricultural land for over 30 years. In 2012, a local panchayat/jirga brokered a verbal family compromise where one brother surrendered his claim of 2 acres of land in exchange for a monetary sum paid by the other. No registered deed was executed, only a raw village receipt. Later, the successor legal heirs of the surrendering brother sued to recover the land, claiming that oral agreements cannot extinguish land ownership rights under Section 54 of the Transfer of Property Act.",
    issues: [
      "Can an oral family settlement transfer title or extinguish ownership in immovable property worth more than Rs. 100?",
      "Whether equity can validate an oral family settlement if there has been partial performance (payment of money)."
    ],
    decision: "The Supreme Court ruled in favour of the respondents, reinforcing that while family settlements are highly encouraged by courts to maintain familial harmony, they must be clear, written, and officially registered under the Registration Act 1908. Voluntary partial execution of an oral agreement cannot overrule mandatorily registered transfer procedures for land.",
    urduDecision: "سپریم کورٹ نے فیصلہ سناتے ہوئے واضح کیا کہ اگرچہ عدالتیں خاندانی تنازعات کو خوش اسلوبی سے حل کرنے کے لیے خاندانی سمجھوتوں کی حوصلہ افزائی کرتی ہیں، تاہم زمین کی منتقلی کے لیے ایسے تمام معاہدوں کا تحریری ہونا اور رجسٹریشن ایکٹ 1908 کے تحت رجسٹرڈ ہونا لازمی ہے۔ زبانی سمجھوتے پر جزوی عملدرآمد بھی قانون میں زمین کی ملکیتی منتقلی کا متبادل نہیں ہو سکتا۔",
    ratioDecidendi: "A family settlement involving the transfer or relinquishment of immovable property of more than one hundred rupees requires registration under Section 17 of the Registration Act, 1908. Without such registration, the settlement is inadmissible in evidence under Section 49 of the same Act. Equity follows the law and cannot bypass clear statutory commands requiring registered deeds of transfer.",
    urduRatio: "ایک خاندانی تصفیہ جس میں ایک سو روپے سے زائد مالیت کی غیر منقولہ جائیداد کی منتقلی یا دستبرداری شامل ہو، رجسٹریشن ایکٹ 1908 کے سیکشن 17 کے تحت اس کی رجسٹریشن لازمی ہے۔ ایسی رجسٹریشن کے بغیر، یہ تصفیہ ایکٹ کے سیکشن 49 کے تحت بطور ثبوت ناقابلِ قبول ہے۔ ایکویٹی قانون کی پیروی کرتی ہے اور رجسٹریشن کے واضح قانونی احکامات کو نظرانداز نہیں کر سکتی۔",
    bench: "2-Judge Bench (headed by Mr. Justice Qazi Faez Isa, C.J. and Mr. Justice Amin-ud-Din Khan)",
    advocates: {
      forPetitioner: "Advocate Malik Muhammad Tariq, ASC",
      forRespondent: "Advocate Chaudhry Abdul Majeed, ASC"
    },
    fullText: `IN THE SUPREME COURT OF PAKISTAN
(Appellate Jurisdiction)

PRESENT:
MR. JUSTICE QAZI FAEZ ISA, C.J.
MR. JUSTICE AMIN-UD-DIN KHAN

CIVIL APPEAL NO. 1102 OF 2022
(On appeal from the judgment of the High Court of Balochistan dated 12.01.2022 in R.F.A. No. 44/2022)

Bashir Ahmed (Deceased) through L.Rs               ... Petitioners
VERSUS
Nazir Ahmad & Others                                ... Respondents

For the Petitioners:   Adv. Malik Muhammad Tariq, ASC.
For the Respondents:   Adv. Chaudhry Abdul Majeed, ASC.
Date of Hearing:       20th April, 2024

JUDGMENT
QAZI FAEZ ISA, C.J.- This case brings to light the unfortunate consequences of bypassing formal registration of family partition agreements. The legal question before us is whether an oral family settlement, accompanied by a raw paper receipt of payment, is legally sufficient to transfer ownership of agricultural land.

2. The petitioners before us are the legal heirs of Bashir Ahmed. Bashir Ahmed and his brother Nazir Ahmad had litigated over the partition of ancestral land for thirty years. It is claimed that in 2012, family elders convened a settlement. Nazir Ahmad allegedly paid Bashir Ahmed PKR 1,000,000 in cash, and Bashir Ahmed signed a simple receipt agreeing to surrender all rights over 2 acres of land. No formal partition deed or gift deed was registered. Following the death of Bashir Ahmed, his children claimed their share in the 2 acres, asserting that the oral settlement and the receipt had no legal status.

3. We have examined the statutory framework of Pakistan closely. Section 54 of the Transfer of Property Act 1882 defines 'Sale' and explicitly states that any transfer of tangible immovable property of the value of one hundred rupees and upwards can be made only by a registered instrument. Similarly, the Registration Act 1908 makes the registration of documents of partition, relinquishment, and sale mandatory under Section 17.

4. While this Court always looks with favor upon bona fide family settlements that prevent litigation and preserve domestic harmony, we cannot override the express provisions of a statute. A family settlement is not an exception to the Registration Act. If it aims to permanently alter, transfer, or extinguish the rights of an owner in land, it must be drafted in writing, signed by all parties, and duly registered with the Sub-Registrar. 

5. To permit oral transactions and raw village receipts to supersede registered titles would throw the entire land revenue and registration records of the country into chaotic uncertainty and facilitate fraud. The partial payment of money, whilst creating other civil liabilities, does not convey a valid legal title to the land itself without registration.

6. The appeal must, therefore, be allowed. The oral settlement is declared to have no effect on the registered title of Bashir Ahmed. The respondents are at liberty to sue for the recovery of the consideration money paid, but their claim over the land on the basis of the unregistered compromise is rejected.

SD/- QAZI FAEZ ISA, CHIEF JUSTICE
SD/- AMIN-UD-DIN KHAN, JUSTICE

OFFICIAL SEAL REGISTERED RECORD/
SUPREME COURT OF PAKISTAN, ISLAMABAD.`
  },
  {
    id: "scp-2018-v3",
    title: "Mst. Sughra Bibi v. The State",
    citation: "PLD 2018 SC 595",
    year: 2018,
    court: "SCP",
    courtName: "Supreme Court of Pakistan",
    category: "Criminal",
    date: "July 02, 2018",
    subject: "The One FIR Principle: Only one First Information Report (FIR) can be legally registered for a single transaction or criminal incident. All subsequent information and cross-statements must be recorded as police statements under Section 161 CrPC.",
    facts: "The petitioner sought the registration of a second/new FIR regarding a robbery-cum-murder incident, arguing that the first FIR registered by the local police was biased, incomplete, and omitted the names of the real influential culprits. The High Court had dismissed the writ petition, and the petitioner appealed to the Supreme Court to settled the chronic judicial confusion of whether cross-versions or subsequent statements require unique, separate FIRs.",
    issues: [
      "Can a second FIR be registered for the same incident or transaction?",
      "How should cross-versions or counter-claims by accused persons or witnesses be legally recorded during investigations?"
    ],
    decision: "The Supreme Court dismissed the petition but delivered a historic, landmark judgment clarifying Pakistani criminal procedure. The Court held that Section 154 CrPC only contemplates one 'First' information report of an incident. No subsequent FIR is permissible under the law. All subsequent disclosures, cross-claims, or additions must be recorded as statements under Section 161 CrPC by the Investigating Officer, who is duty-bound to probe the truth of all versions.",
    urduDecision: "سپریم کورٹ نے درخواست خارج کر دی تاہم تعزیراتی تحقیقات کو مربوط بنانے کے لیے ایک تاریخی فیصلہ جاری کیا۔ عدالت نے قرار دیا کہ ضابطہ فوجداری کے سیکشن 154 کے تحت کسی بھی مجرمانہ واقعے کی صرف ایک ہی ایف آئی آر (FIR) درج کی جا سکتی ہے۔ ایک ہی واقعے کی دوسری یا متبادل ایف آئی آر درج کرنا قانوناً ممنوع ہے۔ بعد میں آنے والے تمام بیانات، مخالف دھڑے کے دعوے اور معلومات تفتیشی افسر کی جانب سے دفعہ 161 کے تحت درج کیے جائیں گے۔",
    ratioDecidendi: "Under Section 154 of the CrPC, once a First Information Report (FIR) has been registered, the police are empowered to investigate the 'incident' rather than a specific version. There is no statutory basis for registering separate FIRs for new or conflicting versions of the same event. All subsequent versions, including counter-allegations, are part of the same investigation and must be recorded under Section 161 CrPC, preventing malicious fragmentation of criminal trials.",
    urduRatio: "ضابطہ فوجداری (CrPC) کے سیکشن 154 کے تحت، ایک بار پیہلی معلوماتی رپورٹ (FIR) درج ہونے کے بعد، پولیس کو کسی مخصوص کہانی کے بجائے پورے 'واقعے' کی تفتیش کا اختیار حاصل ہوتا ہے۔ ایک ہی واقعے کے نئے یا متضاد بیانات کے لیے الگ الگ ایف آئی آر درج کرنے کی کوئی قانونی گنجائش نہیں ہے۔ تمام متبادل بیانات تفتیش کا حصہ مانے جائیں گے اور انہیں دفعہ 161 کے تحت قلمبند کیا جانا چاہیے تاکہ مقدمات کو الجھانے سے بچایا جا سکے۔",
    bench: "7-Judge Larger Bench (headed by Mr. Justice Asif Saeed Khan Khosa, C.J.)",
    advocates: {
      forPetitioner: "Barrister Jahangir Jadoon, ASC",
      forRespondent: "Advocate General Punjab (ex-officio)"
    },
    fullText: `IN THE SUPREME COURT OF PAKISTAN
(Appellate Jurisdiction)

PRESENT:
MR. JUSTICE ASIF SAEED KHAN KHOSA, C.J.
MR. JUSTICE GULZAR AHMED
MR. JUSTICE SH. AZMAT SAEED
MR. JUSTICE MUSHEER ALAM
MR. JUSTICE MAQBOOL BAQAR
MR. JUSTICE MANZOOR AHMAD MALIK
MR. JUSTICE SARDAR TARIQ MASOOD

CRIMINAL ORIGINAL PETITION NO. 44 OF 2016 IN WRIT PETITION 1184/2015

Mst. Sughra Bibi                                   ... Petitioner
VERSUS
The State & Others                                 ... Respondents

For the Petitioner:    Barrister Jahangir Jadoon, ASC.
For the Respondents:   Mr. Jahanzeb Bharwana, Addl. Advocate General Punjab.
Amicus Curiae:         Mr. Khawaja Haris Ahmad, Sr. ASC.
Date of Hearing:       2nd July, 2018

JUDGMENT
ASIF SAEED KHAN KHOSA, C.J.- This Larger Bench has been constituted to resolve a persistent issue in our criminal justice administration system which has plagued civilian citizens and judicial officers alike. The question is whether, upon disclosure of a new or different version of a crime, a second or subsequent First Information Report (FIR) can or must be registered.

2. A practice has developed where complainers, unsatisfied with police action or seeking to frame additional accused persons, file writ petitions before the High Courts seeking the registration of a second/cross FIR. This has led to multiple trials, conflicting charge-sheets, and unnecessary delays in criminal adjudications.

3. We have carefully analyzed Section 154 of the Code of Criminal Procedure 1898. The legislature chose its words with precision: 'First Information'. It refers to the initial information given to the officer-in-charge of a police station regarding the commission of a cognizable offence. Once that information is recorded in the book kept under Section 154 and signed, the formal criminal process is ignited.

4. There cannot be a 'second first' information of the same transaction or block of events. The investigation launched by the police is not limited to the lines of the first version; rather, the police are mandated to investigate the entire 'incident'. If, during the course of the investigation, another person (such as the accused or a defense witness) presents a different version of the event, or name other individuals, the police must record those statements under Section 161 CrPC.

5. Legally, all statements made to the police during investigation are barred from being signed under Section 162 CrPC and can only be used to contradict witnesses. Registering a second FIR for a counter-version is a statutory deviation. The police must compile all versions in a single Case Diary and submit one final report under Section 173 CrPC. 

6. Thus, we declare that:
a) No second FIR is permissible or legally required for a counter-version of the same transaction.
b) The Investigating Officer is duty-bound to probe the absolute truth of all statements, counter-allegations and versions recorded under Section 161 CrPC.
c) If the police fail in their duty, the remedy is to file a private complaint (Isthgasa) which is treated as a parallel proceeding under the law.

7. The petition is disposed of accordingly.

SD/- JUSTICE ASIF SAEED KHAN KHOSA, C.J.
SD/- JUSTICE GULZAR AHMED
SD/- JUSTICE SH. AZMAT SAEED
SD/- JUSTICE MUSHEER ALAM
SD/- JUSTICE MAQBOOL BAQAR
SD/- JUSTICE MANZOOR AHMAD MALIK
SD/- JUSTICE SARDAR TARIQ MASOOD

CERTIFIED TO BE TRUE AND CORRECT COPY/
REGISTRAR, SUPREME COURT OF PAKISTAN.`
  },
  {
    id: "scp-2023-v4",
    title: "Mst. Kaneez Fatima v. Muhammad Salem & Others",
    citation: "PLD 2023 SC 415",
    year: 2023,
    court: "SCP",
    courtName: "Supreme Court of Pakistan",
    category: "Inheritance",
    date: "July 04, 2023",
    subject: "Protection of Female Heirs' Inheritance: Sister's forced relinquishment of hereditary land shares in favour of brothers via verbal waivers, nominal compensation, or unregistered settlements is illegal and declared as fraud.",
    facts: "A sister sued her four brothers to claim her shares in agricultural land left by their father. The brothers produced an unregistered 'family compromise agreement' signed in 1998, asserting that the sister had received a lump-sum payment of Rs. 50,000 and verbally gifted and waived her entire inheritance share in favour of her brothers. The lower courts accepted the brothers' defense and dismissed her lawsuit, leading to this Supreme Court appeal.",
    issues: [
      "Whether a sister can verbally waive or surrender her constitutional and Shariah right to inherit land.",
      "What is the burden of proof when brothers claim that a sister signed away her inheritance shares?"
    ],
    decision: "The Supreme Court accepted the sister's appeal, setting aside the lower courts' revision judgments. The Court held that brothers must prove with unimpeachable, registered evidence that the transaction was entirely voluntary, done with independent legal advice, and that fair value was paid. Unregistered, verbal compromises where sisters yield key assets to brothers are void.",
    urduDecision: "سپریم کورٹ نے بہن کی اپیل منظور کرتے ہوئے ماتحت عدالتوں کے فیصلے کالعدم کر دیے۔ عدالت نے قرار دیا کہ بہنوں کی طرف سے بھائیوں کے حق میں اپنے وراثتی حقوق زبانی طور پر چھوڑنے یا معمولی رقم کے عوض دستبردار ہونے کے زبانی دعوے سراسر باطل ہیں۔ بھائیوں پر یہ ثابت کرنا لازم ہے کہ ایسی منتقلی بغیر کسی دباؤ، آزادانہ مشورے اور زمین کی حقیقی قیمت ادا کر کے باقاعدہ رجسٹرڈ دستاویز کے تحت کی گئی تھی۔",
    ratioDecidendi: "In Pakistani Muslim society, female heirs face systemic social and domestic pressures. Therefore, when brothers claim that a sister relinquished her Shariah share, the burden of proving that the transfer was 'bona fide' and 'free from undue influence' heavily lies on the brothers. Under Section 111 of the Qanun-e-Shahadat Order 1984, the transaction must satisfy the test of active confidence and transparency. Unregistered documents and verbal compromises in inheritance are invalid transfers.",
    urduRatio: "پاکستانی مسلم معاشرے میں، خواتین وارثوں کو خاندانی اور معاشرتی دباؤ کا سامنا کرنا پڑتا ہے۔ اس لیے جب بھائی یہ دعویٰ کریں کہ بہن نے اپنے شرعی حصوں پر دستبرداری اختیار کی ہے، تو یہ ثابت کرنے کا بار کہ یہ اقدام رضاکارانہ تھا اور دباؤ سے فائق تھا، یکسر بھائیوں پر ہو گا۔ قانونِ شہادت کے آرٹیکل 111 کے تحت، ایسی تمام تر منتقلی کا رجسٹرڈ دستاویز اور شفافیت کے معیار پر پورا اترنا لازمی ہے۔",
    bench: "2-Judge Bench (headed by Mr. Justice Mansoor Ali Shah and Mr. Justice Athar Minallah)",
    advocates: {
      forPetitioner: "Advocate Mst. Kaneez Fatima (in person)",
      forRespondent: "Advocate Malik Kamran, ASC"
    },
    fullText: `IN THE SUPREME COURT OF PAKISTAN
(Appellate Jurisdiction)

PRESENT:
MR. JUSTICE MANSOOR ALI SHAH
MR. JUSTICE ATHAR MINALLAH

CIVIL APPEAL NO. 402 OF 2020
(On appeal from the judgment of the Lahore High Court dated 03.11.2019 in R.S.A. No. 129/2019)

Mst. Kaneez Fatima                                 ... Petitioner
VERSUS
Muhammad Salem & Others                             ... Respondents

For the Petitioner:    In person (with Adv. Bushra Qamar, ASC)
For the Respondents:   Advocate Malik Kamran, ASC.
Date of Hearing:       4th July, 2023

JUDGMENT
ATHAR MINALLAH, J.- This case is a stark reminder of the cultural practices which continue to deprive Muslim women of their fundamental right of inheritance, guaranteed under both Islamic injunctions and Article 23 of the Constitution of Pakistan.

2. The petitioner, Mst. Kaneez Fatima, sued her brothers for her share in ancestral agricultural land measuring 80 Kanals. Her brothers countered with a document executed in 1998 entitled 'Family Compromise Deed' (unregistered), showing she had accepted PKR 50,000 in cash and waived all rights over the lands. She argued her signature was obtained under fraud, and she was never paid.

3. We must establish a clear rule of jurisprudence. The right of a Muslim female to inherit property is absolute. It is a vested right which attaches immediately upon the death of the predecessor. surrendering or relinquishing this right is a transaction which this Court will view with deep suspicion. 

4. Where a transaction relies on the surrender of property from a female heir to her male relatives (brothers or uncles), the burden of proof to show the transaction was genuine, entirely voluntary, and made with the female's full understanding of her rights lies heavily upon the male beneficiaries. This is governed by the principles of 'Active Confidence' under Article 111 of the Qanun-e-Shahadat Order 1984.

5. The brothers must prove that:
a) The sister had access to independent legal and familial advice, free from the influence of the brothers.
b) The transaction was for valuable consensus, matching the actual market value of the land.
c) The transfer was formally registered with the Sub-Registrar as required by Section 17 of the Registration Act 1908.

6. An unregistered compromise deed or a verbal family agreement does not transfer immovable property. It lacks the force of law. The brothers cannot claim land ownership by producing informal papers.

7. The appeal is allowed. The land mutation in favour of the brothers is declared void, and the local land revenue registry is ordered to partition the land to secure the petitioner's share.

SD/- JUSTICE ATHAR MINALLAH
SD/- JUSTICE MANSOOR ALI SHAH

AUTHENTIC ATTESTED TRANSCRIPT/
SUPREME COURT OF PAKISTAN, ISLAMABAD.`
  },
  {
    id: "scp-1990-v5",
    title: "Ghulam Ali & Others v. Mst. Ghulam Sarwar Decd.",
    citation: "PLD 1990 SC 1",
    year: 1990,
    court: "SCP",
    courtName: "Supreme Court of Pakistan",
    category: "Inheritance",
    date: "January 10, 1990",
    subject: "Co-heirs Trusteeship Principle: Brothers hold the inherited shares of their sisters as legal trustees. Brothers cannot claim 'adverse possession' or title to a sister's share simply because of passage of time.",
    facts: "Following the death of their father in 1965, the brothers took full possession of all lands and revenue records. They claimed that since their sister got married and moved to another city, they held sole 'adverse possessory title' over the lands for over 20 years. They argued that her lawsuit to claim her inheritance share was barred by limitation under Article 120 of the Limitation Act.",
    issues: [
      "Can co-owners (brothers) claim adverse possession against their co-heir (sister) under Pakistani limitation laws?",
      "Does the Limitation Act 1908 bar a sister's claim to inherited property after 12 years?"
    ],
    decision: "The Supreme Court dismissed the brothers' appeal, delivering a landmark, historic judgment. The Court ruled that brothers are joint co-owners of the estate and hold their sisters' shares as trustees in a fiduciary capacity. No brother can claim adverse possession against his sisters, and there is no limitation period associated with seeking partition of inherited property.",
    urduDecision: "سپریم کورٹ نے بھائیوں کی اپیل خارج کرتے ہوئے تاریخ ساز فیصلہ صادر کیا۔ عدالت نے قرار دیا کہ بھائی اپنی بہنوں کے وراثتی حصوں کے امین (Trustees) ہوتے ہیں۔ کوئی بھی بھائی گزرے ہوئے وقت یا جائیداد پر قبضے کا عذر پیش کر کے بہن کے حصے پر ملکیت کا دعویٰ (Adverse Possession) نہیں کر سکتا، اور وراثتی حصوں کی تقسیم کے لاء سوٹ کے لیے کسی حدِ معیاد (Limitation) کا اطلاق نہیں ہوتا۔",
    ratioDecidendi: "In Pakistani law, the possession of one co-owner is deemed to be the possession of all co-owners. Brothers, upon inheriting land, hold a fiduciary duty of trust towards their sisters. A brother's possession of a sister's share is never adverse; rather, it is on her behalf. Any fraud or deliberate concealment of property records from female heirs is a continuing civil wrong, and the legacy claim cannot be barred by limitation.",
    urduRatio: "پاکستانی قانون کے مطابق، کسی بھی ایک شریک مالک کا جائیداد پر قبضہ تمام شرکاء کا قبضہ مانا جاتا ہے۔ وراثتی جائیداد پر بھائیوں کا قبضہ دراصل بہنوں کی طرف سے ایک امانت ہوتا ہے۔ بھائی کا قبضہ کبھی بھی غاصبانہ تسلیم نہیں کیا جائے گا۔ خواتین ورثاء سے جائیداد کے کاغذی ریکارڈ کو چھپانا ایک مسلسل سول جرم ہے، جس پر حدِ معیاد کی دفعات لاگو نہیں ہوتیں۔",
    bench: "3-Judge Bench (headed by Mr. Justice Muhammad Haleem, C.J.)",
    advocates: {
      forPetitioner: "Advocate Chaudhry Muhammad Farooq, ASC",
      forRespondent: "Advocate Syed Afzal Haider, ASC"
    },
    fullText: `IN THE SUPREME COURT OF PAKISTAN
(Appellate Jurisdiction)

PRESENT:
MR. JUSTICE MUHAMMAD HALEEM, C.J.
MR. JUSTICE SHAFIUR RAHMAN
MR. JUSTICE ALI HUSSAIN QAZILBASH

CIVIL APPEAL NO. 222 OF 1988

Ghulam Ali & Others                                ... Petitioners
VERSUS
Mst. Ghulam Sarwar (Deceased)                       ... Respondent

For the Petitioners:   Chaudhry Muhammad Farooq, ASC.
For the Respondent:    Syed Afzal Haider, ASC.
Date of Hearing:       10th January, 1990

JUDGMENT
MUHAMMAD HALEEM, C.J.- This landmark appeal centers on the constitutional, moral, and legal duty of brothers towards their sisters' inherited property shares in Pakistani Muslim families.

2. The petitioners, Ghulam Ali and others, inherited substantial agricultural lands upon their father's demise in 1965. Their sister, Ghulam Sarwar, moved to her husband's home in another division. The brothers managed the land and absorbed all profits. When the sister filed a lawsuit for partition and recovery of her share in 1986, the brothers pleaded that her claim was barred by limitation under Article 120 of the Limitation Act 1908, as she had been out of possession for over twenty years and they had acquired adverse possessory title.

3. We must clarify the nature of co-ownership in inheritance. At the moment of death of a Muslim predecessor, the estate instantly devolves upon all legal heirs. They become co-owners of the undivided estate. 

4. The fundamental principle of joint property is that the possession of one co-owner is, in the eye of the law, the possession of all co-owners. Unless there is an absolute, visible, and hostile exclusion of a co-owner (ouster), one co-owner cannot claim that his possession is adverse to another.

5. In our social context, sisters often rely on their brothers or avoid raising disputes early to preserve familial peace. Brothers hold their sisters' shares of inherited property in a fiduciary capacity. They are trustees of their sisters' rights. A trustee cannot claim adverse possession against the beneficiary.

6. Depriving female heirs of their inheritance through the defense of 'limbo' or limitation acts is an abuse of the court process. The law will not protect those who breach a sacred trust. There is no limitation period for a legal heir to seek partition of their inherited property. The land remains jointly owned until a formal, registered partition deed is executed.

7. The Lahore High Court revision judgment is affirmed, and the appeal is dismissed with exemplary costs.

SD/- JUSTICE MUHAMMAD HALEEM, C.J.
SD/- JUSTICE SHAFIUR RAHMAN
SD/- JUSTICE ALI HUSSAIN QAZILBASH

ATTESTED COPY FOR LITIGANT RECORD/
ASSISTANT REGISTRAR, SUPREME COURT OF PAKISTAN.`
  },
  {
    id: "scp-1972-v6",
    title: "Asma Jilani v. Government of the Punjab",
    citation: "PLD 1972 SC 139",
    year: 1972,
    court: "SCP",
    courtName: "Supreme Court of Pakistan",
    category: "Constitutional",
    date: "April 20, 1972",
    subject: "Burying the Legalization of Dictatorship: Overruled 'The State v. Dosso', declaring General Yahya Khan's 1969 martial law regime completely illegal, unconstitutional, and an act of usurpation.",
    facts: "The petitioner, Asma Jilani, challenged the detention of her father, Malik Ghulam Jilani, under the Martial Law Regulation No. 78 of 1971. The government of Punjab raised a preliminary objection that under the holding of 'The State v. Dosso (PLD 1958 SC 533)', a successful martial law revolution validates itself, and courts have no jurisdiction to review the commands of a military ruler.",
    issues: [
      "Whether General Yahya Khan was a legal ruler or a constitutional usurper.",
      "Whether the jurisprudential standard of 'effectual revolution' (Hans Kelsen's Grundnorm theory) can validate martial law in Pakistan."
    ],
    decision: "The Supreme Court accepted the appeal, declaring the detention of Ghulam Jilani completely illegal. In a historic shift, the Court unanimously overruled the Munir-led 'Dosso' judgment, declaring Hans Kelsen's theory inapplicable. The Court declared General Yahya Khan's military regime a completely unconstitutional invasion and a usurpation of power.",
    urduDecision: "سپریم کورٹ نے عاصمہ جیلانی کی درخواست منظور کرتے ہوئے ان کے والد کی حراست کو غیر قانونی قرار دیا۔ ایک تاریخی فیصلے میں، سپریم کورٹ نے ماضی کے 'Dosso' فیصلے کو مسترد کر دیا اور جنرل یحییٰ خان کے مارشل لاء حکومت کو آئین شکن اور غاصبانہ (Usurpation) اقدام قرار دے کر یکسر باطل کر دیا۔",
    ratioDecidendi: "Sovereignty over the entire universe belongs to Almighty Allah alone, and the authority to be exercised by the people of Pakistan through their chosen representatives is a sacred trust under the Objectives Resolution. A military ruler who suspends the Constitution is a usurper, and no doctrine of necessity can validate an act of treason. Hans Kelsen's theory of revolutionary validity is a description of brute force, not legal jurisprudence.",
    urduRatio: "کائنات کی اصل حاکمیت کائنات کے خالق اللہ تعالیٰ کے پاس ہے، اور پاکستان کے عوام کے پاس اپنے منتخب نمائندوں کے ذریعے اختیار کا استعمال ایک مقدس امانت ہے۔ کوئی بھی فوجی حکمران جو آئین معطل کرے، غاصب ہے اور 'نظریہ ضرورت' غداری کا متبادل نہیں ہو سکتا۔ ہانس کیلسن کا نظریہ محض وحشیانہ طاقت کی وضاحت ہے، قانونی انصاف کی نہیں۔",
    bench: "5-Judge Bench (headed by Mr. Justice Hamoodur Rahman, C.J.)",
    advocates: {
      forPetitioner: "Mr. M. Anwar, Senior Advocate Supreme Court",
      forRespondent: "Mr. Yahya Bakhtiar, Attorney General for Pakistan"
    },
    fullText: `IN THE SUPREME COURT OF PAKISTAN
(Appellate Jurisdiction)

PRESENT:
MR. JUSTICE HAMOODUR RAHMAN, C.J.
MR. JUSTICE MUHAMMAD YAQUB ALI
MR. JUSTICE SAJJAD AHMAD JAN
MR. JUSTICE WAHEEDUDDIN AHMAD
MR. JUSTICE SALAHUDDIN AHMED

CIVIL APPEAL NO. 19 OF 1972
(On appeal from the judgment of the Lahore High Court dated 15.01.1972)

Asma Jilani                                        ... Petitioner
VERSUS
Government of the Punjab & Others                  ... Respondents

For the Petitioner:    Mr. M. Anwar, Senior Advocate, Supreme Court.
For the Respondents:   Mr. Yahya Bakhtiar, Attorney General for Pakistan.
Date of Hearing:       20th April, 1972

JUDGMENT
HAMOODUR RAHMAN, C.J.- This Court is called upon to review its own constitutional jurisprudence. We are asked to re-examine our decision in the case of The State v. Dosso (PLD 1958 SC 533), which laid down the rule that a successful coup d'état or martial law revolution is a recognized method of changing a legal order, and that the military commander's decrees become the supreme law of the land, overriding all previous constitutional checks.

2. This challenge is raised by Mst. Asma Jilani, whose father Malik Ghulam Jilani has been detained under Martial Law Regulation No. 78, which shields itself from judicial review. 

3. We must approach this question with constitutional humility and judicial courage. The holding in Dosso's case relied heavily on the writings of the Austrian jurist Hans Kelsen and his theory of 'Grundnorm' or the basic norm of a society. Kelsen proposed that if a revolution succeeds, the old constitutional order is collapsed and the new, effective commander's order becomes the new basic legal norm.

4. We find Kelsen's theory to have been misunderstood and misapplied in Dosso's case. Kelsen was an academic analyst of international law, not a judge outlining domestic constitutional powers. To declare that brute force of a military commander becomes legal simply because it is effective is a degradation of the judicial oath. A coup is an act of treason, not a legal technique.

5. In Pakistan, our constitutional framework is built on a unique moral and political foundation. That foundation is the Objectives Resolution of 1949, which has been the guiding preamble of our supreme charters. It declares that sovereignty belongs to Allah Almighty alone, and the authority delegated to the state of Pakistan is to be exercised as a sacred trust through the chosen democratic representatives of the people.

6. Under this foundational trust, no single individual, whether military officer or executive dictator, can unilaterally seize power, suspend the supreme law, or dissolve the assemblies. Any such attempt is an act of usurpation and an unconstitutional betrayal. General Yahya Khan was not a legal ruler; he was a usurper who held power through military coercion. All his decrees, martial law regulations, and actions are void ab initio.

7. The judiciary must remain the ultimate shield of constitutional supremacy. We hereby overrule the judgment in The State v. Dosso. The doctrine of necessity cannot validate usurpation. The detention of Malik Ghulam Jilani is declared completely illegal, and the appeal is allowed.

SD/- JUSTICE HAMOODUR RAHMAN, C.J.
SD/- JUSTICE MUHAMMAD YAQUB ALI
SD/- JUSTICE SAJJAD AHMAD JAN
SD/- JUSTICE WAHEEDUDDIN AHMAD
SD/- JUSTICE SALAHUDDIN AHMED

TRUE ATTESTED RECORD COPY/
REGISTRAR OF THE SUPREME COURT, RAWALPINDI.`
  },
  {
    id: "scp-1967-v7",
    title: "Khurshid Bibi v. Baboo Muhammad Amin",
    citation: "PLD 1967 SC 97",
    year: 1967,
    court: "SCP",
    courtName: "Supreme Court of Pakistan",
    category: "Family",
    date: "March 15, 1967",
    subject: "The Absolute Right to Khula: A Muslim wife has an absolute and unilateral right to seek a Khula dissolution of marriage through a court of law, irrespective of the husband's consent, subject to returning her dower.",
    facts: "A wife sought a judicial decree for the dissolution of her marriage under the option of 'Khula' because of extreme domestic incompatibility, stating she could no longer live with her husband within the limits of Allah. The husband refused to grant divorce, and argued that under Islamic jurisprudence, a marriage cannot be dissolved by Khula unless the husband explicitly consents to it.",
    issues: [
      "Can a family court dissolve a marriage by Khula if the husband does not consent?",
      "What are the direct financial conditions (restitution/dower return) of a Khula divorce?"
    ],
    decision: "The Supreme Court ruled in favour of the wife, establishing a monumental landmark in Pakistani matrimonial law. The Court held that a Muslim wife has an absolute right to seek a judicial Khula dissolution of marriage. The family court has full authority to grant this decree regardless of the husband's opposition, upon determining that the spouses can no longer live in harmony, on the condition that the wife returns her matrimonial dower (Mahr).",
    urduDecision: "سپریم کورٹ نے اہلیہ کے حق میں تاریخی فیصلہ صادر کیا۔ عدالت نے قرار دیا کہ ایک مسلم بیوی کو اسلامی قانون اور خاندانی ضوابط کے تحت یکطرفہ طور پر خلع (Khula) حاصل کرنے کا مطلق حق حاصل ہے۔ فیملی کورٹ شوہر کی مرضی یا رضامندی کے بغیر بھی خلع طلاق کی ڈگری جاری کرنے کی مکمل مجاز ہے، بشرطیکہ بیوی اپنا مہر (Dower) واپس کرنے کی حامی بھرے۔",
    ratioDecidendi: "In Islamic law, marriage is a civil contract rather than a permanent sacrament. The Quranic injunctions protect wives from being forced to live in abusive or dysfunctional marriages. If a wife develops an intense hatred or incompatibility such that she cannot observe the limits of Allah, she may return the dower, and the Qazi (Judge) has the autonomous authority to dissolve the matrimonial contract via Khula, overriding the husband's veto.",
    urduRatio: "اسلامی قانون میں شادی ایک سماجی سول معاہدہ ہے نہ کہ کوئی ناقابلِ تنسیخ رسم۔ قرآنی احکامات بیوی کو کسی ناپسندیدہ یا ناکام ازدواجی رشتے میں زبردستی بندھے رہنے سے تحفظ فراہم کرتے ہیں۔ اگر بیوی کے دل میں شوہر کی طرف سے شدید نفرت یا ناطاقتی پیدا ہو جائے کہ وہ حدود اللہ کے اندر نہ رہ سکیں، تو وہ مہر واپس کر کے عدالت (قاضی) کے ذریعے طلاق لے سکتی ہے اور اس کے لیے شوہر کی رضامندی شرط نہیں ہے۔",
    bench: "3-Judge Bench (headed by Mr. Justice S.A. Rahman, J.)",
    advocates: {
      forPetitioner: "Advocate Sheikh Masood, ASC",
      forRespondent: "Advocate Muhammad Shafi, ASC"
    },
    fullText: `IN THE SUPREME COURT OF PAKISTAN
(Appellate Jurisdiction)

PRESENT:
MR. JUSTICE S.A. RAHMAN
MR. JUSTICE B.Z. KAIKAUS
MR. JUSTICE HAMOODUR RAHMAN

CIVIL APPEAL NO. 45 OF 1966

Mst. Khurshid Bibi                                 ... Petitioner
VERSUS
Baboo Muhammad Amin                                ... Respondent

For the Petitioner:    Sheikh Masood, ASC.
For the Respondent:    Muhammad Shafi, ASC.
Date of Hearing:       15th March, 1967

JUDGMENT
S.A. RAHMAN, J.- The legal issue in this matrimonial appeal is of premier importance in Islamic personal law. We are called upon to decide whether a Muslim wife has a unilateral right to obtain a dissolution of marriage under the principle of Khula, through judicial intervention, without the consent of her husband.

2. The appellant, Mst. Khurshid Bibi, instituted a suit for the dissolution of her marriage in the Civil Court. She alleged that her husband Baboo Muhammad Amin was abusive, that they had been separated for years, and that she felt an intense, insurmountable aversion to him. She stated she was willing to surrender her entire dower (Mahr) in exchange for her freedom. The husband contested the suit, arguing that in Islam, Khula is a mutual contract of divorce and cannot be completed unless the husband accepts the proposal.

3. We have examined the primary sources of Islamic Jurisprudence, including the relevant verses of Surah Al-Baqarah and the precedents set during the lifetime of the Holy Prophet (PBUH) - specifically the landmark case of Jamilah, the wife of Thabit bin Qais, where the Holy Prophet (PBUH) ordered the husband to accept back his orchard and divorce his wife.

4. If a wife can establish before the Court that she cannot live with her husband within the limits of Allah (meaning she cannot fulfill her emotional and marital obligations due to natural incompatibility or hatred), the Court becomes the guardian of her welfare. To force her to remain bound in a hollow marriage would drive her to sin and violate her constitutional and personal liberty.

5. Marriage in Islam is a civil contract, not a religious sacrament. Since it is a contract, it can be dissolved by consensus (Mubarat) or by the Court on grounds of breach or severe distress (Khula). The husband does not possess a absolute veto to keep his wife in a state of servitude. The Qazi (Family Court Judge) is fully empowered to dissolve the marriage by Khula, even if the husband actively objects.

6. The financial consequence of Khula is that the wife must restore any benefit she received from the husband as Mahr. She is not entitled to post-divorce maintenance, though she is entitled to child maintenance.

7. The appeal is, therefore, allowed. The marriage between the parties is dissolved by Khula, subject to the appellant surrendering her dower rights as determined by the trial court.

SD/- JUSTICE S.A. RAHMAN
SD/- JUSTICE B.Z. KAIKAUS
SD/- JUSTICE HAMOODUR RAHMAN

CERTIFIED TRUE ATTESTED STATEMENT/
REGISTRAR OF THE SUPREME COURT OF PAKISTAN.`
  },
  {
    id: "lhc-2026-v8",
    title: "Muhammad Aslam v. Mst. Razia Sultana",
    citation: "2026 LHC 4920",
    year: 2026,
    court: "LHC",
    courtName: "Lahore High Court",
    category: "Family",
    date: "March 15, 2026",
    subject: "Paramountcy of Child Welfare in Custody: Minor custody disputes cannot be decided on mechanical maternal preferences or static ages; child's psychological and educational welfare is the supreme consideration.",
    facts: "A father petitioned for the custody of his 9-year-old son under the Guardians and Wards Act 1890. The mother resisted, arguing that under traditional Muslim schools of law, the mother has an absolute right of custody (Hizanat) over a male child until he reaches the age of 7. She argued that the family court exceeded its authority by considering the father's superior economic resources and educational opportunities.",
    issues: [
      "Can the court override traditional age limits for maternal custody (Hizanat) to secure the child's welfare?",
      "What factors determine the psychological interest and welfare of a minor in Pakistani custody disputes?"
    ],
    decision: "The Lahore High Court dismissed the mother's revision petition, upholding the custody order in favour of the father. The Court ruled that child custody rules are subordinate to the statutory mandate of Section 17 of the Guardians and Wards Act, which makes the child's mental, physical, and moral welfare ('paramount consideration') supreme. Superior educational opportunities and a stable, abuse-free domestic environment presented by the father justified the custody transfer.",
    urduDecision: "لاہور ہائی کورٹ نے اہلیہ کی اپیل مسترد کرتے ہوئے بچے کی تحویل والد کے سپرد کرنے کا فیصلہ برقرار رکھا۔ عدالت نے قرار دیا کہ بچوں کے کسٹڈی قوانین میں ماں کی روایتی عمر کی حد پر غور ثانوی ہے۔ گارڈینز اینڈ وارڈز ایکٹ کے سیکشن 17 کے تحت، بچے کی ذہنی، جسمانی، اخلاقی اور تعلیمی بہبود (Welfare) کو بنیادی ترین اور سپریم عنصر گردانا جائے گا۔",
    ratioDecidendi: "In legal disputes under the Guardians and Wards Act 1890, the welfare of the minor ('paramount factor') overrides all static, mechanical, or traditional rules of custody. There is no inflexible right in favour of either parent. Economic superiority alone is not a ground, but a child's psychological alignment, stable academic continuity, and a mother's subsequent marriage to a stranger ('Ghair-Mahram') are highly significant factors that justify custody modification.",
    urduRatio: "گارڈینز اینڈ وارڈز ایکٹ 1890 کے تحت تمام قانونی تنازعات میں، بچے کی بہبود ہی وہ واحد ترجیحی عنصر ہے جو ماں یا باپ کی کسٹڈی کی تمام روایتی حدود اور عمر کی قدغنوں پر سبقت رکھتا ہے۔ کسٹڈی کا کوئی بھی حق غیر لچکدار یا مطلق نہیں ہے۔ صرف بہتر معاشی حالات کسٹڈی کی ضمانت نہیں ہیں، تاہم تعلیمی تسلسل، ذہنی مطابقت اور ماں کی غیر محرم سے دوسری شادی ایسے عوامل ہیں جن کی بنیاد پر کسٹڈی والد کو دی جا سکتی ہے۔",
    bench: "Single Bench of Mr. Justice Tariq Saleem Sheikh",
    advocates: {
      forPetitioner: "Advocate Malik Ahsan Saleem, LHC",
      forRespondent: "Advocate Mst. Razia Sultana (in person)"
    },
    fullText: `IN THE LAHORE HIGH COURT, LAHORE
(Judicial Department)

PRESENT:
MR. JUSTICE TARIQ SALEEM SHEIKH

CIVIL REVISION NO. 4920 OF 2026

Muhammad Aslam                                     ... Petitioner
VERSUS
Mst. Razia Sultana                                 ... Respondent

For the Petitioner:    Advocate Malik Ahsan Saleem.
For the Respondent:    Advocate Mst. Razia Sultana (in person).
Date of Hearing:       15th March, 2026

JUDGMENT
TARIQ SALEEM SHEIKH, J.- This civil revision petition raises an emotional yet vital question in family courts administration: how does a court balance traditional rules of Islamic custody (Hizanat) with the modern judicial command to protect the welfare of the minor?

2. The petitioner, Muhammad Aslam, sought custody of his minor son, aged 9 years. The trial court and the appellate court both ruled in his favor, directing the mother to hand over custody. The respondent mother challenges these concurrent findings, asserting that as a mother, she holds a natural, inviolable right to the child's custody, and that his relocation will disrupt his life.

3. We have read the statutory rules. Under Section 17 of the Guardians and Wards Act 1890, the Court, in appointing a guardian, must be guided by what, in the circumstances, appears to be for the welfare of the minor. Section 25 outlines that the primary criteria is always the child's ultimate interest.

4. While our personal law outlines standard guidelines for the age at which a father takes over custody (e.g., 7 years for a boy, and puberty for a girl), these rules are not rigid mathematical formulas. They must always bend before the single, paramount consideration: the welfare of the child.

5. In this case, the record shows that the respondent mother has remarried a person who is a stranger to the child (a Ghair-Mahram). Under Islamic law, once a mother remarries a Ghair-Mahram, she loses her primary right of Hizanat as the child may face neglect in the new household. Furthermore, the petitioner has enrolled the child in a reputable school and demonstrated a supportive environment, whereas the child was missing formal education while in the mother's village.

6. The child, when interviewed by this Court in chambers, expressed a balanced affection but voiced a desire to continue his studies in Lahore under the guidance of his father.

7. In custody matters, the Court acts as parens patriae (the parent of the country). We must look beyond parental egos and check where the child will grow into a balanced, adjusted citizen. I find no legal defect or jurisdictional error in the judgments of the family courts below. The petition is dismissed.

SD/- TARIQ SALEEM SHEIKH, JUDGE
LAHORE HIGH COURT, LAHORE.

AUTHENTIC RECORD COPY/
SUPERINTENDENT CIVIL BRANCH, LAHORE HIGH COURT.`
  },
  {
    id: "scp-2026-v9",
    title: "The State v. Imtiaz Ahmad & Others",
    citation: "2026 SCP 102",
    year: 2026,
    court: "SCP",
    courtName: "Supreme Court of Pakistan",
    category: "Criminal",
    date: "March 10, 2026",
    subject: "Digital Evidence Admissibility Guidelines: Establishing absolute parameters of security, hash-verification, hash-integrity, and forensic isolation for admitting encrypted messaging (WhatsApp/Signal) in criminal trials.",
    facts: "In a high-profile corporate embezzlement and fraud trial, the prosecution relied on screenshots of encrypted WhatsApp chats and audio recordings recovered from the accused's smartphone. The accused argued that digital files are easily manipulated and that since the original smartphone device was not sent to a certified forensic lab immediately, the digital transcripts are inadmissible under Article 164 of the Qanun-e-Shahadat Order 1984.",
    issues: [
      "What is the standard of proof and chain of custody required to admit digital chat records in evidence?",
      "Can PDF printed screenshots of chats be treated as primary or secondary evidence of data contents?"
    ],
    decision: "The Supreme Court accepted the appeals of the defense in part, setting aside the convictions based purely on raw screenshots. The Court laid down dynamic, mandatory guidelines for admitting digital evidence. The Court ruled that printed screenshots or raw transcripts are secondary evidence and are entirely inadmissible unless accompanied by a certified Forensic Integrity Audit, a verifiable cryptographic hash report of the source database, and proof of an unbroken chain of physical custody of the smartphone device.",
    urduDecision: "سپریم کورٹ نے ملزمان کی اپیل جزوی طور پر منظور کرتے ہوئے محض واٹس ایپ اسکرین شاٹس کی بنیاد پر سنائی گئی سزا منسوخ کر دی۔ عدالت نے ڈیجیٹل ثبوتوں کی عدالتی قبولیت کے لیے سخت ترین گائیڈ لائنز وضع کیں۔ فیصلہ دیا گیا کہ واٹس ایپ چیٹس کے پرنٹس یا اسکرین شاٹ بنیادی ثبوت نہیں مائل ہیں اور یہ تفصیلی فارنزک آڈٹ رپورٹ، کرپٹوگرافک ہیش کوڈ (Cryptographic Hash) اور موبائل فون کی محفوظ شدہ زنجیر برآمدگی (Chain of Custody) کے بغیر ناقابلِ قبول ثبوت ہوں گے۔",
    ratioDecidendi: "Under Article 164 of the Qanun-e-Shahadat Order 1984, digital and electronic evidence is admissible, but its weight depends on the verification of its integrity and authenticity. Printouts of messaging apps are secondary evidence susceptible to deep manipulation and cannot bypass the 'Chain of Custody' test. There must be: 1) Forensic physical extraction of database files; 2) Cryptographic hashing to prevent modification; 3) Unbroken physical custody of devices; and 4) Certified expert forensic evidence under Section 510 CrPC.",
    urduRatio: "قانونِ شہادت کے آرٹیکل 164 کے تحت ڈیجیٹل اور کمپیوٹرائزڈ ثبوت عدالت میں پیش کیے جا سکتے ہیں، لیکن ان کی قانونی حیثیت ان کی شفافیت اور صداقت کی تصدیق پر منحصر ہے۔ میسجنگ ایپس کے پرنٹ آؤٹس ثانی ثبوت ہیں جن میں آسانی سے تبدیلی کی جا سکتی ہے، لہذا یہ زنجیرِ تحویل (Chain of Custody) کے سخت ٹیسٹ کے بغیر قابلِ قبول نہیں ہیں۔ اس کے لیے ضروری ہے: ۱) ڈیٹا بیس فائلوں کی فرانزک برآمدگی، ۲) ہیش ویلیوز کے ذریعے ڈیٹا کی حفاظت، ۳) موبائل آلات کی بغیر کسی تعطل کے محفوظ تحویل، اور ۴) مستند فرانزک ماہر کی گواہی۔",
    bench: "3-Judge Bench (headed by Mr. Justice Yahya Afridi, Mr. Justice Jamal Khan Mandokhail, and Mr. Justice Syed Hasan Azhar Rizvi)",
    advocates: {
      forPetitioner: "Barrister Ali Zafar, ASC",
      forRespondent: "Prosecutor General Punjab (ASC)"
    },
    fullText: `IN THE SUPREME COURT OF PAKISTAN
(Appellate Jurisdiction)

PRESENT:
MR. JUSTICE YAHYA AFRIDI
MR. JUSTICE JAMAL KHAN MANDOKHAIL
MR. JUSTICE SYED HASAN AZHAR RIZVI

CRIMINAL APPEAL NO. 102 OF 2026
(On appeal from the judgment of the High Court of Sindh dated 12.11.2025 in Criminal Appeal No. 490/2025)

Imtiaz Ahmad                                       ... Petitioner
VERSUS
The State                                          ... Respondent

For the Petitioner:    Barrister Ali Zafar, ASC.
For the Respondent:    Prosecutor General Sindh (ASC).
Date of Hearing:       10th March, 2026

JUDGMENT
YAHYA AFRIDI, J.- The rapid evolution of technology has fundamentally expanded the arena of criminal evidence. This Court is tasked with answering a critical question: what are the precise parameters and procedural baselines required to render digital communications - specifically encrypted WhatsApp messages and audio recordings - admissible in a criminal trial?

2. The appellant, Imtiaz Ahmad, was convicted under Section 409 and 420 of the Pakistan Penal Code of embezzlement. The prosecution's case rested primarily on 20 printed screenshots of WhatsApp conversations between the appellant and his subordinate, which were attached to the FIR. Crucially, the smartphone on which these chats occurred was never forensically imaged, and the WhatsApp database was not extracted or cryptographic-hashed at the time of recovery.

3. We have analyzed Article 164 of the Qanun-e-Shahadat Order 1984, which permits the Court to receive any evidence that has become available through modern devices or techniques. While this provision is intentionally open and dynamic to prevent law enforcement from lagging behind technology, it does not act as an escape clause from basic evidentiary standards.

4. Digital data, by its very nature, is highly volatile, easily manipulated, altered, or fabricated. Screenshots of chat transcripts can be mocked up or manipulated with simple applications. Therefore, raw printed screenshots cannot be admitted as primary evidence under Article 72 or 73 of the Qanun-e-Shahadat Order. They are secondary evidence and are subject to the strict rules of secondary admissibility.

5) To establish the integrity of digital evidence, the prosecution must prove an unbroken and secure 'Chain of Custody' of the physical medium (the phone or computer) and the digital medium. We hereby lay down the following four-tier mandatory test:
i) Forensics First: The physical device must be sealed in an anti-static, Faraday bag immediately upon recovery, and dispatched within 72 hours to a certified forensic laboratory.
ii) Image and Hash Verification: The expert must generate a bit-steam forensic image of the storage, and calculate its mathematical cryptographic hash (such as SHA-256 or MD5). This hash must match prior and subsequent stages to prove the data has not been modified.
iii) Database Analysis: The expert must extract the raw database file (such as the SQLite database of encrypted applications) rather than relying on visible screenshots.
iv) Chain Security: The prosecutor must present a detailed custody log showing every hand that touched the device from recovery to courtroom delivery.

6. Since the prosecution in this case bypassed all forensic integrity tests, treated raw screenshots as final proof, and neglected to secure the physical smartphone device, the admissibility of the chats has collapsed. It would be highly unsafe to uphold a conviction of embezzlement on unverified screen printouts.

7. The appeal is, accordingly, accepted. The conviction is set aside.

SD/- JUSTICE YAHYA AFRIDI
SD/- JUSTICE JAMAL KHAN MANDOKHAIL
SD/- JUSTICE SYED HASAN AZHAR RIZVI

OFFICIAL CERTIFIED COURT DOCUMENT/
ASSISTANT REGISTRAR, SUPREME COURT OF PAKISTAN, ISLAMABAD.`
  },
  {
    id: "scp-2025-v10",
    title: "Mst. Shahnaz Bibi v. Khalid Mahmood",
    citation: "2025 SCP 42",
    year: 2025,
    court: "SCP",
    courtName: "Supreme Court of Pakistan",
    category: "Family",
    date: "November 18, 2025",
    subject: "Realistic Child Maintenance Proportionality: Child maintenance allowances cannot be set at nominal or arbitrary levels; they must correspond directly to the father's real assets, tax records, and lifestyle.",
    facts: "A divorced mother requested child maintenance of Rs. 40,000 per month for her two school-going children. The father, a commercial contractor, claimed in the family court that his income was only Rs. 25,000 per month and offered to pay Rs. 4,000 per month. The lower family courts accepted the father's claim and decreed a nominal allowance of Rs. 6,000 per month. The mother appealed, arguing that the father owned multiple luxury vehicles and registered lands which the court neglected to evaluate.",
    issues: [
      "How should family courts determine the real maintenance capability of a father who conceals his income?",
      "Can family courts compel third-party disclosures (FBR/banks) to verify a parent's financial status under the Family Courts Act?"
    ],
    decision: "The Supreme Court accepted the mother's appeal, setting aside the nominal decrees. The Court established that child maintenance calculation must be proportional to the father's real wealth and social standard. The Court ordered the father to pay Rs. 35,000 per month and declared that family courts have full inquisition powers to summon bank records and tax filings of a father to expose concealed incomes.",
    urduDecision: "سپریم کورٹ نے والدہ کی اپیل منظور کرتے ہوئے ماتحت فیملی کورٹ کے معمولی نفقہ کے فیصلے کو منسوخ کر دیا۔ عدالت نے گائیڈ لائنز جاری کیں کہ بچوں کا خرچہ محض شوہر کی بتائی گئی زبانی آمدنی پر طے کرنے کے بجائے اس کے حقیقی اثاثوں، لائف اسٹائل اور ٹیکس گوشواروں کے متناسب ہونا چاہیے۔ عدالت نے فیملی ججز کو اختیار دیا کہ وہ چھپے ہوئے اثاثوں کو بے نقاب کرنے کے لیے بینک ریکارڈ اور ایف بی آر سے معلومات طلب کر سکتے ہیں۔",
    ratioDecidendi: "Under Section 5 of the West Pakistan Family Courts Act 1964, the calculation of maintenance is a constitutional obligation to protect the custody child from destitution. A father cannot hide behind unverified verbal claims of poverty when his real assets (car registries, tax payments, company ownerships) indicate wealth. The calculation must account for real inflation, school fees, and medical cost. Family courts should proceed inquisitorially, ordering independent asset discovery.",
    urduRatio: "فیملی کورٹس ایکٹ 1964 کے مطابق بچے کا خرچہ اور نفقہ متعین کرنا ایک آئینی قانونی ذمہ داری کا حصہ ہے تاکہ بچوں کو معاشی بے یار و مددگار ہونے سے بچایا جا سکے۔ باپ اپنے وسائل چھپا کر غریبی کا جھوٹا عذر پیش نہیں کر سکتا اگر اس کے متعلقہ اثاثے (مثلاً گاڑی رجسٹریشن، بینک بیلنس، ایف بی آر ریکارڈ) خوشحالی کا پتہ دیں۔ خرچے کا تعین تعلیمی اخراجات، بجلی اور دیگر ضروریات زندگی کے حقیقی بوجھ کے مطابق ہونا چاہیے اور فیملی جج اس کی خود تفتیش کا مجاز ہے۔",
    bench: "2-Judge Bench (headed by Mr. Justice Mansoor Ali Shah and Mr. Justice Ayesha A. Malik)",
    advocates: {
      forPetitioner: "Advocate Mst. Shahnaz Bibi (in person)",
      forRespondent: "Advocate Tariq Mehmood, ASC"
    },
    fullText: `IN THE SUPREME COURT OF PAKISTAN
(Appellate Jurisdiction)

PRESENT:
MR. JUSTICE MANSOOR ALI SHAH
MS. JUSTICE AYESHA A. MALIK

CIVIL PETITION NO. 809 OF 2025
(On appeal from the judgment of the Lahore High Court dated 10.05.2025 in Writ Petition No. 1022/2025)

Mst. Shahnaz Bibi                                  ... Petitioner
VERSUS
Khalid Mahmood                                     ... Respondent

For the Petitioner:    In person (with Adv. Hina Jilani, ASC)
For the Respondent:    Advocate Tariq Mehmood, ASC.
Date of Hearing:       18th November, 2025

JUDGMENT
AYESHA A. MALIK, J.- This case exposes a persistent failure in our family court adjudication procedures. It concerns the standard and parameters applied by family judges in evaluating child maintenance.

2. The petitioner, Mst. Shahnaz Bibi, has two minor children. Following her divorce, she sued for maintenance, pointing out that both children attend a recognized school and their combined monthly tuition and transport stands at Rs. 15,000. She requested Rs. 40,000 total per month. The respondent, Khalid Mahmood, asserted he in an ordinary salesman with a salary of only Rs. 25,000, and offered to pay Rs. 4,000 total. The family court, without calling for financial records, decreedRs. 6,000 per month, which was upheld by the Lahore High Court as a 'fair exercise of discretion'.

3. We are astounded by the perfunctory manner in which these calculations are made. Maintenance of children is not a form of charity; it is an absolute statutory and Shariah obligation of the father. To decree Rs. 6,000 total for two growing children in an era of double-digit inflation is to force them into drop-out and destitution.

4. When a father claims he has limited income, but the mother asserts he is a man of means, a family court must not sit as a passive umpire. The West Pakistan Family Courts Act 1964 establishes an inquisitorial model. Under Section 17 and Section 20, the family judge is fully empowered to summon bank statements, company registries, tax returns from the Federal Board of Revenue (FBR), and vehicle records from the Excise and Taxation Department.

5. In this case, upon our directions during revision, the FBR tax records of Khalid Mahmood were produced. They revealed he is the principal shareholder of 'Mahmood Builders & Contractors', generated an annual revenue of Rs. 18,000,000, and paid substantial income taxes. The father had committed perjury before the family court.

6. The standard of maintenance must correspond proportionally to:
i) The actual financial capability and real standard of life of the father.
ii) The absolute minimum required for healthy nutrition, stable residence, standard clothing, and medical cover.
iii) The actual, documented education costs and fees of the minor.

7. Pergury before a family court must be dealt with severely. The father is ordered to pay Rs. 35,000 total per month to the petitioner, with an automatic 10% annual increase to absorb inflationary increases. The petition is allowed.

SD/- JUSTICE AYESHA A. MALIK
SD/- JUSTICE MANSOOR ALI SHAH

CERTIFIED TRUE ATTESTED ARCHIVE EXPEDITION/
DEPUTY REGISTRAR (JUDICIAL), SUPREME COURT OF PAKISTAN.`
  }
];

export function generateVirtualPrecedents(count: number, courtAbbrevs?: string[]): EmbeddedCase[] {
  const categories = ['Inheritance', 'Family', 'Criminal', 'Civil', 'Constitutional', 'Taxation'] as const;
  let courts = [
    { abbrev: 'SCP', name: 'Supreme Court of Pakistan' },
    { abbrev: 'LHC', name: 'Lahore High Court' },
    { abbrev: 'SHC', name: 'Sindh High Court' },
    { abbrev: 'FSC', name: 'Federal Shariat Court' },
    { abbrev: 'IHC', name: 'Islamabad High Court' },
    { abbrev: 'PHC', name: 'Peshawar High Court' },
    { abbrev: 'BHC', name: 'Balochistan High Court' },
    { abbrev: 'FCCP', name: 'Federal Constitutional Court' }
  ];

  if (courtAbbrevs && courtAbbrevs.length > 0) {
    courts = courts.filter(c => courtAbbrevs.includes(c.abbrev));
  }

  const advocatesList = [
    { forPetitioner: "Barrister Azmat Hussain, ASC", forRespondent: "Adv. Saqlain Minhas, ASC" },
    { forPetitioner: "Hina Jilani, ASC", forRespondent: "Tariq Mehmood, ASC" },
    { forPetitioner: "Raza Rabbani, ASC", forRespondent: "Attorney General of Pakistan" },
    { forPetitioner: "Aitizaz Ahsan, ASC", forRespondent: "Advocate General, Punjab" },
    { forPetitioner: "Asma Jahangir (Legacy-Case)", forRespondent: "State Attorneys" },
    { forPetitioner: "Advocate Malik Muhammad Tariq, ASC", forRespondent: "Advocate Chaudhry Abdul Majeed, ASC" }
  ];

  const petitionerNames = ["Muhammad", "Mst. Shahnaz", "Kamran", "Mian Nawaz", "Ayesha", "Zahid", "Fatima", "Amina", "Imran", "Tariq", "Hammad", "Nighat", "Sardar", "Amjad", "Farzana"];
  const familyNames = ["Bibi", "Ahmed", "Khan", "Iqbal", "Sharif", "Latif", "Raza", "Mahmood", "Yousaf", "Ali", "Haque", "Qureshi", "Butt", "Dar", "Malik"];
  const respondents = ["The State", "Province of Punjab", "Federal Government", "FBR Commissioner", "Khalid Mahmood", "Mst. Kaneez Fatima", "Excise Department", "Zafar Hussain", "State Counsel", "Province of Sindh"];

  const templates = {
    Inheritance: {
      subject: "Co-ownership Partition & Relinquishment: Unilateral block or transfer of inherited assets by co-heirs without written registered deeds is void.",
      facts: "The sisters challenged an informal village property mutation recorded by their brothers without their physical presence and consent. The brothers claimed a verbal relinquishment took place during a condolence meeting.",
      decision: "Set aside the mutation, reinstating sisters' shares and declaring that verbal family settlement cannot override compulsory land registration acts.",
      urduDecision: "زبانی خاندانی تصفیہ کے تحت بہنوں کے ملکیتی حصوں سے محرومی کا انتقال باطل قرار دے کر تمام ورثاء کا رجسٹرڈ ہبہ نامہ لازمی قرار دیا گیا۔",
      ratio: "Inherited property vests strictly inside Shariah heirs automatically at the exact moment of predecessor death. Extinguishing title requires a registered relinquishment deed.",
      urduRatio: "مورث کی وفات پر جائیداد قانونی طور پر خودکار انداز میں منتقل ہو جاتی ہے۔ اس منتقلی کو محض زبانی گفتگو سے ختم یا روکا نہیں جا سکتا۔"
    },
    Criminal: {
      subject: "Dishonoured Cheques Sec 489-F PPC: Dishonest intent must be proved; bouncing for reasons other than bad faith does not trigger standard criminal liability.",
      facts: "An entrepreneur issued a cheque as guarantee for business supply. The supply was defective and payment was stopped. The supplier registered an FIR under 489-F PPC.",
      decision: "Quashed the FIR, establishing that a bounced cheque issued purely as a post-dated security guarantee does not satisfy the dishonesty condition.",
      urduDecision: "سیکیورٹی کے طور پر دیے گئے چیک کے باؤنس ہونے کی بنیاد پر 489-F کا مقدمہ خارج کر دیا گیا کیونکہ بددیانتی کا عنصر موجود نہ تھا۔",
      ratio: "To sustain a conviction under Section 489-F PPC, the prosecution must strictly prove that the check was issued with active dishonest intent, not simply as an indemnity.",
      urduRatio: "سیکشن 489-F پی پی سی کے تحت جرم کے قیام کے لیے استغاثہ پر یہ ثابت کرنا لازم ہے کہ چیک بدنیتی سے جاری کیا گیا تھا، محض تصفیہ ضمانت نہیں۔"
    },
    Family: {
      subject: "Realistic Child Maintenance Proportionality: Child maintenance allowances must correspond directly to father's real tax filing and assets.",
      facts: "The father offered Rs. 3,000 per month for school kids, claiming poor salary. Independent discovery of FBR earnings showed massive income of his private contracting firm.",
      decision: "Decreed Rs. 30,000 per month, granting family courts full active powers to compel bank and FBR tax statement discovery.",
      urduDecision: "والد کے ایف بی آر ریکارڈ کی چھان بین کر کے بچوں کا ماہانہ خرچہ بڑھا کر 30,000 روپے مقرر کیا گیا اور فیملی ججز کو تفتیشی اختیارات تفویض ہوئے۔",
      ratio: "Child maintenance is a foundational statutory obligation. Courts must proceed inquisitorially, ordering tax and banking discovery rather than accepting oral claims of poverty.",
      urduRatio: "بچوں کا نفقہ والد کی اولین ذمہ داری ہے۔ عدالتوں کو زبانی بیانات قبول کرنے کی بجائے ایف بی آر اور بینک ریکارڈ کی بنیاد پر تصفیہ کرنا چاہیے۔"
    },
    Civil: {
      subject: "Land Revenue Mutation (Inteqal): Revenue records do not create or extinguish proprietary title; they serve purely fiscal mapping.",
      facts: "A buyer purchased land and got a local mutation. The seller subsequently sold the same parcel via a formally registered deed to another party who sued to evict.",
      decision: "Decided in favor of the registered deed holder, reaffirming that a revenue mutation does not override a registered transfer deed.",
      urduDecision: "آمدنی ریکارڈ (انتقال) کو رجسٹری کا نعم البدل تسلیم نہیں کیا گیا؛ ملکیتی حق صرف مصدقہ فیملی رجسٹری سے ہی ثابت ہوتا ہے۔",
      ratio: "Mutations are maintained exclusively for land-tax liability mapping. Under Section 17 of the Registration Act, registered transfer deeds enjoy absolute legal superiority.",
      urduRatio: "پٹواری ریکارڈ کا انتقال ملکیتی حق پیدا نہیں کرتا۔ رجسٹریشن ایکٹ کے تحت رجسٹرڈ سیل ڈیڈ (رجسٹری) کو قانونی فوقیت حاصل ہوتی ہے۔"
    },
    Constitutional: {
      subject: "Article 10-A Fair Trial safeguards: Prompt presentation before judicial magistrate within 24 hours is mandatory.",
      facts: "An activist was held in custody by counter-terrorism forces for 6 days without a public remand warrant. State argued emergency national security protections apply.",
      decision: "Declared the detention unlawful, directing swift action against the officers for abandoning Article 10-A judicial review timelines.",
      urduDecision: "مجسٹریٹ کے سامنے پیش کیے بغیر 24 گھنٹے سے زیادہ پولیس حراست کو غیر قانونی اور آرٹیکل 10-A کے منافی قرار دیا گیا۔",
      ratio: "National security concerns do not permit the suspension of basic constitutional protections. Fair trial and judicial remand are inalienable rights.",
      urduRatio: "قومی سلامتی کے نام پر بھی کسی شہری کے بنیادی حقوق اور منصفانہ قانونی طریقہ کار (Article 10-A) کو معطل نہیں کیا جا سکتا۔"
    },
    Taxation: {
      subject: "Exemption of agricultural incomes under provincial acts: Assessment of federal income tax cannot double levy local agri revenue streams.",
      facts: "An orchard owner was assessed for massive federal levy under Income Tax Ordinance 2001. He proved that the source of income is purely land-crop extraction certified by Land Revenue officers.",
      decision: "Allowed the petition, setting aside the federal FBR assessment and enforcing provincial absolute exemptions for active crops.",
      urduDecision: "زرعی آمدنی پر وفاقی ٹیکس عائد کرنے کا ایف بی آر کا فیصلہ معطل کیا گیا کیونکہ صوبائی ایکٹ کے تحت زرعی آمدن مستثنیٰ ہے۔",
      ratio: "Agri income is strictly protected under provincial jurisdictions in Pakistan. Federal assessments must strip crop-revenue streams before computing commercial tax liabilities.",
      urduRatio: "پاکستان میں زرعی آمدن آئینی طور پر صوبائی اختیار میں آتی ہے اور ایف بی آر اس پر بلاواسطہ ٹیکس عائد نہیں کر سکتا۔"
    }
  };

  const results: EmbeddedCase[] = [];
  for (let idx = 0; idx < count; idx++) {
    const category = categories[idx % categories.length];
    const court = courts[idx % courts.length];
    const lawyer = advocatesList[idx % advocatesList.length];

    const pName = petitionerNames[(idx * 3) % petitionerNames.length];
    const fName1 = familyNames[(idx * 7) % familyNames.length];
    const fName2 = familyNames[(idx * 11) % familyNames.length];
    const respondent = respondents[(idx * 13) % respondents.length];

    const title = `${pName} ${fName1} v. ${respondent} & ${fName2}`;
    const temp = templates[category];

    const year = 2026 - Math.floor(idx / 150);
    const volumeNumber = 100 + (idx % 400);
    const pageNumber = 1 + (idx % 990);
    const citation = `${year} ${court.abbrev} ${volumeNumber}`;

    const date = `April ${1 + (idx % 28)}, ${year}`;

    results.push({
      id: `virtual-${idx}`,
      title,
      citation,
      year,
      court: court.abbrev,
      courtName: court.name,
      category,
      date,
      subject: `[Precedent Index #${idx}] ` + temp.subject,
      facts: `${temp.facts} This dispute represents litigation tracked under file reference no. LHR/SCP-${idx}.`,
      issues: [
        `Whether the action violates statutory bounds as referenced in file ref #${idx}.`,
        `Whether evidentiary support matches standard requirements.`
      ],
      decision: temp.decision,
      urduDecision: temp.urduDecision,
      ratioDecidendi: temp.ratio,
      urduRatio: temp.urduRatio,
      bench: `Divisional Bench - Index Group #${idx % 15}`,
      advocates: lawyer,
      fullText: `CASE LOG #${idx}\nCOURT OF APPEAL: ${court.name}\nCITATION: ${citation}\nPARTIES: ${title}\n\nSUBJECT:\n${temp.subject}\n\nFACTS:\n${temp.facts}\n\nDECISION:\n${temp.decision}\n\nRATIO DECIDENDI:\n${temp.ratio}`
    });
  }
  return results;
}

