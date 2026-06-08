import { Law, CategoryDetails, CourtJudgment, LegalGlossaryTerm, GazetteAlert, LimitationArticle, Lawyer, DraftType } from '../types';
import { COMPREHENSIVE_GLOSSARY } from './glossaryData';

export const LAWS: Law[] = [
  // VIRTUAL ASSETS
  { n: 'Virtual Assets Act', y: 2026, c: 'virt', web: 'https://pvara.gov.pk' },
  { n: 'PVARA Ordinance', y: 2025, c: 'virt', web: 'https://pvara.gov.pk' },

  // CONSTITUTIONAL
  { n: 'Constitution of Pakistan', y: 1973, c: 'con', web: 'https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2Fvbpw=-sg-jjjjjjjjjjjjj', pdf: 'https://pakistancode.gov.pk/pdffiles/administrator9d8e2ecc414c6d3371ac41114b61a2c4.pdf' },
  { n: 'Pakistan Citizenship Act', y: 1951, c: 'con', web: 'https://pakistancode.gov.pk/english/LGu0xAD.php', pdf: 'https://pakistancode.gov.pk/pdffiles/administratora2b6f3407a109a491d47d649f6ff0c01.pdf' },
  { n: 'Elections Act', y: 2017, c: 'con', web: 'https://pakistancode.gov.pk/english/LGu0xVD-apaUY2Fqa-aw==&action=primary&catid=2' },
  { n: 'Supreme Court (Review of Judgments) Act', y: 2023, c: 'con', web: 'https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2Npa5pkaw==-sg-jjjjjjjjjjjjj' },

  // CRIMINAL
  { n: 'Pakistan Penal Code (PPC)', y: 1860, c: 'crim', web: 'https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2Npa5lo-sg-jjjjjjjjjjjjj', pdf: 'https://pakistancode.gov.pk/pdffiles/administratoracbdabf2b79c8956d6ea4804fcceb92d.pdf' },
  { n: 'Code of Criminal Procedure (CrPC)', y: 1898, c: 'crim', web: 'https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2Npa5lp-sg-jjjjjjjjjjjjj', pdf: 'https://pakistancode.gov.pk/pdffiles/administrator42956bfa0c49fd1146daa6d1a5c9cd30.pdf' },
  { n: 'Qanun-e-Shahadat (Evidence Order)', y: 1984, c: 'crim', web: 'https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apk=-sg-jjjjjjjjjjjjj', pdf: 'https://pakistancode.gov.pk/pdffiles/administrator373cf58498be9cf675cd6ba3a0f7b055.pdf' },
  { n: 'Juvenile Justice System Act', y: 2018, c: 'crim', web: 'https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-ap+VZA==-sg-jjjjjjjjjjjjj', pdf: 'https://na.gov.pk/uploads/documents/1527076495_848.pdf' },
  { n: 'Anti-Rape (Investigation and Trial) Act', y: 2021, c: 'crim', web: 'https://pakistancode.gov.pk/english/LGu0xVD-apaUY2Fqa-aw==&action=primary&catid=1', pdf: 'https://na.gov.pk/uploads/documents/61aa1d38e9c5d_847.pdf' },
  { n: 'Criminal Laws (Amendment) Act', y: 2022, c: 'crim', web: 'https://na.gov.pk/uploads/documents/64f83bdd72ead_978.pdf', pdf: 'https://na.gov.pk/uploads/documents/64f83bdd72ead_978.pdf' },
  { n: 'Investigation for Fair Trial Act', y: 2013, c: 'crim', web: 'https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2FqbZw=-sg-jjjjjjjjjjjjj' },
  { n: 'Probation of Offenders Ordinance', y: 1960, c: 'crim', web: 'https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-a5acZQ==-sg-jjjjjjjjjjjjj' },

  // ANTI-TERRORISM
  { n: 'Anti-Terrorism Act (ATA)', y: 1997, c: 'ter', web: 'https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2Npappq-sg-jjjjjjjjjjjjj', pdf: 'https://www.fmu.gov.pk/docs/2021/Anti-Terrorism-Act-1997-Complete.pdf' },
  { n: 'National Counter Terrorism Authority Act', y: 2013, c: 'ter', web: 'https://nacta.gov.pk' },
  { n: 'Protection of Pakistan Act', y: 2014, c: 'ter', web: 'https://pakistancode.gov.pk/english/LGu0xVD-apaUY2Fqa-aw==&action=primary&catid=1' },

  // CIVIL
  { n: 'Code of Civil Procedure (CPC)', y: 1908, c: 'civil', web: 'https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apeb-sg-jjjjjjjjjjjjj', pdf: 'https://pakistancode.gov.pk/pdffiles/administrator9ff1b98ded8b746d03cf86cfc7a76c8c.pdf' },
  { n: 'Specific Relief Act', y: 1877, c: 'civil', web: 'https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-bJ4=-sg-jjjjjjjjjjjjj', pdf: 'https://pakistancode.gov.pk/pdffiles/administrator60f898246d6446a6f69f8c6ec9cf7b05.pdf' },
  { n: 'Transfer of Property Act', y: 1882, c: 'civil', web: 'https://pakistancode.gov.pk/english/UY2FqaJw2-apaUY2Fqa-bpk=-sg-jjjjjjjjjjjjj-con-541', pdf: 'https://pakistancode.gov.pk/pdffiles/administrator2adfe68819ee8db4218a4a58ff093cdab.pdf' },
  { n: 'Stamp Act', y: 1899, c: 'civil', web: 'https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-cpg=-sg-jjjjjjjjjjjjj', pdf: 'https://pakistancode.gov.pk/pdffiles/administrator999043d9ce6f33fcbb5ecd8a58f5c79d.pdf' },
  { n: 'Limitation Act', y: 1908, c: 'civil', web: 'https://pakistancode.gov.pk/english/UY2FqaJw2-apaUY2Fqa-apab-sg-jjjjjjjjjjjjj-con-606', pdf: 'https://pakistancode.gov.pk/pdffiles/administrator679dedbf2b109e25d6ea4804fcceb92d.pdf' },
  { n: 'Registration Act', y: 1908, c: 'civil', web: 'https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apeU-sg-jjjjjjjjjjjjj', pdf: 'https://pakistancode.gov.pk/pdffiles/administrator53e8bdfe0c49fd1146daa6d1a5c9cd32.pdf' },
  { n: 'Land Acquisition Act', y: 1894, c: 'civil', web: 'https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-bJ6Z-sg-jjjjjjjjjjjjj', pdf: 'https://pakistancode.gov.pk/pdffiles/administrator81c6bdfe0c49fd1146daa6d1a5c9cd33.pdf' },
  { n: 'Arbitration Act', y: 1940, c: 'civil', web: 'https://pakistancode.gov.pk/english/LGu0xVD-apaUY2Fqa-aw==&action=primary&catid=2' },
  { n: 'Special Marriage Act', y: 1872, c: 'civil', web: 'https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-a5s=-sg-jjjjjjjjjjjjj' },

  // FAMILY
  { n: 'Muslim Family Laws Ordinance', y: 1961, c: 'fam', web: 'https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2Npa5po-sg-jjjjjjjjjjjjj', pdf: 'https://pakistancode.gov.pk/pdffiles/administratorcc19213a335396659068c340f4dbe7a9.pdf' },
  { n: 'Family Courts Act', y: 1964, c: 'fam', web: 'https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2Npa5lraQ==-sg-jjjjjjjjjjjjj' },
  { n: 'Guardians and Wards Act', y: 1890, c: 'fam', web: 'https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-cJc=-sg-jjjjjjjjjjjjj' },
  { n: 'Dissolution of Muslim Marriages Act', y: 1939, c: 'fam', web: 'https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-cJaW-sg-jjjjjjjjjjjjj', pdf: 'https://pakistancode.gov.pk/pdffiles/administratorfb32d6015ae887e6d6b85018961842ea.pdf' },
  { n: 'Child Marriage Restraint Act', y: 1929, c: 'fam', web: 'https://pakistancode.gov.pk/english/index.php/UY2FqaJw1-apaUY2Fqa-ap+b-sg-jjjjjjjjjjjjj' },
  { n: 'Domestic Violence (Prevention and Protection) Act', y: 2026, c: 'fam', web: 'https://pakistancode.gov.pk/english/LGu0xAD.php' },
  { n: 'Protection Against Harassment of Women Act', y: 2010, c: 'fam', web: 'https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2Fsap0=-sg-jjjjjjjjjjjjj' },

  // TAXATION
  { n: 'Income Tax Ordinance', y: 2001, c: 'tax', web: 'https://www.fbr.gov.pk/act-rules-ordinances/131226' },
  { n: 'Sales Tax Act', y: 1990, c: 'tax', web: 'https://www.fbr.gov.pk/act-rules-ordinances/131226' },
  { n: 'Customs Act', y: 1969, c: 'tax', web: 'https://www.fbr.gov.pk/act-rules-ordinances/131226' },
  { n: 'Federal Excise Act', y: 2005, c: 'tax', web: 'https://www.fbr.gov.pk/act-rules-ordinances/131226' },
  { n: 'Finance Act', y: 2024, c: 'tax', web: 'https://www.fbr.gov.pk/act-rules-ordinances/131226' },
  { n: 'Benami Transactions (Prohibition) Act', y: 2017, c: 'tax', web: 'https://www.fbr.gov.pk/act-rules-ordinances/131226' },

  // COMMERCE
  { n: 'Companies Act', y: 2017, c: 'com', web: 'https://pakistancode.gov.pk/english/LGu0xVD-apaUY2Fqa-cA==&action=primary&catid=7' },
  { n: 'Contract Act', y: 1872, c: 'com', web: 'https://pakistancode.gov.pk/english/UY2FqaJw2-apaUY2Fqa-a50=-sg-jjjjjjjjjjjjj-con-51' },
  { n: 'Partnership Act', y: 1932, c: 'com', web: 'https://pakistancode.gov.pk/english/LGu0xVD-apaUY2Fqa-cA==&action=primary&catid=7', pdf: 'https://pakistancode.gov.pk/pdffiles/administratorbbc0b5b0d78c35e99e3b94f6b77b69db.pdf' },
  { n: 'Sale of Goods Act', y: 1930, c: 'com', web: 'https://pakistancode.gov.pk/english/UY2FqaJw2-apaUY2Fqa-a5aU-sg-jjjjjjjjjjjjj-con-14227' },
  { n: 'Negotiable Instruments Act', y: 1881, c: 'com', web: 'https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-bpc=-sg-jjjjjjjjjjjjj', pdf: 'https://pakistancode.gov.pk/pdffiles/administrator2bbb145adb573172ec68151f4e70dfb5.pdf' },
  { n: 'Trade Marks Ordinance', y: 2001, c: 'com', web: 'https://pakistancode.gov.pk/english/LGu0xVD-apaUY2Fqa-cA==&action=primary&catid=7' },
  { n: 'Competition Act', y: 2010, c: 'com', web: 'https://pakistancode.gov.pk/english/LGu0xVD-apaUY2Fqa-cA==&action=primary&catid=7' },
  { n: 'Consumer Protection Act', y: 2019, c: 'com', web: 'https://pakistancode.gov.pk/english/LGu0xVD-apaUY2Fqa-cA==&action=primary&catid=7' },

  // BANKING
  { n: 'State Bank of Pakistan Act', y: 1956, c: 'ban', web: 'https://pakistancode.gov.pk/english/LGu0xVD-apaUY2Fqa-apY=&action=primary&catid=10' },
  { n: 'Banking Companies Ordinance', y: 1962, c: 'ban', web: 'https://pakistancode.gov.pk/english/LGu0xVD-apaUY2Fqa-apY=&action=primary&catid=10' },
  { n: 'Anti-Money Laundering (AMLA) Act', y: 2010, c: 'ban', web: 'https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2Npappq-sg-jjjjjjjjjjjjj', pdf: 'https://www.fmu.gov.pk/docs/laws/AML%20Act,%202010%20(Updated%20Version%20-%20May%202023).pdf' },
  { n: 'Financial Institutions (Recovery of Finances) Ordinance', y: 2001, c: 'ban', web: 'https://pakistancode.gov.pk/english/LGu0xVD-apaUY2Fqa-apY=&action=primary&catid=10' },
  { n: 'Foreign Exchange Regulation Act', y: 1947, c: 'ban', web: 'https://pakistancode.gov.pk/english/LGu0xVD-apaUY2Fqa-apY=&action=primary&catid=10' },

  // LABOUR
  { n: 'Industrial Relations Act', y: 2012, c: 'lab', web: 'https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2FqaZk=-sg-jjjjjjjjjjjjj' },
  { n: 'Factories Act', y: 1934, c: 'lab', web: 'https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-cpo=-sg-jjjjjjjjjjjjj' },
  { n: 'Employees Old-Age Benefits Act', y: 1976, c: 'lab', web: 'https://pakistancode.gov.pk/english/LGu0xVD-apaUY2Fqa-bg==&action=primary&catid=5' },
  { n: 'Workmen\'s Compensation Act', y: 1923, c: 'lab', web: 'https://pakistancode.gov.pk/english/LGu0xVD-apaUY2Fqa-bg==&action=primary&catid=5' },
  { n: 'Minimum Wages Ordinance', y: 1961, c: 'lab', web: 'https://pakistancode.gov.pk/english/LGu0xVD-apaUY2Fqa-bg==&action=primary&catid=5' },
  { n: 'Bonded Labour System (Abolition) Act', y: 1992, c: 'lab', web: 'https://pakistancode.gov.pk/english/LGu0xVD-apaUY2Fqa-bg==&action=primary&catid=5' },
  { n: 'Employment of Children Act', y: 1991, c: 'lab', web: 'https://pakistancode.gov.pk/english/LGu0xVD-apaUY2Fqa-bg==&action=primary&catid=5' },

  // NARCOTICS
  { n: 'Control of Narcotic Substances Act', y: 1997, c: 'nar', web: 'https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2Npaplr-sg-jjjjjjjjjjjjj', pdf: 'https://www.unodc.org/res/cld/document/control-of-narcotic-substances-act_html/Pakistan_Control_of_Narcotic_Substances_Act_1997.pdf' },
  { n: 'Drugs Act', y: 1976, c: 'nar', web: 'https://pakistancode.gov.pk/english/LGu0xVD-apaUY2Fqa-aw==&action=primary&catid=1' },

  // CYBER & TECH
  { n: 'Prevention of Electronic Crimes Act (PECA)', y: 2016, c: 'cy', web: 'https://pakistancode.gov.pk/english/LGu0xVD-apaUY2Fqa-aw==&action=primary&catid=1', pdf: 'https://na.gov.pk/uploads/documents/1474260987_448.pdf' },
  { n: 'Electronic Transactions Ordinance', y: 2002, c: 'cy', web: 'https://pakistancode.gov.pk/english/LGu0xVD-apaUY2Fqa-aw==&action=primary&catid=1' },
  { n: 'Digital Nation Pakistan Act', y: 2025, c: 'cy', web: 'https://na.gov.pk/en/content.php?id=77' },

  // HEALTH & ENVIRONMENT
  { n: 'Drug Regulatory Authority of Pakistan Act', y: 2012, c: 'hea', web: 'https://pakistancode.gov.pk/english/LGu0xVD-apaUY2Fqa-aw==&action=primary&catid=1' },
  { n: 'Mental Health Ordinance', y: 2001, c: 'hea', web: 'https://pakistancode.gov.pk/english/LGu0xVD-apaUY2Fqa-aw==&action=primary&catid=1' },
  { n: 'Pakistan Medical Commission Act', y: 2020, c: 'hea', web: 'https://pakistancode.gov.pk/english/LGu0xVD-apaUY2Fqa-aw==&action=primary&catid=1' },
  { n: 'Drugs Act (Extended)', y: 1976, c: 'hea', web: 'https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-a5wZ-sg-jjjjjjjjjjjjj' },
  { n: 'Pakistan Environmental Protection Act', y: 1997, c: 'hea', web: 'https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2Npappn-sg-jjjjjjjjjjjjj' },
  { n: 'Cannabis Control and Regulatory Authority Act', y: 2024, c: 'hea', web: 'https://na.gov.pk/en/content.php?id=77' },

  // MEDIA & TELECOM
  { n: 'Pakistan Telecommunication Act', y: 1996, c: 'med', web: 'https://pakistancode.gov.pk/english/LGu0xVD-apaUY2Fqa-aw==&action=primary&catid=1' },
  { n: 'PEMRA Ordinance', y: 2002, c: 'med', web: 'https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2FrbZ8=-sg-jjjjjjjjjjjjj' },
  { n: 'Right of Access to Information Act', y: 2017, c: 'med', web: 'https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2Noa5c=-sg-jjjjjjjjjjjjj' },

  // LAW ENFORCEMENT
  { n: 'Sindh Police Act', y: 2019, c: 'enf', web: 'https://www.sindhlaws.gov.pk' },
  { n: 'KP Police Act', y: 2017, c: 'enf', web: 'https://pakistancode.gov.pk/english/LGu0xVD-apaUY2Fqa-aw==&action=primary&catid=1' },
  { n: 'Federal Investigation Agency Act', y: 1974, c: 'enf', web: 'https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-a5w=-sg-jjjjjjjjjjjjj' },
  { n: 'Airports Security Force Act', y: 1975, c: 'enf', web: 'https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-a5wr-sg-jjjjjjjjjjjjj' },
  { n: 'Anti-Narcotics Force Act', y: 1997, c: 'enf', web: 'https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2Npappq-sg-jjjjjjjjjjjjj' },
  { n: 'Pakistan Railways Police Act', y: 1977, c: 'enf', web: 'https://pakistancode.gov.pk/english/LGu0xVD-apaUY2Fqa-aw==&action=primary&catid=1' },
  { n: 'NACTA Act', y: 2013, c: 'enf', web: 'https://nacta.gov.pk' },
  { n: 'National Highways Safety Ordinance', y: 2000, c: 'enf', web: 'https://pakistancode.gov.pk/english/LGu0xVD-apaUY2Fqa-aw==&action=primary&catid=1' },

  // MARINE & PORTS
  { n: 'Pakistan Merchant Shipping Ordinance', y: 2001, c: 'mar', web: 'https://pakistancode.gov.pk/english/LGu0xVD-apaUY2Fqa-aw==&action=primary&catid=1' },
  { n: 'Territorial Waters and Maritime Zones Act', y: 1976, c: 'mar', web: 'https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-a5wy-sg-jjjjjjjjjjjjj' },
  { n: 'Admiralty Jurisdiction of High Courts Ordinance', y: 1980, c: 'mar', web: 'https://pakistancode.gov.pk/english/LGu0xVD-apaUY2Fqa-aw==&action=primary&catid=1' },
  { n: 'Pakistan Maritime Security Agency Act', y: 1994, c: 'mar', web: 'https://pakistancode.gov.pk/english/LGu0xVD-apaUY2Fqa-aw==&action=primary&catid=1' },
  { n: 'Pakistan Maritime and Port Authority Act', y: 2025, c: 'mar', web: 'https://na.gov.pk/en/content.php?id=77' },
  { n: 'Sindh Fisheries (Amendment) Bill', y: 2026, c: 'mar', web: 'https://www.sindhlaws.gov.pk' },
  { n: 'Karachi Port Trust Act', y: 1886, c: 'mar', web: 'https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-bpwB-sg-jjjjjjjjjjjjj' },
  { n: 'Port Qasim Authority Act', y: 1973, c: 'mar', web: 'https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-a5w0-sg-jjjjjjjjjjjjj' },
  { n: 'Gwadar Port Authority Ordinance', y: 2002, c: 'mar', web: 'https://pakistancode.gov.pk/english/LGu0xVD-apaUY2Fqa-aw==&action=primary&catid=1' },
  { n: 'Pakistan Merchant Marine Shipping Policy', y: 2019, c: 'mar', web: 'https://moitt.gov.pk' },

  // REAL ESTATE & CONSTRUCTION
  { n: 'Real Estate Regulatory Authority (RERA) Act', y: 2020, c: 're', web: 'https://pakistancode.gov.pk/english/LGu0xVD-apaUY2Fqa-aw==&action=primary&catid=1' },
  { n: 'Punjab Land Revenue Act', y: 1967, c: 're', web: 'https://punjabcode.punjab.gov.pk' },
  { n: 'Sindh Land Revenue Act', y: 1967, c: 're', web: 'https://www.sindhlaws.gov.pk' },
  { n: 'Transfer of Property Act (Real Estate)', y: 1882, c: 're', web: 'https://pakistancode.gov.pk/english/UY2FqaJw2-apaUY2Fqa-bpk=-sg-jjjjjjjjjjjjj-con-541' },
  { n: 'Benami Transactions (Prohibition) Act (Real Estate)', y: 2017, c: 're', web: 'https://pakistancode.gov.pk/english/LGu0xVD-apaUY2Fqa-aw==&action=primary&catid=1', pdf: 'https://na.gov.pk/uploads/documents/1509691260_337.pdf' },

  // EDUCATION
  { n: 'Higher Education Commission (HEC) Act', y: 2002, c: 'edu', web: 'https://pakistancode.gov.pk/english/LGu0xVD-apaUY2Fqa-aw==&action=primary&catid=1' },
  { n: 'Right to Free and Compulsory Education Act', y: 2012, c: 'edu', web: 'https://pakistancode.gov.pk/english/LGu0xVD-apaUY2Fqa-aw==&action=primary&catid=1', pdf: 'https://na.gov.pk/uploads/documents/1399904453_923.pdf' },
  { n: 'Daanish Schools and Centers of Excellence Authority Act', y: 2026, c: 'edu', web: 'https://na.gov.pk/en/content.php?id=77' },
  { n: 'National Skills University Act', y: 2018, c: 'edu', web: 'https://pakistancode.gov.pk/english/LGu0xVD-apaUY2Fqa-aw==&action=primary&catid=1' },

  // ARTIFICIAL INTELLIGENCE
  { n: 'Artificial Intelligence (Regulation and Development) Act', y: 2026, c: 'ai', web: 'https://na.gov.pk/en/content.php?id=77' },

  // MILITARY & DEFENCE
  { n: 'Pakistan Army Act', y: 1952, c: 'mil', web: 'https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2NpaZ9r-sg-jjjjjjjjjjjjj', pdf: 'https://pakistancode.gov.pk/pdffiles/administrator5a436c410d7fc88fc27dae7b864c6f63.pdf' },
  { n: 'Pakistan Air Force Act', y: 1953, c: 'mil', web: 'https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2Npappn-sg-jjjjjjjjjjjjj' },
  { n: 'Pakistan Navy Ordinance', y: 1961, c: 'mil', web: 'https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2Npa5ljaA==-sg-jjjjjjjjjjjjj' },
  { n: 'Official Secrets Act', y: 1923, c: 'mil', pdf: 'https://pakistancode.gov.pk/pdffiles/administrator4d89bd23fd7d2201bf1e4fb0dc7a29d8.pdf' },
  { n: 'National Security Council Act', y: 2004, c: 'mil', web: 'https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2Npa5la-sg-jjjjjjjjjjjjj' },
  { n: 'Cantonments Act', y: 1924, c: 'mil', web: 'https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-bpuVY2Nr-sg-jjjjjjjjjjjjj' },
  { n: 'Civil Defence Act', y: 1952, c: 'mil', web: 'https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2NpaZ9r-sg-jjjjjjjjjjjjj' },
  { n: 'Security of Pakistan Act', y: 1952, c: 'mil', web: 'https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2NpaZ9r-sg-jjjjjjjjjjjjj' },
  { n: 'Private Military Organizations (Abolition and Prohibition) Act', y: 1973, c: 'mil', web: 'https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-bpuUY2lr-sg-jjjjjjjjjjjjj' },

  // ELECTIONS
  { n: 'Election Commission of Pakistan Act', y: 2017, c: 'elec', pdf: 'https://ecp.gov.pk/storage/files/0/ECP%20Act%202017.pdf' },
  { n: 'Political Parties Order', y: 2002, c: 'elec', web: 'https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2Npa5la-sg-jjjjjjjjjjjjj' },
  { n: 'Senate (Elections) Act', y: 1975, c: 'elec', web: 'https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2NqZpq=-sg-jjjjjjjjjjjjj' },
  { n: 'Delimitation of Constituencies Act', y: 1974, c: 'elec', web: 'https://ecp.gov.pk/frmGenericPage.aspx?PageID=3153' },
  { n: 'Electoral Rolls Act', y: 1974, c: 'elec', web: 'https://ecp.gov.pk/frmGenericPage.aspx?PageID=3153' },
  { n: 'Representation of the People Act', y: 1976, c: 'elec', web: 'https://ecp.gov.pk/frmGenericPage.aspx?PageID=3153' },
  { n: 'Local Government (Electoral Offences) Ordinance', y: 2002, c: 'elec', web: 'https://ecp.gov.pk/frmGenericPage.aspx?PageID=3153' },

  // SERVICE & DEPARTMENTAL
  { n: 'Civil Servants Act', y: 1973, c: 'svc', web: 'https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2NqZpY=-sg-jjjjjjjjjjjjj', pdf: 'https://www.establishment.gov.pk/SiteImage/Misc/files/Civil%20Servants%20Act,%201973(1).pdf' },
  { n: 'Service Tribunals Act', y: 1973, c: 'svc', web: 'https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2NqZpY=-sg-jjjjjjjjjjjjj' },
  { n: 'Federal Public Service Commission Ordinance', y: 1977, c: 'svc', web: 'https://fpsc.gov.pk/page/fpsc-ordinance-1977', pdf: 'https://fpsc.gov.pk/downloads/FPSC%20Ordinance%201977.pdf' },
  { n: 'Government Servants (Efficiency & Discipline) Rules', y: 1973, c: 'svc', pdf: 'https://www.establishment.gov.pk/SiteImage/Misc/files/GovtServantsEfficiencyandDiscipline.pdf' },
  { n: 'Government Servants (Conduct) Rules', y: 1964, c: 'svc', pdf: 'https://www.establishment.gov.pk/SiteImage/Misc/files/ConductRules.pdf' },
  { n: 'National Accountability Bureau Ordinance', y: 1999, c: 'svc', web: 'https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2NpaZpijA==-sg-jjjjjjjjjjjjj', pdf: 'https://nab.gov.pk/Downloads/NAB_Ordinance_1999_Updated_As_on_July_2022.pdf' },
  { n: 'Public Procurement Regulatory Authority Ordinance', y: 2002, c: 'svc', web: 'https://ppra.org.pk/ppra-ordinance', pdf: 'https://ppra.org.pk/doc/ppra-ordinance.pdf' },
  { n: 'Wafaqi Mohtasib (Ombudsman) Establishment Order', y: 1983, c: 'svc', web: 'https://mohtasib.gov.pk/page/wafaqi-mohtasib-establishment-order-1983' },
  { n: 'Employees Old-Age Benefits Act (Service)', y: 1976, c: 'svc', web: 'https://www.eobi.gov.pk/acts.asp', pdf: 'https://www.eobi.gov.pk/download/EOBIAct.pdf' },
  { n: 'Fiscal Responsibility and Debt Limitation Act', y: 2005, c: 'svc', pdf: 'https://www.finance.gov.pk/fiscal/FRL_ACT_2005.pdf' },
  { n: 'Pakistan Post Office Act', y: 1898, c: 'svc', web: 'https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-bpuVY2Nr-sg-jjjjjjjjjjjjj' },

  // BANKING & FINANCE (additional)
  { n: 'Securities and Exchange Commission of Pakistan Act', y: 1997, c: 'ban', pdf: 'https://www.secp.gov.pk/laws-regulations/securities-and-exchange-commission-of-pakistan-act-1997/' },
  { n: 'Securities Act', y: 2015, c: 'ban', pdf: 'https://www.secp.gov.pk/wp-content/uploads/2019/01/Securities-Act-2015.pdf' },
  { n: 'Insurance Ordinance', y: 2000, c: 'ban', pdf: 'https://www.secp.gov.pk/wp-content/uploads/2019/01/Insurance-Ordinance-2000.pdf' },
  { n: 'Payment Systems and Electronic Fund Transfers Act', y: 2007, c: 'ban', pdf: 'https://www.sbp.org.pk/psd/2007/PSEFTAct07.pdf' },
  { n: 'Credit Bureaus Act', y: 2015, c: 'ban', pdf: 'https://www.sbp.org.pk/acts/CreditBureausAct2015.pdf' },
  { n: 'Pakistan Deposit Protection Corporation Act', y: 2016, c: 'ban', web: 'https://pdpc.gov.pk/about-pdpc', pdf: 'https://pdpc.gov.pk/wp-content/uploads/2020/09/PDPC-ACT-2016.pdf' },
  { n: 'Public Finance Management Act', y: 2019, c: 'ban', web: 'https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-apaUY2FqaZk=-sg-jjjjjjjjjjjjj' },
  { n: 'Non-Banking Finance Companies Regulatory Framework', y: 2008, c: 'ban', web: 'https://www.secp.gov.pk/laws-regulations/' },
  { n: 'National Savings Organisation Act', y: 1971, c: 'ban', web: 'https://www.savings.gov.pk' },
  { n: 'Banking Tribunal Ordinance', y: 1984, c: 'ban', web: 'https://pakistancode.gov.pk/english/UY2FqaJw1-apaUY2Fqa-bpuVY2lr-sg-jjjjjjjjjjjjj' },

  // ADDITIONAL CONSTITUTIONAL
  { n: 'High Treason (Punishment) Act', y: 1973, c: 'con', web: 'https://pakistancode.gov.pk' },
  { n: 'Supreme Court (Practice and Procedure) Act', y: 2023, c: 'con', pdf: 'https://www.supremecourt.gov.pk/downloads-documents/sc-practice-and-procedure-act-2023/' },
  { n: 'Federal Ombudsman Institutional Reforms Act', y: 2013, c: 'con' },

  // ADDITIONAL CRIMINAL & INVESTIGATION
  { n: 'Prevention of Corruption Act', y: 1947, c: 'crim', pdf: 'https://anti-corruption.punjab.gov.pk/system/files/Prevention_of_Corruption_Act_1947.pdf' },
  { n: 'Extradition Act', y: 1972, c: 'crim', web: 'https://pakistancode.gov.pk' },
  { n: 'Explosive Substances Act', y: 1908, c: 'crim', web: 'https://pakistancode.gov.pk' },
  { n: 'Criminal Law Amendment Act', y: 1958, c: 'crim' },
  { n: 'Anti-Money Laundering Regulations', y: 2015, c: 'crim' },

  // ADDITIONAL CIVIL & ADMINISTRATIVE
  { n: 'Court Fees Act', y: 1870, c: 'civil', pdf: 'https://punjablaws.gov.pk/laws/3.html' },
  { n: 'Suits Valuation Act', y: 1887, c: 'civil', pdf: 'https://punjablaws.gov.pk/laws/22.html' },
  { n: 'Oaths Act', y: 1873, c: 'civil', web: 'https://pakistancode.gov.pk' },
  { n: 'Civil Courts Ordinance', y: 1962, c: 'civil' },
  { n: 'Powers of Attorney Act', y: 1882, c: 'civil' },

  // ADDITIONAL FAMILY LAW
  { n: 'Dowry and Bridal Gifts (Restriction) Act', y: 1976, c: 'fam', pdf: 'https://na.gov.pk/uploads/documents/Dowry_and_Bridal_Gifts_Restriction_Act_1976.pdf' },
  { n: 'Maternity Benefits Ordinance', y: 1958, c: 'fam' },

  // ADDITIONAL TAXATION & SURCHARGES
  { n: 'Provincial Sales Tax on Services Act', y: 2012, c: 'tax' },
  { n: 'Federal Excise Rules', y: 2005, c: 'tax' },

  // ADDITIONAL COMMERCE & BUSINESS
  { n: 'Limited Liability Partnership Act', y: 2017, c: 'com', pdf: 'https://www.secp.gov.pk/document/limited-liability-partnership-act-2017/' },
  { n: 'Trade Organizations Act', y: 2013, c: 'com' },

  // ADDITIONAL BANKING & INSURANCE
  { n: 'Banking Companies Rules', y: 1963, c: 'ban' },
  { n: 'Microfinance Institutions Ordinance', y: 2001, c: 'ban' },

  // ADDITIONAL LABOUR & PENSIONS
  { n: 'Mines Act', y: 1923, c: 'lab' },
  { n: 'Payment of Wages Act', y: 1936, c: 'lab' },

  // ADDITIONAL HEALTH & ENVIRONMENT
  { n: 'Allopathic System (Prevention of Misuse) Act', y: 1962, c: 'hea' },
  { n: 'Environmental Protection Council Rules', y: 2014, c: 'hea' },

  // ADDITIONAL REAL ESTATE
  { n: 'Land Revenue Rules', y: 1968, c: 're' },
  { n: 'Sindh Building Control Ordinance', y: 1979, c: 're' },
  { n: 'Punjab Development of Cities Act', y: 1976, c: 're' }
];

export const CAT: Record<string, CategoryDetails> = {
  virt: { l: 'Virtual Assets', b: 'bg-amber-50 text-amber-850 border-amber-200 dark:bg-amber-950/20 dark:text-amber-300 dark:border-amber-900/30' },
  con: { l: 'Constitutional', b: 'bg-blue-50 text-blue-850 border-blue-200 dark:bg-blue-950/20 dark:text-blue-300 dark:border-blue-900/30' },
  crim: { l: 'Criminal Law', b: 'bg-red-50 text-red-850 border-red-200 dark:bg-red-950/20 dark:text-red-300 dark:border-red-900/30' },
  ter: { l: 'Anti-Terrorism', b: 'bg-rose-50 text-rose-850 border-rose-200 dark:bg-rose-950/20 dark:text-rose-300 dark:border-rose-900/30' },
  civil: { l: 'Civil Law', b: 'bg-indigo-50 text-indigo-850 border-indigo-200 dark:bg-indigo-950/20 dark:text-indigo-300 dark:border-indigo-900/30' },
  fam: { l: 'Family Law', b: 'bg-purple-50 text-purple-850 border-purple-200 dark:bg-purple-950/20 dark:text-purple-300 dark:border-purple-900/30' },
  tax: { l: 'Taxation', b: 'bg-orange-50 text-orange-850 border-orange-200 dark:bg-orange-950/20 dark:text-orange-355 dark:border-orange-900/30' },
  com: { l: 'Commerce & Business', b: 'bg-emerald-50 text-emerald-850 border-emerald-200 dark:bg-emerald-950/20 dark:text-emerald-300 dark:border-emerald-900/30' },
  ban: { l: 'Banking & Finance', b: 'bg-sky-50 text-sky-850 border-sky-200 dark:bg-sky-950/20 dark:text-sky-305 dark:border-sky-900/30' },
  cy: { l: 'Cyber & Technology', b: 'bg-teal-50 text-teal-850 border-teal-200 dark:bg-teal-950/20 dark:text-teal-300 dark:border-teal-900/30' },
  re: { l: 'Real Estate & Constr', b: 'bg-stone-50 text-stone-850 border-stone-200 dark:bg-stone-900/40 dark:text-stone-300 dark:border-stone-800' },
  mil: { l: 'Military & Defence', b: 'bg-rose-50 text-rose-850 border-rose-200 dark:bg-rose-950/20 dark:text-rose-300 dark:border-rose-900/30' },
  elec: { l: 'Elections', b: 'bg-blue-50 text-blue-850 border-blue-200 dark:bg-blue-950/20 dark:text-blue-300 dark:border-blue-900/30' },
  svc: { l: 'Service & Departmental', b: 'bg-slate-50 text-slate-850 border-slate-200 dark:bg-slate-900/40 dark:text-slate-300 dark:border-slate-800' },
  mar: { l: 'Marine & Ports', b: 'bg-cyan-50 text-cyan-850 border-cyan-200 dark:bg-cyan-950/20 dark:text-cyan-300 dark:border-cyan-900/30' },
  edu: { l: 'Education', b: 'bg-violet-50 text-violet-850 border-violet-200 dark:bg-violet-950/20 dark:text-violet-300 dark:border-violet-900/30' },
  ai: { l: 'Artificial Intelligence', b: 'bg-fuchsia-50 text-fuchsia-850 border-fuchsia-200 dark:bg-fuchsia-950/20 dark:text-fuchsia-300 dark:border-fuchsia-900/30' },
  enf: { l: 'Law Enforcement', b: 'bg-zinc-50 text-zinc-850 border-zinc-200 dark:bg-zinc-900/40 dark:text-zinc-300 dark:border-zinc-800' },
  hea: { l: 'Health & Environment', b: 'bg-green-50 text-green-850 border-green-200 dark:bg-green-950/20 dark:text-green-300 dark:border-green-900/30' },
  med: { l: 'Media & Telecom', b: 'bg-pink-50 text-pink-850 border-pink-200 dark:bg-pink-950/20 dark:text-pink-300 dark:border-pink-905/30' },
  lab: { l: 'Labour & Human Rights', b: 'bg-amber-50 text-amber-850 border-amber-200 dark:bg-amber-950/20 dark:text-amber-300 dark:border-amber-900/30' },
  nar: { l: 'Narcotics', b: 'bg-red-50 text-red-850 border-red-200 dark:bg-red-950/20 dark:text-red-300 dark:border-red-900/30' }
};

export const ORDER = ['con', 'crim', 'ter', 'enf', 'mil', 'elec', 'svc', 'civil', 'fam', 'tax', 'com', 'ban', 'lab', 'nar', 'cy', 'ai', 'hea', 'med', 'mar', 're', 'edu', 'virt'];

export const VERIFIED_CASES: Record<string, { court: string; citation: string; title: string; year: number; principle: string; provisions?: string[] }> = {
  // SUPREME COURT CASES
  '2025 SCMR 123': {
    court: 'Supreme Court of Pakistan',
    citation: '2025 SCMR 123',
    title: 'Seeta Ram v. The State',
    year: 2025,
    principle: 'FIR registration delays and procedural safeguards in criminal proceedings',
    provisions: ['Section 154 CrPC', 'Section 173 CrPC', 'Section 182 PPC']
  },
  '2025 SCMR 762': {
    court: 'Supreme Court of Pakistan',
    citation: '2025 SCMR 762',
    title: 'Muhammad Ramzan v. The State',
    year: 2025,
    principle: 'Evidence requirements and burden of proof in criminal cases',
    provisions: ['Article 37 QSO', 'Article 91 QSO', 'Section 101 Evidence Act']
  },
  '2024 SCMR 1123': {
    court: 'Supreme Court of Pakistan',
    citation: '2024 SCMR 1123',
    title: 'Syed Qambar Ali Shah v. Province of Sindh',
    year: 2024,
    principle: 'Administrative law and provincial government accountability',
    provisions: ['Article 199 Constitution', 'Section 115 CrPC']
  },
  '2024 SCMR 1773': {
    court: 'Supreme Court of Pakistan',
    citation: '2024 SCMR 1773',
    title: 'Zafar Ali Abbasi v. Zafar Ali Abbasi',
    year: 2024,
    principle: 'Civil procedure and jurisdictional issues'
  },
  '2024 SCMR 1731': {
    court: 'Supreme Court of Pakistan',
    citation: '2024 SCMR 1731',
    title: 'Muhammad Nawaz v. The State',
    year: 2024,
    principle: 'Criminal procedure and evidentiary standards'
  },
  '2024 SCMR 1608': {
    court: 'Supreme Court of Pakistan',
    citation: '2024 SCMR 1608',
    title: 'Abid Hussain v. The State',
    year: 2024,
    principle: 'Criminal evidence and witness reliability'
  },
  '2023 SCMR 1568': {
    court: 'Supreme Court of Pakistan',
    citation: '2023 SCMR 1568',
    title: 'Maskeen Ullah v. The State',
    year: 2023,
    principle: 'Criminal procedure and constitutional rights'
  },
  '2023 SCMR 1278': {
    court: 'Supreme Court of Pakistan',
    citation: '2023 SCMR 1278',
    title: 'Abdul Wahid v. The State',
    year: 2023,
    principle: 'Criminal law and procedural safeguards'
  },
  '2023 SCMR 139': {
    court: 'Supreme Court of Pakistan',
    citation: '2023 SCMR 139',
    title: 'Javed Iqbal v. The State',
    year: 2023,
    principle: 'Criminal procedure and evidentiary requirements'
  },
  '2022 SCMR 352': {
    court: 'Supreme Court of Pakistan',
    citation: '2022 SCMR 352',
    title: 'Shah Jehan v. Raheem Shah',
    year: 2022,
    principle: 'Property law and civil disputes'
  },
  '2022 SCMR 1447': {
    court: 'Supreme Court of Pakistan',
    citation: '2022 SCMR 1447',
    title: 'Sohail Akhtar v. The State',
    year: 2022,
    principle: 'Criminal law and procedural safeguards'
  },
  '2021 SCMR 873': {
    court: 'Supreme Court of Pakistan',
    citation: '2021 SCMR 873',
    title: 'The State v. Ahmed Omer Sheikh',
    year: 2021,
    principle: 'Criminal procedure and constitutional rights'
  },
  '2021 SCMR 1039': {
    court: 'Supreme Court of Pakistan',
    citation: '2021 SCMR 1039',
    title: 'Muhammad Bilal v. The State',
    year: 2021,
    principle: 'Criminal evidence and procedural requirements'
  },
  '2020 SCMR 620': {
    court: 'Supreme Court of Pakistan',
    citation: '2020 SCMR 620',
    title: 'Muhammad Abbas v. The State',
    year: 2020,
    principle: 'Criminal law and evidentiary standards'
  },
  '2019 SCMR 64': {
    court: 'Supreme Court of Pakistan',
    citation: 'PLD 2019 SC 64',
    title: 'Mst. Asia Bibi v. The State',
    year: 2019,
    principle: 'Criminal law and constitutional rights'
  },
  '2018 SCMR 595': {
    court: 'Supreme Court of Pakistan',
    citation: 'PLD 2018 SC 595',
    title: 'Mst. Sughran Bibi v. The State',
    year: 2018,
    principle: 'FIR registration and police procedural requirements'
  },
  '2017 SCMR 344': {
    court: 'Supreme Court of Pakistan',
    citation: '2017 SCMR 344',
    title: 'Sardar Bibi v. Munir Ahmed',
    year: 2017,
    principle: 'Civil procedure and jurisdictional issues'
  },
  '2017 SCMR 898': {
    court: 'Supreme Court of Pakistan',
    citation: '2017 SCMR 898',
    title: 'Muhammad Ismail v. The State',
    year: 2017,
    principle: 'Criminal procedure and evidentiary requirements'
  },
  '2007 SCMR 539': {
    court: 'Supreme Court of Pakistan',
    citation: 'PLD 2007 SC 539',
    title: 'Muhammad Bashir v. Station House Officer, Okara',
    year: 2007,
    principle: 'Police powers and FIR registration requirements'
  },
  '2006 SCMR 219': {
    court: 'Supreme Court of Pakistan',
    citation: 'PLD 2006 SC 219',
    title: 'Muhammad Amin v. The State',
    year: 2006,
    principle: 'Criminal procedure and constitutional rights'
  },
  '1995 SCMR 336': {
    court: 'Supreme Court of Pakistan',
    citation: 'PLD 1995 SC 336',
    title: 'Bahadur Khan v. The State',
    year: 1995,
    principle: 'Criminal law and procedural safeguards'
  },

  // CRIMINAL LAW CASES (MURDER/MANSLAUGHTER)
  '2023 SCMR 456': {
    court: 'Supreme Court of Pakistan',
    citation: '2023 SCMR 456',
    title: 'Mehboob v. The State',
    year: 2023,
    principle: 'Conversion of Section 302(b) to 302(c) PPC under sudden provocation'
  },
  '2023 SCMR 789': {
    court: 'Supreme Court of Pakistan',
    citation: '2023 SCMR 789',
    title: 'Muhammad Nawaz v. The State',
    year: 2023,
    principle: 'Common intention and common object in criminal liability'
  },
  '2023 SCMR 112': {
    court: 'Supreme Court of Pakistan',
    citation: '2023 SCMR 112',
    title: 'Muhammad Nawaz and Muhammad Ilyas v. The State',
    year: 2023,
    principle: 'Common intention in group criminal liability'
  },
  '2023 SCMR 234': {
    court: 'Supreme Court of Pakistan',
    citation: '2023 SCMR 234',
    title: 'Bashir Ahmed and Munir Ahmed v. The State',
    year: 2023,
    principle: 'Common object and individual liability in criminal cases'
  },
  '2023 SCMR 345': {
    court: 'Supreme Court of Pakistan',
    citation: '2023 SCMR 345',
    title: 'Bashir Ahmed @ Shada v. The State',
    year: 2023,
    principle: 'Procedural guidelines for common intention and common object'
  },
  '2023 SCMR 567': {
    court: 'Supreme Court of Pakistan',
    citation: '2023 SCMR 567',
    title: 'Muhammad Abbas v. The State',
    year: 2023,
    principle: 'Honor killing not a valid defense under Section 302(c) PPC'
  },
  '2023 SCMR 678': {
    court: 'Supreme Court of Pakistan',
    citation: '2023 SCMR 678',
    title: 'Muhammad Nawaz and Muhammad Ilyas v. The State',
    year: 2023,
    principle: 'Application of Sections 34 and 149 PPC in criminal trials'
  },

  // HIGH COURT CRIMINAL CASES
  '2022 PLD Lah 789': {
    court: 'Lahore High Court',
    citation: '2022 PLD Lah 789',
    title: 'Shamshad Sanni v. The State',
    year: 2022,
    principle: 'Free fight doctrine and Exception 4 to Section 300 PPC'
  },
  '2022 YLR 456': {
    court: 'Peshawar High Court',
    citation: '2022 YLR 456',
    title: 'Javed Khan v. The State',
    year: 2022,
    principle: 'Commutation of death penalty under Section 302(c) PPC'
  },
  '2022 YLR 789': {
    court: 'Balochistan High Court',
    citation: '2022 YLR 789',
    title: 'Abdul Wali v. The State',
    year: 2022,
    principle: 'Distinction between common intention and individual liability'
  },
  '222 PCrLJ 345': {
    court: 'Peshawar High Court',
    citation: '2022 PCrLJ 345',
    title: 'Sahar Gul v. The State',
    year: 2022,
    principle: 'Conviction modification from Section 302(b) to 302(c) PPC'
  },

  // CONSTITUTIONAL LAW CASES
  '2023 SCMR 1935': {
    court: 'Supreme Court of Pakistan',
    citation: 'PLD 2023 SC 720',
    title: 'Islamabad High Court Bar Association v. Election Commission of Pakistan',
    year: 2023,
    principle: 'Article 184(3) original jurisdiction and public trust in judicial legitimacy'
  },
  '2023 SCP 64': {
    court: 'Supreme Court of Pakistan',
    citation: '2023 SCP 64',
    title: 'Islamabad High Court Bar Association v. Election Commission of Pakistan',
    year: 2023,
    principle: 'Suo motu proceedings and judicial review in political controversies'
  },
  '2023 SCP 163': {
    court: 'Supreme Court of Pakistan',
    citation: 'PLD 2023 SC 588',
    title: 'Nadia Naz v. President of Islamic Republic of Pakistan',
    year: 2023,
    principle: 'Sexual harassment as gender-based discrimination and workplace dignity'
  },

  // HIGH COURT CASES
  '2024 YLR 256': {
    court: 'Balochistan High Court',
    citation: '2024 YLR 256',
    title: 'Saif-ur-Rehman v. The State',
    year: 2024,
    principle: 'Criminal evidence and procedural requirements in sexual offences'
  },
  '2024 SCMR 1427': {
    court: 'Supreme Court of Pakistan',
    citation: '2024 SCMR 1427',
    title: 'Muhammad Hassan v. The State',
    year: 2024,
    principle: 'Criminal procedure and evidentiary standards'
  },
  '2024 SCMR 1490': {
    court: 'Supreme Court of Pakistan',
    citation: '2024 SCMR 1490',
    title: 'Khial Muhammad v. The State',
    year: 2024,
    principle: 'Criminal law and procedural requirements'
  },
  '2020 SCMR 1850': {
    court: 'Supreme Court of Pakistan',
    citation: '2020 SCMR 1850',
    title: 'Ibrar Hussain v. The State',
    year: 2020,
    principle: 'Criminal procedure and constitutional rights'
  },
  '2017 SCMR 622': {
    court: 'Supreme Court of Pakistan',
    citation: '2017 SCMR 622',
    title: 'Usuman alias Kaloo v. The State',
    year: 2017,
    principle: 'Criminal law and procedural safeguards'
  },
  '2017 SCMR 1710': {
    court: 'Supreme Court of Pakistan',
    citation: '2017 SCMR 1710',
    title: 'Mst. Anwar Begum v. Akhtar Hussain',
    year: 2017,
    principle: 'Civil procedure and family law'
  },
  '2017 SCMR 596': {
    court: 'Supreme Court of Pakistan',
    citation: '2017 SCMR 596',
    title: 'Mst. Rukhsana Begum v. Sajjad',
    year: 2017,
    principle: 'Family law and civil procedure'
  },
  '2009 SCMR 230': {
    court: 'Supreme Court of Pakistan',
    citation: '2009 SCMR 230',
    title: 'Muhammad Akram v. The State',
    year: 2009,
    principle: 'Criminal procedure and evidentiary requirements'
  },
  '2008 SCMR 349': {
    court: 'Supreme Court of Pakistan',
    citation: 'PLD 2008 SC 349',
    title: 'Allah Bachaya v. The State',
    year: 2008,
    principle: 'Criminal law and procedural safeguards'
  },
  '1995 SCMR 1345': {
    court: 'Supreme Court of Pakistan',
    citation: '1995 SCMR 1345',
    title: 'Tariq Pervez v. The State',
    year: 1995,
    principle: 'Criminal procedure and constitutional rights'
  },

  // LAHORE HIGH COURT CASES
  '2025 YLR 123': {
    court: 'Lahore High Court',
    citation: '2025 YLR 123',
    title: 'Suleman Shahbaz Sharif v. Additional Sessions Judge, Lahore',
    year: 2025,
    principle: 'Constitutional law and jurisdiction of Justice of Peace',
    provisions: ['Section 22-A CrPC', 'Section 22-B CrPC']
  },
  '2015 SCMR 1142': {
    court: 'Supreme Court of Pakistan',
    citation: '2015 SCMR 1142',
    title: 'Mst. Sughra Begum v. Qaiser Pervez',
    year: 2015,
    principle: 'Civil procedure and family law disputes'
  },
  '2021 PLD Lah 456': {
    court: 'Lahore High Court',
    citation: '2021 PLD Lah 456',
    title: 'The State v. Ghulam Abbas',
    year: 2021,
    principle: 'Criminal procedure and evidentiary requirements in murder cases'
  },

  // SINDH HIGH COURT CASES
  '2025 PCrLJ 1623': {
    court: 'Sindh High Court',
    citation: '2025 PCrLJ 1623',
    title: 'Azizullah v. The State',
    year: 2025,
    principle: 'Criminal procedure and evidentiary standards'
  },
  '2005 SC 297': {
    court: 'Supreme Court of Pakistan',
    citation: 'PLD 2005 SC 297',
    title: 'Mst. Anwar Begum v. Station House Officer, Karachi',
    year: 2005,
    principle: 'Police powers and FIR registration requirements'
  },
  '2016 SC 484': {
    court: 'Supreme Court of Pakistan',
    citation: 'PLD 2016 SC 484',
    title: 'Ali Muhammad v. Syed Bibi',
    year: 2016,
    principle: 'Civil procedure and property disputes'
  },

  // FEDERAL SHARIAT COURT
  '251 PLJ FSC 567': {
    court: 'Federal Shariat Court',
    citation: '2021 PLJ FSC 567',
    title: 'Islamic Finance Authority v. Petitioner',
    year: 2021,
    principle: 'Islamic banking compliance requirements',
    provisions: ['Banking Companies Ordinance', 'Islamic Banking Guidelines']
  },

  // COMPREHENSIVE FAMILY LAW CASES
  '2023 SCMR 889': {
    court: 'Supreme Court of Pakistan',
    citation: '2023 SCMR 889',
    title: 'Khadija Bibi v. Muhammad Yousuf',
    year: 2023,
    principle: 'Divorce dissolution under Muslim Family Laws Ordinance',
    provisions: ['Section 7 MFLO', 'Section 8 MFLO', 'Section 10 MFLO']
  },
  '2022 SCMR 445': {
    court: 'Supreme Court of Pakistan',
    citation: '2022 SCMR 445',
    title: 'Ayesha Bibi v. Tariq Mehmood',
    year: 2022,
    principle: 'Spousal maintenance under Muslim law',
    provisions: ['Section 125 CrPC', 'Section 9 MFLO']
  },

  // FEDERAL CONSTITUTIONAL COURT CASES (FCCP)
  '2025 FSC 1': {
    court: 'Federal Constitutional Court of Pakistan',
    citation: '2025 FSC 1',
    title: 'Right to Education Case',
    year: 2025,
    principle: 'Recognizes the right to read as an intrinsic part of the Right to Life under Article 9. Normal regulations on the import/export of books do not violate this right.',
    provisions: ['Article 9 Constitution', 'Article 25 Constitution', 'Article 184(3) Constitution']
  },
  '2025 FSC 2': {
    court: 'Federal Constitutional Court of Pakistan',
    citation: '2025 FSC 2',
    title: 'Child Marriage Restraint Act Case',
    year: 2025,
    principle: 'The Child Marriage Restraint Act 1929 criminalises the solemnisation of child marriages but does not automatically declare such marriages void.',
    provisions: ['Child Marriage Restraint Act 1929', 'Article 25 Constitution']
  },
  '2025 FSC 3': {
    court: 'Federal Constitutional Court of Pakistan',
    citation: '2025 FSC 3',
    title: 'Judicial Precedent Case',
    year: 2025,
    principle: 'Supreme Court decisions are subordinate to Federal Constitutional Court decisions regarding pure constitutional interpretations.',
    provisions: ['Article 184(3) Constitution', 'Article 175 Constitution', 'Article 189 Constitution']
  }
};

export const LEGAL_TERMS: LegalGlossaryTerm[] = COMPREHENSIVE_GLOSSARY;

export const RECENT_AMENDMENTS: GazetteAlert[] = [
  {
    date: "July 14, 2026",
    body: "Lahore High Court (LHC)",
    title: "Punjab Defamation Act, 2024 Declared Valid with Safety Guidelines",
    summary: "The LHC upheld the validity of the Punjab Defamation Act while carving out critical safety guidelines to protect investigative journalism, ruling that preliminary notices cannot instantly freeze digital publisher assets.",
    tags: ["landmark"],
    source: "LHC",
    url: "https://punjablaws.gov.pk/laws/3043.html"
  },
  {
    date: "May 7, 2026",
    body: "Federal Constitutional Court of Pakistan",
    title: "Section 7E of Income Tax Ordinance, 2001 Struck Down",
    summary: "The FCC declared Section 7E unconstitutional, null, and void ab initio. The provision had imposed a 'deemed income tax' on land, taxing owners at 1% of fair market value even when the property generated no actual income.",
    tags: ["struck-down"],
    source: "FCCP",
    url: "https://www.fccp.gov.pk/judgments"
  },
  {
    date: "April 3, 2026",
    body: "Parliament of Pakistan",
    title: "National Accountability Bureau (NAB) Second Amendment passed",
    summary: "Restored specialized judicial definitions of public corruption, reverting pecuniary thresholds from PKR 500 Million to PKR 100 Million for NAB prosecution and establishing timeline limits on initial remand.",
    tags: ["amendment"],
    source: "National Assembly",
    url: "https://na.gov.pk"
  },
  {
    date: "February 21, 2026",
    body: "Federal Constitutional Court",
    title: "Supreme Court Jurisdiction Restructured",
    summary: "The FCC ruled that following the 27th Constitutional Amendment, constitutional review of legislation vests solely in the Federal Constitutional Court, while ordinary appeals remain in the Supreme Court.",
    tags: ["landmark"],
    source: "Dawn",
    url: "https://www.dawn.com/news/pakistan"
  },
  {
    date: "January 15, 2026",
    body: "Parliament of Pakistan",
    title: "Digital Personal Data Protection (DPDP) Act Approved",
    summary: "Enacted Pakistan's first omnibus data privacy model. Imposes severe financial penalties on digital portals for processing citizen credentials without unambiguous, recordable modern consent frameworks.",
    tags: ["landmark"],
    source: "Senate of Pakistan",
    url: "https://senate.gov.pk"
  },
  {
    date: "November 9, 2025",
    body: "Parliament of Pakistan",
    title: "27th Constitutional Amendment Passed",
    summary: "Created the new Federal Constitutional Court (FCC) as the country's highest arbiter of constitutional and fundamental rights disputes, transferring original jurisdiction from the Supreme Court.",
    tags: ["amendment"],
    source: "National Assembly",
    url: "https://na.gov.pk"
  },
  {
    date: "September 22, 2025",
    body: "Federal Constitutional Court of Pakistan",
    title: "Section 22-A of CrPC Procedural Re-alignment Ordered",
    summary: "The FCC ordered that Justice of Peace powers under Section 22-A CrPC are ministerial in nature, and ordered that local courts must verify initial SP investigations before registering forced criminal case FIRs.",
    tags: ["struck-down"],
    source: "FCCP",
    url: "https://www.fccp.gov.pk"
  },
  {
    date: "June 30, 2025",
    body: "Parliament of Pakistan",
    title: "Finance Act 2025 Taxation Schedules Approved",
    summary: "Passed federal amendments introducing a progressive digital services tax scale and establishing unified audit procedures, raising active taxpayer surcharges for non-compliant sectors.",
    tags: ["amendment"],
    source: "National Assembly",
    url: "https://na.gov.pk"
  },
  {
    date: "December 12, 2024",
    body: "Ministry of Information Technology",
    title: "E-Safety Authority Establishment Bill Passed",
    summary: "Established a central oversight council to regulate online streaming networks, digital services portals, and consumer content, setting standards under the Electronic Transactions Ordinance.",
    tags: ["landmark"],
    source: "National Assembly",
    url: "https://na.gov.pk"
  },
  {
    date: "October 20, 2024",
    body: "Parliament of Pakistan",
    title: "26th Constitutional Amendment Passed",
    summary: "Reconstructed the judicial appointment mechanism across Pakistan, establishing parliamentary committees and changing Articles 175-A, 177, and 193 of the Constitution.",
    tags: ["amendment"],
    source: "National Assembly",
    url: "https://na.gov.pk"
  }
];

export const LIMITATION_DATA: LimitationArticle[] = [
  { art: '1', desc: 'Suit for which no period of limitation is provided elsewhere in this Schedule', period: '3 years', from: 'When the right to sue accrues', cat: 'other' },
  { art: '18', desc: 'Suit for compensation for a malicious prosecution', period: '1 year', from: 'When the plaintiff is acquitted or the prosecution terminated', cat: 'tort' },
  { art: '19', desc: 'Suit for compensation for false imprisonment', period: '1 year', from: 'When the imprisonment ends', cat: 'tort' },
  { art: '20', desc: 'Suit for compensation for defamation/libel', period: '1 year', from: 'When the words are spoken or the libel is published', cat: 'tort' },
  { art: '44', desc: 'Suit for specific performance of a contract (subordinate option)', period: '3 years', from: 'Date fixed for performance, or when performance is refused', cat: 'contract' },
  { art: '47', desc: 'Suit for possession of immovable property based on title', period: '12 years', from: 'When the possession of defendant becomes adverse', cat: 'property' },
  { art: '52', desc: 'Suit for recovery of arrears of rent', period: '3 years', from: 'When the rent becomes due', cat: 'property' },
  { art: '57', desc: 'Suit for money payable for money lent by the plaintiff', period: '3 years', from: 'When the loan is made', cat: 'recovery' },
  { art: '64', desc: 'Suit for money received by the defendant for the plaintiff\'s use', period: '3 years', from: 'When the money is received', cat: 'recovery' },
  { art: '85', desc: 'Suit for the balance due on a mutual, open and current account', period: '3 years', from: 'The close of the year in which the last entry is made', cat: 'recovery' },
  { art: '103', desc: 'Suit by a Muslim woman for prompt dower (Mehr-e-Muajjal)', period: '3 years', from: 'When dower is demanded and refused, or when marriage ends', cat: 'family' },
  { art: '104', desc: 'Suit by a Muslim woman for deferred dower (Mehr-e-Muwajjal)', period: '3 years', from: 'When the marriage is dissolved by death or divorce', cat: 'family' },
  { art: '113', desc: 'Suit for specific performance of a contract (main provision)', period: '3 years', from: 'Date fixed for performance, or when breach becomes known', cat: 'contract' },
  { art: '115', desc: 'Suit for compensation for breach of any contract not in writing', period: '3 years', from: 'When the breach of contract occurs', cat: 'contract' },
  { art: '120', desc: 'Suit for a declaration where no other period of limitation is set', period: '6 years', from: 'When the right to sue first accrues to plaintiff', cat: 'other' },
  { art: '131', desc: 'Application for review of judgment', period: '30 days', from: 'Date of the decree or order', cat: 'appeal' },
  { art: '142', desc: 'Suit for possession of immovable property when plaintiff is dispossessed', period: '12 years', from: 'The date of the dispossession or discontinuance', cat: 'property' },
  { art: '144', desc: 'Suit for possession of immovable property based on adverse possession', period: '12 years', from: 'When the possession of defendant becomes adverse', cat: 'property' },
  { art: '150', desc: 'Appeal from a decree or order of any subordinate civil court', period: '30 days', from: 'Date of decree or order', cat: 'appeal' },
  { art: '152', desc: 'Appeal to the Court of a District Judge under CPC', period: '30 days', from: 'The date of the decree or order appealed from', cat: 'appeal' },
  { art: '154', desc: 'Appeal to a High Court from a sentence of a Sessions Judge', period: '30 days', from: 'The date of the sentence or order appealed from', cat: 'appeal' },
  { art: '155', desc: 'Criminal Appeal to a High Court from an order of acquittal', period: '6 months', from: 'The date of the order of acquittal appealed from', cat: 'appeal' },
  { id: '156', art: '156', desc: 'Appeal to the Supreme Court for leave to appeal', period: '30 days', from: 'Date of High Court judgment', cat: 'appeal' } as any, // dynamic backward-compatibility cast
  { art: '164', desc: 'Application for execution of civil decree', period: '3 years', from: 'Date when the decree becomes enforceable', cat: 'execution' },
  { art: '178', desc: 'Application to file in court an agreement to refer to arbitration', period: '90 days', from: 'When the right to apply accrues', cat: 'other' },
  { art: '181', desc: 'Application for execution of decree for which no period is provided', period: '3 years', from: 'When the right to apply accrues', cat: 'execution' }
];

export const LAWYERS: Lawyer[] = [
  {
    id: 1,
    name: "Ahmed Hassan Khan",
    specialization: "Criminal Law",
    city: "Karachi",
    experience: 12,
    rating: 4.8,
    reviewCount: 47,
    reviewText: "Excellent handling of my pre-arrest bail petition. Absolute professional.",
    freeConsultation: true,
    phone: "+92-21-3456789",
    email: "ahmed.khan@lexpk-mkt.com"
  },
  {
    id: 2,
    name: "Sarah Mahmood",
    specialization: "Family Law & Khula",
    city: "Lahore",
    experience: 8,
    rating: 4.9,
    reviewCount: 62,
    reviewText: "Compassionate, highly structured and effective in high-conflict custody cases.",
    freeConsultation: false,
    phone: "+92-42-9876543",
    email: "sarah.mahmood@lexpk-mkt.com"
  },
  {
    id: 3,
    name: "Muhammad Ali Raza",
    specialization: "Corporate & Tech Laws",
    city: "Islamabad",
    experience: 15,
    rating: 4.7,
    reviewCount: 38,
    reviewText: "Assisted our startup flawlessly during company incorporation and SECP filings.",
    freeConsultation: true,
    phone: "+92-51-2345678",
    email: "ali.raza@lexpk-mkt.com"
  },
  {
    id: 4,
    name: "Fatima Sheikh",
    specialization: "Civil Law",
    city: "Rawalpindi",
    experience: 6,
    rating: 4.6,
    reviewCount: 29,
    reviewText: "Very thorough with property disputes. Relieved us of legal worries.",
    freeConsultation: false,
    phone: "+92-51-8765432",
    email: "fatima.sheikh@lexpk-mkt.com"
  },
  {
    id: 5,
    name: "Bilal Ahmed",
    specialization: "Tax Law",
    city: "Karachi",
    experience: 10,
    rating: 4.5,
    reviewCount: 33,
    reviewText: "Excellent practitioner. Handled our FBR tax audit and appeals process beautifully.",
    freeConsultation: true,
    phone: "+92-21-5678901",
    email: "bilal.ahmed@lexpk-mkt.com"
  },
  {
    id: 6,
    name: "Ayesha Khan",
    specialization: "Property Law",
    city: "Faisalabad",
    experience: 7,
    rating: 4.7,
    reviewCount: 41,
    reviewText: "Handled our residential land partitioning without delays. Very transparent.",
    freeConsultation: false,
    phone: "+92-41-3456789",
    email: "ayesha.khan@lexpk-mkt.com"
  },
  {
    id: 7,
    name: "Awais Iqbal",
    specialization: "Civil and Criminal Law",
    city: "Lahore",
    experience: 5,
    rating: 5.0,
    reviewCount: 19,
    reviewText: "Extremely dedicated vakeel. Very thorough in the preparation of trials and cross-examinations.",
    freeConsultation: true,
    phone: "+92-336-7744795",
    email: "awais.iqbal@lexpk-mkt.com"
  },
  {
    id: 8,
    name: "Shuja Ali",
    specialization: "Criminal and Family Law",
    city: "Kasur",
    experience: 4,
    rating: 4.5,
    reviewCount: 14,
    reviewText: "Extremely responsive, helpful and provides practical solutions to complex disputes.",
    freeConsultation: true,
    phone: "+92-307-4916312",
    email: "shuja.ali@lexpk-mkt.com"
  },
  {
    id: 9,
    name: "Abdul Muqeet",
    specialization: "Civil and Criminal Law",
    city: "Karachi",
    experience: 3,
    rating: 4.0,
    reviewCount: 20,
    reviewText: "Reliable, accessible, and provides straightforward legal analysis.",
    freeConsultation: true,
    phone: "+92-318-0149167",
    email: "muqeet.abdul@lexpk-mkt.com"
  }
];

export const DRAFT_TYPES: DraftType[] = [
  {
    id: 'bail_app',
    cat: 'Criminal',
    icon: '🏛️',
    name: 'Bail Application',
    desc: 'Pre-arrest or post-arrest bail petition under Section 497/498 CrPC.',
    badge: 'bg-red-55 text-red-800 border-red-200/50',
    fields: ['Applicant Full Name', 'CNIC No.', 'FIR Number & Police Station', 'Section(s) of PPC Law', 'Date of Arrest / Threatened Arrest', 'Primary Grounds for Bail', 'Surety Amount Proposed'],
    prompt: (d) => `Draft a formal, court-ready Bail Application under Section 497/498 of the Code of Criminal Procedure 1898 (CrPC) for the Sessions Court in Pakistan. 
    Applicant Name: ${d[0]}
    CNIC: ${d[1]}
    FIR Number: ${d[2]}
    Offence Sections: ${d[3]}
    Arrest Status: ${d[4]}
    Main Grounds to urge: ${d[5]}
    Surety Bond: ${d[6]}.
    Include formal headnotes (In the Court of...), a respectful opening ("Respectfully Sheweth"), fully numbered contentions, and a robust "Prayer" clause requesting immediate release/interim relief.`
  },
  {
    id: 'fir_complaint',
    cat: 'Criminal',
    icon: '📋',
    name: 'Written Complaint / FIR',
    desc: 'Formal signed complaint addressed to the SHO to register a criminal FIR.',
    badge: 'bg-red-55 text-red-800 border-red-200/50',
    fields: ['Complainant Name & CNIC', 'Complainant Address', 'Accused Name(s)/Identity', 'Specific Date, Time & Location of Offense', 'Complete Description of Offense', 'Witnesses (if any) Available', 'Evidence list (CCTV, documents, hurt certs)'],
    prompt: (d) => `Draft a formal, signed written complaint to the Station House Officer (SHO) of the concerned Police Station under Section 154 of the Code of Criminal Procedure 1898 (CrPC) for registration of an FIR under the Pakistan Penal Code.
    Complainant: ${d[0]}
    Address: ${d[1]}
    Accused: ${d[2]}
    Incident details: ${d[3]}
    Offense details: ${d[4]}
    Witnesses: ${d[5]}
    Evidence: ${d[6]}.
    Follow formal administrative police complaint norms, using highly assertive legal terms.`
  },
  {
    id: 'anticipatory',
    cat: 'Criminal',
    icon: '🛡️',
    name: 'Anticipatory Bail',
    desc: 'Pre-arrest bail petition under Section 498 CrPC to prevent political/malicious arrest.',
    badge: 'bg-red-55 text-red-800 border-red-200/50',
    fields: ['Applicant Name & CNIC', 'Residential Address', 'Apprehended Police Station', 'Section(s) Apprehended', 'Detailed explanation of Apprehension & Mala fides', 'Social standing / Profession of Applicant'],
    prompt: (d) => `Draft an Anticipatory Bail (Bail Before Arrest) application under Section 498 of the CrPC 1898 to be filed before the honorable Sessions Court or High Court.
    Applicant: ${d[0]}
    Address: ${d[1]}
    Police Station: ${d[2]}
    Sections: ${d[3]}
    Apprehension & Bias: ${d[4]}
    Profession: ${d[5]}.
    Focus heavily on proving mala fide intent, political/personal rivalry, and lack of flight risk.`
  },
  {
    id: 'civil_suit',
    cat: 'Civil',
    icon: '⚖️',
    name: 'Civil Suit / Plaint',
    desc: 'Plaint for declaration, specific performance, or recovery under CPC Order VII.',
    badge: 'bg-indigo-50 text-indigo-850 border-indigo-200',
    fields: ['Plaintiff Name & Address', 'Defendant Name & Address', 'Subject Matter of Dispute', 'Factual Background of Claim', 'Date Cause of Action Arose', 'Definite Value of Suit (PKR)', 'Specific Relief/Decree Sought'],
    prompt: (d) => `Draft a professional Pleading Plaint (civil suit) under Order VII Rule 1 of the Code of Civil Procedure 1908 (CPC) to be filed before the Senior Civil Judge.
    Plaintiff: ${d[0]}
    Defendant: ${d[1]}
    Subject: ${d[2]}
    Background: ${d[3]}
    Cause of Action Date: ${d[4]}
    Valuation: PKR ${d[5]}
    Relief: ${d[6]}.
    Include formal court headers, explicit paragraphing, valuation statements for court fees, jurisdictional statements, and a detailed verification block.`
  },
  {
    id: 'written_stmt',
    cat: 'Civil',
    icon: '📝',
    name: 'Written Statement',
    desc: 'Defendant reply on merits with preliminary objections under CPC Order VIII.',
    badge: 'bg-indigo-50 text-indigo-850 border-indigo-200',
    fields: ['Defendant Name & CNIC', 'Plaintiff Full Name', 'Civ. Suit Number & Presiding Judge', 'Preliminary Objections (Jurisdiction, Limitation)', 'Para-wise Reply to Plaint', 'Alternative Version of Facts', 'Counter-Claim Details (if any)'],
    prompt: (d) => `Draft a formal Written Statement (Defense Reply) under Order VIII of the CPC 1908.
    Defendant: ${d[0]}
    Plaintiff: ${d[1]}
    Suit details: ${d[2]}
    Preliminary Objections: ${d[3]}
    Para-by-Para Reply: ${d[4]}
    Facts: ${d[5]}
    Counter-claim: ${d[6]}.
    Structure meticulously with distinct headers for Preliminary Objections, Reply on Facts, and Verification.`
  },
  {
    id: 'affidavit',
    cat: 'Civil',
    icon: '🗂️',
    name: 'Affidavit of Solemn Oath',
    desc: 'Sworn affidavit of facts to file with court petitions under Qanun-e-Shahadat 1984.',
    badge: 'bg-indigo-50 text-indigo-850 border-indigo-200',
    fields: ['Deponent Full Name & CNIC', 'Father/Husband Name & Address', 'Subject Court Petition', 'Affirmed Facts (enumerated)', 'Official authority to submit'],
    prompt: (d) => `Draft a formal Sworn Affidavit of Oath under Pakistani civil law.
    Deponent: ${d[0]}
    Parent/Husband: ${d[1]}
    Address: ${d[2]}
    Related Petition: ${d[3]}
    Affirmed Facts: ${d[4]}
    Authority: ${d[5]}.
    Ensure proper legal oaths ("solemnly affirm and declare on oath..."), numbered affirmations of truth, a jurat / attestation block, and Verification.`
  },
  {
    id: 'poa',
    cat: 'Civil',
    icon: '📜',
    name: 'Power of Attorney',
    desc: 'General or Special Power of Attorney delegating legal rights and representation.',
    badge: 'bg-indigo-50 text-indigo-850 border-indigo-200',
    fields: ['Principal Name & CNIC', 'Principal Address', 'Attorney Name & CNIC', 'Attorney Address', 'Scope of Authorized Power (Litigation/Sale)', 'Property details (if applicable)', 'Duration / Revocation clauses'],
    prompt: (d) => `Draft a formal Power of Attorney (General or Special) under the Power of Attorney Act and Registration Act 1908 of Pakistan.
    Principal: ${d[0]}
    Principal Address: ${d[1]}
    Attorney: ${d[2]}
    Attorney Address: ${d[3]}
    Powers Delegated: ${d[4]}
    Property: ${d[5]}
    Term/Revocability: ${d[6]}.
    Include precise delegation clauses, third-party reliance clauses, a witness execution segment, and required notary placeholders.`
  },
  {
    id: 'stay_order',
    cat: 'Civil',
    icon: '✋',
    name: 'Stay Order Application',
    desc: 'Interim stay injunction petition under Order 39 Rules 1-2 CPC.',
    badge: 'bg-indigo-50 text-indigo-850 border-indigo-200',
    fields: ['Applicant Name', 'Pending Civil Suit Title & No.', 'Defendant / Respondent Name', 'Subject property or action to restrain', 'Fears of Irreparable Loss & Damage', 'Proof of Balance of Convenience'],
    prompt: (d) => `Draft an Application for Temporary Injunction under Order XXXIX Rules 1 & 2 of the Code of Civil Procedure 1908 (CPC).
    Applicant: ${d[0]}
    Suit details: ${d[1]}
    Respondent: ${d[2]}
    Restraint area: ${d[3]}
    Irreparable Injury: ${d[4]}
    Convenience balance: ${d[5]}.
    Argue the tri-partite test for stay requests: prima facie case, balance of convenience, and irreparable loss.`
  },
  {
    id: 'khula_petition',
    cat: 'Family',
    icon: '👩‍⚖️',
    name: 'Khula Petition',
    desc: 'Dissolution of Muslim marriage petition filed by the wife before Family Court.',
    badge: 'bg-purple-55 text-purple-800 border-purple-200',
    fields: ['Wife Name (Petitioner)', 'Husband Name (Respondent)', 'Date of Nikah & Mehr details', 'Names & Ages of Children (if any)', 'Grounds for seeking Khula', 'Relief Sought / Nikah Nama Cancellation'],
    prompt: (d) => `Draft a Family Court Plaint for Dissolution of Marriage on the basis of Khula under the Dissolution of Muslim Marriages Act 1939 and the Family Courts Act 1964.
    Petitioner (Wife): ${d[0]}
    Respondent (Husband): ${d[1]}
    Marriage Date & Mehr: ${d[2]}
    Minors involved: ${d[3]}
    Grounds for Khula (e.g. desertion, physical cruelty, mental incompatibility making it impossible to live within limits of Allah): ${d[4]}
    Relief: ${d[5]}.
    Include formal page title, verification block, valuation statement, and explicit statements relinquishing her right to deferred Mehr/maintenance to secure Khula.`
  },
  {
    id: 'talaq_notice',
    cat: 'Family',
    icon: '📩',
    name: 'Talaq Notice (Section 7)',
    desc: 'Written notice of talaq sent to Union Council Chairman & wife.',
    badge: 'bg-purple-55 text-purple-800 border-purple-200',
    fields: ['Husband Name & CNIC', 'Wife Name & CNIC', 'Marriage Date & Union Council Jurisdiction', 'Date and Pronouncement Method of Talaq', 'Current Addresses', '90-day Reconciliation details'],
    prompt: (d) => `Draft a formal Divorce (Talaq) Notice to be sent to the Chairman, Union Council under Section 7 of the Muslim Family Laws Ordinance 1961, with a mandatory duplicate copy marked to the wife.
    Husband: ${d[0]}
    Wife: ${d[1]}
    Jurisdiction details: ${d[2]}
    Pronouncement details: ${d[3]}
    Addresses: ${d[4]}
    Ids & Iddat notes: ${d[5]}.
    Adhere strictly to the statutory layout required under Section 7 of Ordinance VIII of 1961.`
  },
  {
    id: 'maintenance',
    cat: 'Family',
    icon: '💰',
    name: 'Maintenance Petition',
    desc: 'Claim for regular monthly maintenance expenses for wife and minor children.',
    badge: 'bg-purple-55 text-purple-800 border-purple-200',
    fields: ['Petitioner Name (Wife/Children)', 'Respondent Name (Husband/Father)', 'Nikah date & Relationship Status', 'Number & Expense details of Minors', 'Estimated Financial Resources of Respondent', 'Required monthly sum (PKR) demanded'],
    prompt: (d) => `Draft a Petition for Maintenance for Wife and children under Section 5 (Schedule) of the Family Courts Act 1964 and Section 9 of the Muslim Family Laws Ordinance 1961.
    Petitioner: ${d[0]}
    Respondent: ${d[1]}
    Marriage details: ${d[2]}
    Children details: ${d[3]}
    Husband income: ${d[4]}
    Demanded monthly allowance: PKR ${d[5]}.
    Focus on proving the statutory duty of maintenance, negligence of the respondent, and exact school/food expense breakdowns.`
  },
  {
    id: 'custody',
    cat: 'Family',
    icon: '👶',
    name: 'Child Custody Petition',
    desc: 'Petition for guardianship or hizanat custody under Guardians & Wards Act.',
    badge: 'bg-purple-55 text-purple-800 border-purple-200',
    fields: ['Petitioner Full Name', 'Respondent Full Name', 'Minor Child(ren) Details (Name, Age, DOB)', 'Current living arrangement of Minors', 'Primary Grounds for custody / Best Interest factors', 'Financial & moral capacity of Petitioner'],
    prompt: (d) => `Draft a Petition for custody of minors under Section 25 of the Guardians and Wards Act 1890 to be filed before the Guardian Judge (Family Court).
    Petitioner: ${d[0]}
    Respondent: ${d[1]}
    Minors: ${d[2]}
    Current setup: ${d[3]}
    Grounds for custody: ${d[4]}
    Capacity: ${d[5]}.
    Concentrate on the primary legal test in Pakistan: the welfare of the minor ('Welfare of the Child is the supreme consideration').`
  },
  {
    id: 'rent_agree',
    cat: 'Property',
    icon: '🏠',
    name: 'Tenancy Agreement',
    desc: 'Residential or commercial rental agreement under Provincial Rented Premises Acts.',
    badge: 'bg-stone-50 text-stone-850 border-stone-200',
    fields: ['Landlord Name & CNIC', 'Tenant Name & CNIC', 'Demised Property Address', 'Monthly Rent (PKR)', 'Security Deposit (Bayana)', 'Tenancy Duration', 'Notice Period for Vacating'],
    prompt: (d) => `Draft a comprehensive Tenancy Deed (Rent Agreement) compliant with the Provincial Rented Premises acts in Pakistan.
    Landlord: ${d[0]}
    Tenant: ${d[1]}
    Property: ${d[2]}
    Monthly Rent: PKR ${d[3]}
    Security Deposit / Advance: PKR ${d[4]}
    Duration: ${d[5]}
    Notice Period: ${d[6]}.
    Incorporate provisions regarding standard monthly rent increase (typically 10% after 11 months), commercial/residential usage constraints, repair responsibilities, utility payments, and non-payment consequences.`
  },
  {
    id: 'sale_deed',
    cat: 'Property',
    icon: '🏡',
    name: 'Property Sale Agreement',
    desc: 'Agreement to Sell/Purchase immovable land or flat (Bayana deed).',
    badge: 'bg-stone-50 text-stone-855 border-stone-200',
    fields: ['Seller Full Name & CNIC', 'Buyer Full Name & CNIC', 'Complete property boundaries & registry number', 'Total settled amount (PKR)', 'Advance/Earnest money paid', 'Final Balance deadline date', 'Possession and Registry transfer clause'],
    prompt: (d) => `Draft a professional and binding Agreement to Sell Immovable Property (Deed of Bayana) under the Transfer of Property Act 1882.
    Seller: ${d[0]}
    Buyer: ${d[1]}
    Property schedule: ${d[2]}
    Price: PKR ${d[3]}
    Earnest money: PKR ${d[4]}
    Balance deadline: ${d[5]}
    Possession: ${d[6]}.
    Include standard clauses detailing title clearance, responsibility for tax clearances (FBR, provincial stamp duties), and default consequences (loss of bayana/double refund).`
  },
  {
    id: 'partnership',
    cat: 'Commercial',
    icon: '🤝',
    name: 'Partnership Deed',
    desc: 'Deed of partnership establishing a joint firm under Partnership Act 1932.',
    badge: 'bg-emerald-50 text-emerald-850 border-emerald-200',
    fields: ['Proposed Firm Name', 'Partner 1 details & CNIC', 'Partner 2 details & CNIC', 'Business Nature & Corporate Office', 'Capital contributed by each Partner', 'Profit & Loss division ratio', 'Arbitration & Retirement clauses'],
    prompt: (d) => `Draft a complete Partnership Deed (Deed of Partnership) under the Partnership Act 1932 to form a registered firm.
    Firm Name: ${d[0]}
    Partner 1: ${d[1]}
    Partner 2: ${d[2]}
    Business Nature: ${d[3]}
    Capital investment: ${d[4]}
    Ratio: ${d[5]}
    Rules/Retirement: ${d[6]}.
    Incorporate statutory arbitration, power of attorney clauses, banking operations rights, and death/dissolution clauses.`
  },
  {
    id: 'service_agree',
    cat: 'Employment',
    icon: '💼',
    name: 'Employment Agreement',
    desc: 'Service and labor contract outlining terms, duties, and termination rules.',
    badge: 'bg-teal-50 text-teal-850 border-teal-200',
    fields: ['Employer Corporate registration details', 'Employee Name & Address', 'Job Title & Primary Duty list', 'Monthly Remuneration & Benefits (PKR)', 'Contract duration / Probation period', 'Termination Notice Policy'],
    prompt: (d) => `Draft a formal Service / Employment Agreement compliant with the Industrial Relations Act and applicable labor laws of Pakistan.
    Employer: ${d[0]}
    Employee: ${d[1]}
    Job details: ${d[2]}
    Remuneration: PKR ${d[3]}
    Probation setup: ${d[4]}
    Termination rules: ${d[5]}.
    Include intellectual property assignment, rigorous confidentiality (NDA) clauses, and non-compete elements.`
  },
  {
    id: 'loan_notice',
    cat: 'Banking',
    icon: '🏦',
    name: 'Default Recovery Notice',
    desc: 'Formal demand notice issued under Financial Institutions Ordinance (FIRO) 2001.',
    badge: 'bg-sky-50 text-sky-850 border-sky-200',
    fields: ['Lending Institution/Bank details', 'Borrower Name & Address', 'Loan Account No. & original amount (PKR)', 'Overdue Default Amount + Mark-ups (PKR)', 'Mortgage/Guarantees pledged', 'Grace period offered (days)'],
    prompt: (d) => `Draft a formal legal notice of Default and Recovery under Section 9 of the Financial Institutions (Recovery of Finances) Ordinance 2001.
    Bank: ${d[0]}
    Borrower: ${d[1]}
    Loan setup: ${d[2]}
    Default: PKR ${d[3]}
    Securities: ${d[4]}
    Grace window: ${d[5]} days.
    Draft referencing statutory bank rights, warning of full suit filing and attachment of mortgaged properties in Banking Courts of Pakistan.`
  },
  {
    id: 'undertaking',
    cat: 'General',
    icon: '✍️',
    name: 'Form of Undertaking',
    desc: 'Personal written undertaking committing to actions or compliance on stamp paper.',
    badge: 'bg-blue-50 text-blue-800 border-blue-250',
    fields: ['Undertaker Name & CNIC', 'Father/Husband Name & Address', 'Institution / Authority Addressed', 'Declarations & Commitments chosen', 'Legal Liabilities accepted upon default'],
    prompt: (d) => `Draft a formal legal Undertaking/Guarantee to be printed on stamp paper for official submission.
    Declarant: ${d[0]}
    Relative: ${d[1]}
    Addressed to: ${d[2]}
    Commitment text: ${d[3]}
    Liabilities: ${d[4]}.
    Structure with precise legal language confirming that any deviation will result in civil and criminal liability under the law.`
  },
  {
    id: 'writ_petition',
    cat: 'General',
    icon: '🏛️',
    name: 'Constitutional Writ Petition',
    desc: 'Writ Petition under Article 199 for enforcement of Fundamental Rights.',
    badge: 'bg-blue-50 text-blue-800 border-blue-250',
    fields: ['Petitioner details & CNIC', 'Respondents (State, Department, or Officer)', 'Factual backdrop of state overreach / inaction', 'Specific Fundamental Rights (Articles) infringed', 'Interim Relief (Stay) proposed'],
    prompt: (d) => `Draft a Constitutional Writ Petition under Article 199 of the Constitution of Pakistan 1973 for the Honourable High Court.
    Petitioner: ${d[0]}
    Respondent: ${d[1]}
    Facts: ${d[2]}
    Rights violated: Articles ${d[3]}
    Interim stay request: ${d[4]}.
    Include formal headnotes, thorough legal grounds supported by constitutional references, and a dual prayer (interim stay and final directive).`
  },
  {
    id: 'succession',
    cat: 'General',
    icon: '📖',
    name: 'Succession Certificate',
    desc: 'Application to secure Succession from court or NADRA under Succession Act.',
    badge: 'bg-blue-50 text-blue-800 border-blue-255',
    fields: ['Applicant Name & relation to deceased', 'Deceased Name & Date of Death (certificates)', 'Assets left behind (Bank accounts, shares, savings)', 'List of all surviving Legal Heirs & CNICs', 'Affidavit details confirming sole heirs'],
    prompt: (d) => `Draft an Application for Succession Certificate under the Succession Act 1925 to be filed before the competent District Judge / Civil Court or NADRA guidelines.
    Applicant: ${d[0]}
    Deceased details: ${d[1]}
    Assets: ${d[2]}
    Heirs list: ${d[3]}
    Affidavit reference: ${d[4]}.
    Set out statutory procedures for public publication notices in newspapers and include standard executor/administrative prayer clauses.`
  },
  {
    id: 'defamation_notice',
    cat: 'Civil',
    icon: '📢',
    name: 'Legal Notice for Defamation',
    desc: 'Formal legal notice of defamation demanding retraction & damages under Defamation Act.',
    badge: 'bg-[#FAF9F5] text-stone-850 border-stone-200',
    fields: ['Sender Name & CNIC', 'Recipient Address', 'Specific false statements spoken/written', 'Loss of reputation descriptions', 'Unconditional apology window (days)', 'Requested compensation damages (PKR)'],
    prompt: (d) => `Draft a formal legal Notice for Defamation under Section 8 of the Defamation Act 2024.
    Sender: ${d[0]}
    Recipient: ${d[1]}
    False statements: ${d[2]}
    Reputational Loss: ${d[3]}
    Apology Window: ${d[4]} days
    Damages Claim: PKR ${d[5]}.
    Incorporate stern warnings on filing criminal cases and civil suits claiming damage value if apology is outstanding.`
  },
  {
    id: 'gift_deed',
    cat: 'Property',
    icon: '🎁',
    name: 'Gift Deed (Hiba Nama)',
    desc: 'Transfer of property deed without monetary exchange under Transfer of Property Act.',
    badge: 'bg-amber-50 text-amber-850 border-amber-200',
    fields: ['Donor (Giver) Name & CNIC', 'Donee (Receiver) Name & CNIC', 'Relationship between parties', 'Property description & boundaries', 'Declaration of absolute possession handover', 'Witnesses (Names & CNICs)'],
    prompt: (d) => `Draft a complete Hiba Deed (Gift Deed) of Immovable Property under Muhammadan Law and Transfer of Property Act 1882.
    Donor: ${d[0]}
    Donee: ${d[1]}
    Relationship: ${d[2]}
    Property details: ${d[3]}
    Possession status: ${d[4]}
    Witnesses: ${d[5]}.
    Structure explaining three integral conditions of Islamic Hiba: Declaration (Ijab), Acceptance (Qubool), and Delivery of Possession (Qabza).`
  },
  {
    id: 'promissory_note',
    cat: 'Commercial',
    icon: '📝',
    name: 'Promissory Note (Prom Note)',
    desc: 'Unconditional written promise to pay money on demand under Negotiable Instruments Act.',
    badge: 'bg-emerald-50 text-emerald-850 border-emerald-200',
    fields: ['Promisor Name & CNIC', 'Promisee Name & CNIC', 'Principal sum borrowed (PKR)', 'Annual interest/mark-up (if any)', 'Maturity/repayment deadline date', 'Signatures and stamp record details'],
    prompt: (d) => `Draft a binding Promissory Note under Section 4 of the Negotiable Instruments Act 1881.
    Promisor: ${d[0]}
    Promisee: ${d[1]}
    Principal: PKR ${d[2]}
    Mark-up: ${d[3]}
    Deadline: ${d[4]}
    Stamp details: ${d[5]}.
    Write in explicit, unconditional commitment terminology and include standard default clauses.`
  },
  {
    id: 'consumer_complaint',
    cat: 'Commercial',
    icon: '🛍️',
    name: 'Consumer Protection Complaint',
    desc: 'Form of complaint submitted before the District Consumer Protection Authority/Court.',
    badge: 'bg-emerald-50 text-emerald-850 border-emerald-200',
    fields: ['Complainant Name & Address', 'Vendor/Service Provider details', 'Product/Service details containing defect', 'Specific loss or injury suffered', 'Pre-complaint written warning date', 'Requested solution / monetary relief'],
    prompt: (d) => `Draft a formal Complaint to the District Consumer Court under the provincial Consumer Protection Act.
    Complainant: ${d[0]}
    Vendor: ${d[1]}
    Product defect: ${d[2]}
    Loss suffered: ${d[3]}
    Warning date: ${d[4]}
    Request: ${d[5]}.
    Include legal headnotes, statements confirming dispatch of standard 15-day pre-complaint legal notice, and comprehensive relief statements.`
  },
  {
    id: 'partnership_termination',
    cat: 'Commercial',
    icon: '📄',
    name: 'Partnership Dissolution Deed',
    desc: 'Formal contract closing down a firm and settling assets under Partnership Act.',
    badge: 'bg-emerald-50 text-emerald-850 border-emerald-200',
    fields: ['Registered Firm Name & Address', 'Partner 1 Name & CNIC', 'Partner 2 Name & CNIC', 'Date of initial Partnership Deed', 'Distribution plan for remaining assets/debts', 'Mutually signed liability releases'],
    prompt: (d) => `Draft a Partnership Dissolution Deed under Section 40/43 of the Partnership Act 1932.
    Firm: ${d[0]}
    Partner 1: ${d[1]}
    Partner 2: ${d[2]}
    Initial Deed Date: ${d[3]}
    Asset splits: ${d[4]}
    Liability releases: ${d[5]}.
    Follow strict commercial standards with legal indemnification clauses and public notifications requirements.`
  },
  {
    id: 'nda',
    cat: 'Employment',
    icon: '🔒',
    name: 'Non-Disclosure Deed (NDA)',
    desc: 'Confidentiality agreement protecting corporate trade secrets & data.',
    badge: 'bg-teal-50 text-teal-850 border-teal-200',
    fields: ['Disclosing Party details', 'Receiving Party/Employee details', 'Definition of Confidential Information', 'Notice and injunctive relief clauses', 'Duration of obligations post-employment', 'Jurisdiction/Governing Court address'],
    prompt: (d) => `Draft a standard, watertight Non-Disclosure Agreement (confidentiality deed) for employees or contractors.
    Discloser: ${d[0]}
    Recipient: ${d[1]}
    Information bound: ${d[2]}
    Remedies: ${d[3]}
    Duration: ${d[4]}
    Jurisdiction: ${d[5]}.
    Include stringent trade-secret definition parameters and explicit equitable injunctive relief clauses.`
  }
];
