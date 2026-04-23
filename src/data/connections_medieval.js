// medieval
// 每條連線都必須是有史料記載的真實接觸
export const CONNECTIONS_MEDIEVAL = [
  {
    id: 'c036', from: 'zhugeliang', to: 'sima_yi',
    year: 231, type: 'military',
    desc_zh: `諸葛亮與司馬懿在五丈原等地的對峙是三國史上的巔峰對決。`,
    source_zh: `《三國志》`, source_en: `Historical Records`
  },
  {
    id: 'c037', from: 'sima_yi', to: 'sima_zhao',
    year: 239, type: 'meet',
    desc_zh: `司馬昭為司馬懿次子，自幼隨父征戰。前239年司馬懿奉命輔佐魏帝曹芳，司馬昭在父親麾下歷練，後來父子聯手掌控魏國朝政，是三國末期最重要的政治父子檔。`,
    source_zh: `《資治通鑑》`, source_en: `Historical Records`
  },
  {
    id: 'c038', from: 'li_shimin', to: 'wu_zetian',
    year: 637, type: 'political',
    desc_zh: `武則天14歲入宮成為唐太宗的才人，兩人有過早期的宮廷交集。`,
    source_zh: `《舊唐書》`, source_en: `Historical Records`
  },
  {
    id: 'c039', from: 'wu_zetian', to: 'gaozong_li_zhi',
    year: 650, type: 'political',
    desc_zh: `唐高宗將武則天從感業寺接回，兩人共同統治唐朝多年。`,
    source_zh: `《資治通鑑》`, source_en: `Historical Records`
  },
  {
    id: 'c040', from: 'wu_zetian', to: 'tang_xuanzong',
    year: 692, type: 'political',
    desc_zh: `年僅7歲的李隆基曾在宮中怒斥武家衛士，獲得祖母武則天的賞識。`,
    source_zh: `《舊唐書》`, source_en: `Historical Records`
  },
  {
    id: 'c041', from: 'tang_xuanzong', to: 'li_bai',
    year: 742, type: 'political',
    desc_zh: `唐玄宗在翰林院親自召見李白，留下「力士脫靴、貴妃研墨」的傳奇。`,
    source_zh: `《唐才子傳》`, source_en: `Historical Records`
  },
  {
    id: 'c045', from: 'wen_tianxiang', to: 'kublai_khan',
    year: 1279, type: 'diplomatic',
    desc_zh: `忽必烈在大都親自勸降文天祥，文天祥拒絕後從容就義，贏得了忽必烈的敬重。`,
    source_zh: `《元史》`, source_en: `Historical Records`
  },
  {
    id: 'c047', from: 'zhu_yuanzhang', to: 'zhu_di',
    year: 1380, type: 'political',
    desc_zh: `朱元璋與其次子朱棣，兩人因皇權繼承引發了後來的靖難之役。`,
    source_zh: `《明史》`, source_en: `Historical Records`
  },
  {
    id: 'c_p1_12', from: 'zheng_xiaotong', to: 'sima_zhao',
    year: 255, type: 'meet',
    desc_zh: `鄭小同任魏侍中時曾詣司馬昭，無意見到司馬昭的機密奏疏。司馬昭以「寧我負卿，無卿負我」為由將其毒殺，此事記於《魏氏春秋》。`,
    source_zh: `後漢書·卷35注引《魏氏春秋》`, source_en: `Wei Shi Chun Qiu`
  },
  {
    id: 'c_p1_13', from: 'sima_zhao', to: 'sima_zhong',
    year: 265, type: 'family',
    desc_zh: `晉惠帝司馬衷是司馬炎之子，司馬炎是司馬昭之子，因此司馬衷是司馬昭的親孫子，西晉皇統的延續。`,
    source_zh: `晉書·卷4`, source_en: `Book of Jin, Vol.4`
  },
  {
    id: 'c_p1_14', from: 'sima_zhong', to: 'wen_jiao',
    year: 290, type: 'colleague',
    desc_zh: `溫嶠在晉惠帝在位期間出仕，初任散騎常侍等職，在西晉末年的政治動盪中嶄露頭角，是連接西晉末年與東晉初年的重要政治人物。`,
    source_zh: `晉書·卷67`, source_en: `Book of Jin, Vol.67`
  },
  {
    id: 'c_p1_15', from: 'wen_jiao', to: 'huan_wen',
    year: 312, type: 'meet',
    desc_zh: `桓溫初生時，太原溫嶠親見之，嘆曰『此兒有奇骨，可試使啼。』聞其聲後又說『真英物也！』因溫嶠的賞識，其父為他取名「溫」，桓溫之名由此而來。`,
    source_zh: `晉書·卷98`, source_en: `Book of Jin, Vol.98`
  },
  {
    id: 'c_p1_16', from: 'huan_wen', to: 'zhu_chuo',
    year: 350, type: 'colleague',
    desc_zh: `朱綽是桓溫的部將，攻戰勇猛。攻壽陽時擅自發棺戮屍，桓溫大怒欲斬之，後經桓溫之弟桓沖苦求才得免死。`,
    source_zh: `宋書·卷48`, source_en: `Book of Song, Vol.48`
  },
  {
    id: 'c_p1_17', from: 'zhu_chuo', to: 'zhu_lingshi',
    year: 395, type: 'family',
    desc_zh: `朱齡石是朱綽之子，繼承父親的武將家風。劉宋時被任命為伐蜀元帥，率二萬人攻克益州，是劉宋開國的重要戰功。`,
    source_zh: `宋書·卷48`, source_en: `Book of Song, Vol.48`
  },
  {
    id: 'c_p1_18', from: 'zhu_lingshi', to: 'xiao_chengzhi',
    year: 409, type: 'colleague',
    desc_zh: `蕭承之曾任朱齡石部下建威府參軍，義熙年間隨朱齡石參與平定蜀地之役，由此踏上軍旅生涯，成為日後南齊開國皇族的先祖。`,
    source_zh: `宋書·卷48；南齊書·卷1`, source_en: `Book of Song; Book of Southern Qi`
  },
  {
    id: 'c_p1_19', from: 'xiao_chengzhi', to: 'xiao_ze',
    year: 445, type: 'family',
    desc_zh: `蕭賜（齊武帝）幼年即侍奉祖父蕭承之（d.449），南齊書記蕭承之臨終前曾撫育諸孫。`,
    source_zh: `南齊書·卷3`, source_en: `Book of Southern Qi, Vol.3`
  },
  {
    id: 'c_p1_20', from: 'xiao_ze', to: 'xiao_yan',
    year: 487, type: 'family',
    desc_zh: `蕭衍（梁武帝）是蕭賜（南齊武帝）的族弟兼臣子，兩人同屬南蘭陵蕭氏，蕭衍早年在蕭賜朝廷任職，後代齊稱帝建梁。`,
    source_zh: `梁書·卷1`, source_en: `Book of Liang, Vol.1`
  },
  {
    id: 'c_p1_21', from: 'xiao_yan', to: 'xiao_kui',
    year: 542, type: 'family',
    desc_zh: `蕭岿是梁武帝蕭衍的曾孫子，其祖父為梁昭明太子蕭統，父親蕭察在西魏支持下建立西梁。`,
    source_zh: `隋書·卷79`, source_en: `Book of Sui, Vol.79`
  },
  {
    id: 'c_p1_22', from: 'xiao_kui', to: 'xiao_huanghou',
    year: 567, type: 'family',
    desc_zh: `蕭皇后是梁明帝蕭岿之女，父女關係。因南方習俗二月生者不舉，由叔父收養，後嫁給隋太子楊廣，成為著名的隋朝皇后。`,
    source_zh: `隋書·卷36`, source_en: `Book of Sui, Vol.36`
  },
  {
    id: 'c_p1_23', from: 'xiao_huanghou', to: 'yang_zhengdao',
    year: 617, type: 'family',
    desc_zh: `楊政道是蕭皇后的孫子，隋煬帝楊廣的遺腹子。隋亡後祖孫二人同入突厥，處羅可汗封楊政道為「隋王」，貞觀初年李靖破突厥後，祖孫同歸唐朝。`,
    source_zh: `隋書·卷59`, source_en: `Book of Sui, Vol.59`
  },
  {
    id: 'c_p1_24', from: 'yang_zhengdao', to: 'yang_chongli',
    year: 650, type: 'family',
    desc_zh: `楊崇禮是楊政道之子，以父蔭入仕。出任太府卿二十年，公清如一，對府庫錢帛親自省察，是開元年間著名的廉潔官員。`,
    source_zh: `舊唐書·卷105`, source_en: `Old Book of Tang, Vol.105`
  },
  {
    id: 'c_p1_25', from: 'yang_chongli', to: 'yang_shenming',
    year: 720, type: 'family',
    desc_zh: `楊慎名是楊崇禮之子，為人勤恪清白有父風，與兄楊慎餘、楊慎矜均以清廉著稱，玄宗訪其子堪委父任者，三人均受稱許。`,
    source_zh: `舊唐書·卷105`, source_en: `Old Book of Tang, Vol.105`
  },
  {
    id: 'c_p1_26', from: 'yang_shenming', to: 'yan_zhenqing',
    year: 746, type: 'meet',
    desc_zh: `顏真卿奉命以臨察御史身份，前往東京宣旨賜死楊慎名。楊慎名臨終請求書寫數行告別信，顏真卿允許，親眼見證了楊慎名的赴死。`,
    source_zh: `舊唐書·卷105`, source_en: `Old Book of Tang, Vol.105`
  },
  {
    id: 'c_p1_27', from: 'yan_zhenqing', to: 'li_song',
    year: 785, type: 'mentor',
    desc_zh: `顏真卿歷任太子少傅、太子太師，是唐順宗李誦為太子時的帝師。兩人有正式的師生關係，顏真卿的忠義精神深刻影響了李誦。`,
    source_zh: `舊唐書·卷14；卷128`, source_en: `Old Book of Tang, Vol.14, 128`
  },
  {
    id: 'c_p1_28', from: 'li_song', to: 'pei_du',
    year: 806, type: 'colleague',
    desc_zh: `裴度於貞元初登進士第，唐順宗在位期間曾任監察御史，是李誦朝廷的官員，後在憲宗朝（李誦之子）大放異彩，三度拜相。`,
    source_zh: `新唐書·卷173`, source_en: `New Book of Tang, Vol.173`
  },
  {
    id: 'c_p1_29', from: 'pei_du', to: 'pei_shen',
    year: 840, type: 'family',
    desc_zh: `裴諶是裴度之子，仕至太子少師，封河東郡公，繼承了父親的爵位與聲望。`,
    source_zh: `新唐書·卷173`, source_en: `New Book of Tang, Vol.173`
  },
  {
    id: 'c_p1_30', from: 'pei_shen', to: 'huang_chao',
    year: 881, type: 'meet',
    desc_zh: `黃巢攻陷長安後，強迫前朝官員接受偽職，裴諶拒絕屈服，被黃巢殺害，以殉國之節著稱史冊。`,
    source_zh: `新唐書·卷173`, source_en: `New Book of Tang, Vol.173`
  },
  {
    id: 'c_p1_31', from: 'huang_chao', to: 'zhu_wen',
    year: 878, type: 'colleague',
    desc_zh: `朱溫原為黃巢的重要部將，在黃巢軍中力戰屢捷，得補為隊長。後見黃巢大勢已去，率部降唐，被賜名「全忠」，並獲封汴州節度使，最終成為唐朝的掘墓人。`,
    source_zh: `舊五代史·卷1`, source_en: `Old History of the Five Dynasties, Vol.1`
  },
  {
    id: 'c_p1_32', from: 'zhu_wen', to: 'li_siyuan',
    year: 884, type: 'meet',
    desc_zh: `上源驛之變中，朱溫（時為朱全忠）趁李克用醉酒，發兵圍攻上源驛，欲殺李克用。年僅十七歲的李嗣源在電閃雷鳴中，翼護養父李克用翻牆逃脫，於亂兵之中獨無所傷。`,
    source_zh: `舊五代史·卷1；卷53`, source_en: `Old History of the Five Dynasties, Vol.1, 53`
  },
  {
    id: 'c_p1_33', from: 'li_siyuan', to: 'huangfu_hui',
    year: 922, type: 'meet',
    desc_zh: `皇甫暉參與魏州兵亂，挾持李嗣源入城，後又效命於李嗣源，獲封陳州刺史。兩人在後唐建立的政治風波中有著複雜的恩怨糾葛。`,
    source_zh: `新五代史·卷49；資治通鑑·卷274`, source_en: `New History of Five Dynasties; Zizhi Tongjian`
  },
  {
    id: 'c_p1_34', from: 'huangfu_hui', to: 'song_taizu',
    year: 956, type: 'meet',
    desc_zh: `後周世宗南征時，皇甫暉整眾迎戰，年輕的趙匡胤拊馬項突陣大呼：「吾止取皇甫暉，他人非吾敵也！」手劍擊暉，中腦生擒之，並擒姚鳳，遂克滁州。`,
    source_zh: `資治通鑑·卷292`, source_en: `Zizhi Tongjian, Vol.292`
  },
  {
    id: 'c_p1_35', from: 'song_taizu', to: 'li_jilong',
    year: 965, type: 'meet',
    desc_zh: `李繼隆幼養於伯父李處耘處，及長以父蔭補供奉官。其父李處耘被貶後，李繼隆以母入贡祝宋太祖壽，趁長春節前往朝廷，復舊官，由此與太祖有過交集。`,
    source_zh: `宋史·卷257`, source_en: `History of Song, Vol.257`
  },
  {
    id: 'c_p1_36', from: 'li_jilong', to: 'liao_shengzong',
    year: 1004, type: 'meet',
    desc_zh: `澶淵之戰（1004年），遼聖宗耶律隆緒御駕親征，李繼隆為駕前東西排陣使，親率宋軍在澶州北城外布陣禦敵，雙方激戰，奠定了澶淵之盟的軍事基礎。`,
    source_zh: `宋史·卷257；續資治通鑑·卷25`, source_en: `History of Song; Continuation of Zizhi Tongjian`
  },
  {
    id: 'c_p1_37', from: 'liao_shengzong', to: 'liao_xingzong',
    year: 1031, type: 'family',
    desc_zh: `遼興宗耶律宗真是遼聖宗耶律隆緒的長子，父子相承，遼聖宗臨終前傳位於興宗。`,
    source_zh: `遼史·卷18`, source_en: `History of Liao, Vol.18`
  },
  {
    id: 'c_p1_38', from: 'liao_xingzong', to: 'liao_daozong',
    year: 1055, type: 'family',
    desc_zh: `遼道宗耶律洪基是遼興宗的長子，父死子繼，在位四十六年，是遼朝在位最長的皇帝之一。`,
    source_zh: `遼史·卷21`, source_en: `History of Liao, Vol.21`
  },
  {
    id: 'c_p1_39', from: 'liao_daozong', to: 'tianzuo_di',
    year: 1101, type: 'family',
    desc_zh: `天祚帝耶律延禧是遼道宗之孫，其父為道宗之子，天祚帝繼承遼朝皇位，但在位期間女真崛起，最終成為遼朝亡國之君。`,
    source_zh: `遼史·卷27`, source_en: `History of Liao, Vol.27`
  },
  {
    id: 'c_p1_40', from: 'tianzuo_di', to: 'wanyan_sheng',
    year: 1125, type: 'meet',
    desc_zh: `金太宗完顏晟攻滅遼朝後，天祚帝耶律延禧在逃亡中被金兵俘獲，送至金京師，被金太宗降封為「海濱王」，遼朝就此正式滅亡。`,
    source_zh: `金史·卷3`, source_en: `History of Jin, Vol.3`
  },
  {
    id: 'c_p1_41', from: 'wanyan_sheng', to: 'qabul_khan',
    year: 1130, type: 'meet',
    desc_zh: `金太宗聞合不勒汗之名，召見之，禮遇甚優。宴會上合不勒酒酣，撫摸金主鬍鬚，左右呵其失禮，金主寬而不罰，厚賜遣之，留下了著名的歷史趣事。`,
    source_zh: `新元史·卷1`, source_en: `New History of Yuan, Vol.1`
  },
  {
    id: 'c_p1_42', from: 'qabul_khan', to: 'yesugei',
    year: 1148, type: 'family',
    desc_zh: `也速該是合不勒汗之孫（合不勒罕第二子把兒壇之子），即成吉思汗鐵木真之父，追諡烈祖神元皇帝。`,
    source_zh: `新元史·卷1`, source_en: `New History of Yuan, Vol.1`
  },
  {
    id: 'c_p1_43', from: 'yesugei', to: 'genghis_khan',
    year: 1162, type: 'family',
    desc_zh: `成吉思汗鐵木真是也速該的長子。也速該在征塔塔兒部時生下鐵木真，以所獲塔塔兒首領之名為兒子命名。也速該遇害時，鐵木真年僅九歲，從此開始艱苦的流亡歲月。`,
    source_zh: `元史·卷1`, source_en: `History of Yuan, Vol.1`
  },
  {
    id: 'c_p1_44', from: 'genghis_khan', to: 'guyuk_khan',
    year: 1220, type: 'family',
    desc_zh: `貴由汗是成吉思汗的孫子，窩闊台之長子。成吉思汗在世時曾見過年幼的貴由，是正常的祖孫關係。`,
    source_zh: `元史·卷2`, source_en: `History of Yuan, Vol.2`
  },
  {
    id: 'c_p1_45', from: 'guyuk_khan', to: 'carpini',
    year: 1246, type: 'meet',
    desc_zh: `柏郎嘉賓奉教皇英諾森四世之命出使蒙古，於1246年親歷貴由汗的登基大典，並獲貴由汗接見，帶回了貴由汗致教皇的回信，是歐洲首次與蒙古帝國的正式外交接觸。`,
    source_zh: `《蒙古史》Historia Mongalorum`, source_en: `Historia Mongalorum (Carpini)`
  },
  {
    id: 'c_p1_46', from: 'carpini', to: 'pope_innocent_iv',
    year: 1245, type: 'colleague',
    desc_zh: `柏郎嘉賓是教皇英諾森四世派遣的特使，奉命前往蒙古帝國試圖建立外交聯繫。他作為教皇的直屬使節，返回後向英諾森四世親口彙報了出使蒙古的全部經過。`,
    source_zh: `里昂第一次大公會議史料`, source_en: `First Council of Lyon`
  },
  {
    id: 'c_p2_01', from: 'zhugeliang', to: 'qiao_zhou',
    year: 228, type: 'colleague',
    desc_zh: `諸葛亮北伐期間親自任命譙周為勸學從事，是蜀漢學術體系的直接聯繫。譙周後來反對諸葛亮的北伐路線，在諸葛亮去世二十三年後主張向鄧艾投降。`,
    source_zh: `三國志·蜀書十二·譙周傳`, source_en: `Records of Three Kingdoms, Shu Vol.12`
  },
  {
    id: 'c_p2_02', from: 'qiao_zhou', to: 'qiao_xiu',
    year: 270, type: 'family',
    desc_zh: `譙秀是譙周之孫，承繼祖父的儒學傳統，年屆八十仍精神矍鑠，學識廣博，受到東晉名將桓溫的專程拜訪。`,
    source_zh: `晉書·隱逸·譙秀傳`, source_en: `Book of Jin, Hermits, Qiao Xiu`
  },
  {
    id: 'c_p2_03', from: 'qiao_xiu', to: 'huan_wen',
    year: 329, type: 'meet',
    desc_zh: `桓溫出任荊州刺史前慕名拜訪蜀地大儒譙秀（329年，尚在譙秀去世前一年），問以民情與治道。`,
    source_zh: `晉書·隱逸·譙秀傳`, source_en: `Book of Jin, Hermits, Qiao Xiu`
  },
  {
    id: 'c_p2_04', from: 'huan_wen', to: 'liu_yu',
    year: 363, type: 'colleague',
    desc_zh: `劉裕年輕時曾在桓溫的北府軍體系中效力，是桓溫麾下軍事體系培養出的一代名將。桓溫死後，劉裕逐步崛起，以桓氏奠定的軍事遺產為基礎，最終建立劉宋。`,
    source_zh: `宋書·武帝本紀`, source_en: `Book of Song, Emperor Wu`
  },
  {
    id: 'c_p2_05', from: 'liu_yu', to: 'liu_yilong',
    year: 422, type: 'family',
    desc_zh: `宋文帝劉義隆是劉裕的第三子，父死子繼，劉裕臨終前傳位給劉義隆，史稱「元嘉之治」，是南朝政治最穩定的三十年。`,
    source_zh: `宋書·文帝本紀`, source_en: `Book of Song, Emperor Wen`
  },
  {
    id: 'c_p2_06', from: 'liu_yilong', to: 'liu_jun',
    year: 453, type: 'family',
    desc_zh: `宋孝武帝劉駿是宋文帝劉義隆的第三子，以兵變弒父奪位，後在位期間積極進行北伐，是南朝宋中期的重要君主。`,
    source_zh: `宋書·孝武帝本紀`, source_en: `Book of Song, Emperor Xiaowu`
  },
  {
    id: 'c_p2_07', from: 'liu_jun', to: 'yin_yan',
    year: 454, type: 'colleague',
    desc_zh: `殷琰曾任宋孝武帝劉駿的豫州刺史，是劉駿朝廷中的重要官員，後在劉子業（前廢帝）時期因立場問題被牽連。`,
    source_zh: `宋書`, source_en: `Book of Song`
  },
  {
    id: 'c_p2_08', from: 'yin_yan', to: 'fan_yun',
    year: 480, type: 'colleague',
    desc_zh: `范雲少年時期在殷琰治理的地區生活，殷家為范雲的早期仕途提供了重要的人際網絡，范雲後成為竟陵八友之一。`,
    source_zh: `南史·范雲傳`, source_en: `History of Southern Dynasties, Fan Yun`
  },
  {
    id: 'c_p2_09', from: 'fan_yun', to: 'xiao_yan',
    year: 502, type: 'colleague',
    desc_zh: `范雲是「竟陵八友」之一，與蕭衍（梁武帝）是多年摯友，蕭衍代齊建梁時，范雲是功居首位的謀士，官至中書監，是梁朝建立的核心功臣。`,
    source_zh: `梁書·卷1；范雲傳`, source_en: `Book of Liang, Vol.1`
  },
  {
    id: 'c_p2_10', from: 'fan_yun', to: 'fan_xiaocai',
    year: 503, type: 'family',
    desc_zh: `范孝才是范雲之子，承父蔭入仕，仕於梁朝，延續了父親在南朝的家族傳承。`,
    source_zh: `南史·范雲傳`, source_en: `History of Southern Dynasties`
  },
  {
    id: 'c_p2_11', from: 'fan_xiaocai', to: 'xu_shanxin',
    year: 558, type: 'family',
    desc_zh: `許善心為范孝才之孫（一說之子），558年出生即在家族蔭庇下，與長輩有過接觸。`,
    source_zh: `隋書·許善心傳`, source_en: `Book of Sui, Xu Shanxin`
  },
  {
    id: 'c_p2_12', from: 'xu_shanxin', to: 'li_shimin',
    year: 621, type: 'meet',
    desc_zh: `許善心隋末拒絕投降宇文化及而被殺，其後代及學術遺產在唐初（李世民朝代）得到重視，李世民詔修的《隋書》正是在許善心等隋朝史家工作的基礎上完成的。`,
    source_zh: `隋書·許善心傳`, source_en: `Book of Sui`
  },
  {
    id: 'c_misc_02', from: 'su_shi', to: 'liao_daozong',
    year: 1085, type: 'meet',
    desc_zh: `遼道宗耶律洪基是蘇軾的同代人，遼道宗酷愛漢文化，曾多次索求蘇軾的詩文，命人抄錄珍藏，史載「燕雲之南有蘇東坡」之語，可見遼道宗對蘇軾的高度推崇。`,
    source_zh: `宋史·遼史相關記載`, source_en: `History of Song; History of Liao`
  },
  {
    id: 'c_misc_13', from: 'sima_zhao', to: 'sima_yan',
    year: 265, type: 'family',
    desc_zh: `司馬炎是司馬昭的長子，司馬昭死後，司馬炎繼承父親的晉王爵位，並逼迫魏帝曹奐禪讓，建立晉朝，是為晉武帝。`,
    source_zh: `晉書·武帝本紀`, source_en: `Book of Jin, Emperor Wu`
  },
  {
    id: 'c_misc_14', from: 'sima_yan', to: 'wang_yan',
    year: 280, type: 'colleague',
    desc_zh: `王衍（王夷甫）是西晉玄學名士，仕於晉武帝司馬炎至晉惠帝司馬衷年間，官至宰輔，以清談著名。是司馬炎一朝及其後的朝廷中心人物，與晉武帝有直接的君臣關係。`,
    source_zh: `晉書·王衍傳`, source_en: `Book of Jin, Wang Yan`
  },
  {
    id: 'c_misc_15', from: 'wang_yan', to: 'wang_dao',
    year: 310, type: 'family',
    desc_zh: `王導（王茂弘）與王衍同屬琅琊王氏，王衍與王導為族兄弟，在八王之亂的最後階段，王衍位居中樞而王導出鎮江南，共為琅琊王氏的代表人物。`,
    source_zh: `晉書·王導傳`, source_en: `Book of Jin, Wang Dao`
  },
  {
    id: 'c_misc_16', from: 'wang_dao', to: 'wang_xizhi',
    year: 340, type: 'family',
    desc_zh: `王羲之是王導的侄子（王曠之子），與王導同屬琅琊王氏，王導對王羲之有提攜之恩，王羲之在東晉書法藝術上的成就與琅琊王氏的文化氛圍密不可分。`,
    source_zh: `晉書·王羲之傳`, source_en: `Book of Jin, Wang Xizhi`
  },
  {
    id: 'c_misc_17', from: 'wang_xizhi', to: 'wang_xianzhi',
    year: 360, type: 'family',
    desc_zh: `王獻之是王羲之的第七子，繼承父親的書法藝術，其行草書被稱為「大令」書法，父子二人並稱「二王」，是中國書法史上最重要的父子藝術傳承。`,
    source_zh: `晉書·王獻之傳`, source_en: `Book of Jin, Wang Xianzhi`
  },
  {
    id: 'c_misc_18', from: 'huan_wen', to: 'liu_yu',
    year: 370, type: 'colleague',
    desc_zh: `劉裕年少時生活貧困，曾賣草鞋為生，後加入東晉北府軍，在桓溫所奠定的軍事體系中逐漸崛起，繼承了桓溫的北伐志業，最終建立劉宋。`,
    source_zh: `宋書·武帝本紀`, source_en: `Book of Song`
  },
  {
    id: 'c_misc_20', from: 'chen_baxian', to: 'xiao_yan',
    year: 548, type: 'meet',
    desc_zh: `陳霸先早年以梁將身份鎮守廣州，侯景之亂（548年）爆發後奉梁武帝蕭衍之命出兵勤王，兩人有明確的君臣關係。陳霸先後來雖平定侯景、建立陳朝，但起點正是梁武帝麾下的將領。`,
    source_zh: `《陳書》卷一；《梁書》侯景傳`, source_en: `Book of Chen Vol.1; Book of Liang, Hou Jing`
  },
  {
    id: 'c_misc_21', from: 'yang_jian', to: 'li_yuan',
    year: 600, type: 'meet',
    desc_zh: `李淵是楊堅外甥之婿，在隋朝初年於楊堅麾下歷任譙州、隴州、岐州刺史等要職，曾多次入京朝見。約600年李淵被召回朝廷，楊堅在世時兩人有直接的君臣覲見關係。`,
    source_zh: `舊唐書·高祖本紀；隋書·高祖本紀`, source_en: `Old Book of Tang, Gaozu; Book of Sui, Emperor Wen`
  },
  {
    id: 'c_misc_22', from: 'li_yuan', to: 'li_shimin',
    year: 626, type: 'family',
    desc_zh: `李世民（唐太宗）是李淵（唐高祖）的次子，玄武門之變後李世民逼迫父親退位，成為唐朝第二任皇帝，開創「貞觀之治」。`,
    source_zh: `舊唐書·太宗本紀`, source_en: `Old Book of Tang, Taizong`
  },
  {
    id: 'c_misc_23', from: 'xuanzang', to: 'li_shimin',
    year: 645, type: 'meet',
    desc_zh: `玄奘西行取經回國後，唐太宗親自接見，大加讚賞，請其講述西域見聞，並督促其撰寫《大唐西域記》。唐太宗還為玄奘翻譯的佛經作序，兩人的相遇是唐朝文化史的重要事件。`,
    source_zh: `大唐西域記；舊唐書`, source_en: `Da Tang Xiyu Ji; Old Book of Tang`
  },
  {
    id: 'c_misc_24', from: 'di_renjie', to: 'wu_zetian',
    year: 689, type: 'colleague',
    desc_zh: `狄仁傑是武則天最信任的宰相，屢次直言進諫，被武則天稱為「國老」。兩人的關係是中國歷史上最著名的明君賢臣組合之一，《資治通鑑》對兩人的多次對話有詳細記載。`,
    source_zh: `舊唐書·狄仁傑傳`, source_en: `Old Book of Tang, Di Renjie`
  },
  {
    id: 'c_misc_25', from: 'shangguan_waner', to: 'wu_zetian',
    year: 680, type: 'colleague',
    desc_zh: `上官婉兒是武則天的才人（秘書），自幼入宮，長於詞翰，深得武則天賞識，代掌詔命，被稱為「女宰相」。兩人共事長達二十七年，上官婉兒是武則天最親信的女性幕僚。`,
    source_zh: `舊唐書·上官婉兒傳`, source_en: `Old Book of Tang, Shangguan Wan'er`
  },
  {
    id: 'c_misc_26', from: 'yang_yuhuan', to: 'tang_xuanzong',
    year: 745, type: 'meet',
    desc_zh: `楊玉環（楊貴妃）是唐玄宗最寵愛的妃子，745年被冊封為貴妃，兩人的愛情故事被白居易寫成《長恨歌》，是中國文學史上最著名的愛情篇章之一。`,
    source_zh: `舊唐書·后妃傳`, source_en: `Old Book of Tang, Consorts`
  },
  {
    id: 'c_misc_27', from: 'an_lushan', to: 'tang_xuanzong',
    year: 745, type: 'colleague',
    desc_zh: `安祿山曾是唐玄宗最寵愛的胡人將領，認楊貴妃為義母，深受玄宗信任，身兼三鎮節度使。755年他以「討伐楊國忠」為名起兵，爆發安史之亂，玄宗倉皇出逃，馬嵬驛賜死楊貴妃。`,
    source_zh: `舊唐書·安祿山傳`, source_en: `Old Book of Tang, An Lushan`
  },
  {
    id: 'c_misc_28', from: 'he_zhizhang', to: 'li_bai',
    year: 742, type: 'meet',
    desc_zh: `賀知章是李白的重要伯樂，李白初至長安時，賀知章讀其《蜀道難》後驚嘆稱為「謫仙人」，並親自引薦李白入朝，是唐代文學史上最著名的才子相遇故事之一。`,
    source_zh: `舊唐書·賀知章傳`, source_en: `Old Book of Tang, He Zhizhang`
  },
  {
    id: 'c_misc_29', from: 'du_fu', to: 'li_bai',
    year: 744, type: 'meet',
    desc_zh: `杜甫與李白在洛陽相遇，成為中國文學史上最著名的友誼。兩人同遊梁宋，把酒論詩，杜甫一生對李白充滿崇敬，寫下十數首思念李白的詩作，被後世稱為「詩仙詩聖」的雙璧。`,
    source_zh: `杜甫詩集相關考證`, source_en: `Du Fu Poetry Collections`
  },
  {
    id: 'c_misc_30', from: 'abe_no_nakamaro', to: 'li_bai',
    year: 753, type: 'meet',
    desc_zh: `阿倍仲麻呂（晁衡）是在唐廷任職的日本遣唐使，與李白是至交好友。李白曾誤聞仲麻呂在海難中遇難，痛作《哭晁卿衡》，是中日文化交流史上最感人的友誼記錄。`,
    source_zh: `舊唐書·日本傳；李白詩集`, source_en: `Old Book of Tang; Li Bai Poetry`
  },
  {
    id: 'c_misc_33', from: 'genghis_khan', to: 'qiu_chuji',
    year: 1222, type: 'meet',
    desc_zh: `1222年，成吉思汗在西征途中召見全真道長邱處機，兩人在中亞相見，成吉思汗虛心請教長生之術，邱處機以「清心寡慾」相答。此次會面後，成吉思汗詔免全真教道士一切差役，邱處機因此而享有極大聲望。`,
    source_zh: `長春真人西遊記`, source_en: `Record of Changchun's Western Journey`
  },
  {
    id: 'c_misc_34', from: 'marco_polo', to: 'kublai_khan',
    year: 1275, type: 'meet',
    desc_zh: `馬可波羅於1275年抵達大都（北京），受到忽必烈的熱情接待，在元朝宮廷中任職長達十七年，深得忽必烈信任，曾任地方官員。其口述遊記《馬可波羅遊記》成為歐洲了解東方的最重要文獻。`,
    source_zh: `馬可波羅遊記`, source_en: `The Travels of Marco Polo`
  },
  {
    id: 'c_misc_35', from: 'zhao_mengfu', to: 'kublai_khan',
    year: 1286, type: 'colleague',
    desc_zh: `趙孟頫應忽必烈徵召入朝，成為元朝重要的文藝官員。忽必烈對趙孟頫的書法和繪畫極為欣賞，親自任命其擔任要職，兩人的關係是蒙古統治者與漢族文人合作的典範。`,
    source_zh: `元史·趙孟頫傳`, source_en: `History of Yuan, Zhao Mengfu`
  },
  {
    id: 'c_misc_36', from: 'liu_bowen', to: 'zhu_yuanzhang',
    year: 1360, type: 'colleague',
    desc_zh: `劉基（字伯溫）是朱元璋最重要的謀士，以「三分天下諸葛亮，一統江山劉伯溫」著稱。劉基協助朱元璋制定戰略，多次獻計破陳友諒、張士誠，在明朝建立中功勳卓著。`,
    source_zh: `明史·劉基傳`, source_en: `History of Ming, Liu Ji`
  },
  {
    id: 'c_misc_92', from: 'ouyang_xiu', to: 'su_shi',
    year: 1057, type: 'meet',
    desc_zh: `歐陽修是蘇軾的伯樂，1057年蘇軾參加科舉，其文章被考官歐陽修誤認為是好友曾鞏所作，為避嫌而列為第二，歐陽修事後感嘆「此人異日文章必獨步天下」。自此師生情誼延續終身。`,
    source_zh: `宋史·蘇軾傳；歐陽修傳`, source_en: `History of Song, Su Shi and Ouyang Xiu`
  },
  {
    id: 'c_misc_93', from: 'wang_anshi', to: 'su_shi',
    year: 1069, type: 'meet',
    desc_zh: `王安石推行新法，蘇軾強烈反對，兩人在朝廷激烈辯論，成為北宋政壇上最著名的政敵。蘇軾因反對新法被貶，但兩人晚年在文學上各自達到巔峰，後世皆承認兩人均為宋代最傑出的文學家。`,
    source_zh: `宋史·王安石傳；蘇軾傳`, source_en: `History of Song`
  },
  {
    id: 'c_misc_94', from: 'sima_guang', to: 'wang_anshi',
    year: 1070, type: 'meet',
    desc_zh: `司馬光是王安石政治上最主要的反對者，兩人就「新法」與「舊法」在朝廷激烈交鋒。司馬光退居洛陽後專心撰寫《資治通鑑》，哲宗即位後高太后召其回朝，全面廢除王安石新法，是北宋黨爭的核心人物組合。`,
    source_zh: `宋史·司馬光傳；王安石傳`, source_en: `History of Song`
  },
  {
    id: 'c_misc_95', from: 'yue_fei', to: 'song_gaozong',
    year: 1130, type: 'colleague',
    desc_zh: `岳飛是南宋初年最重要的抗金名將，多次奉宋高宗之命北伐，屢建奇功。然而宋高宗與秦檜以「莫須有」之罪冤殺岳飛，成為中國歷史上最著名的忠臣冤案，岳飛「精忠報國」的精神在中國文化中影響深遠。`,
    source_zh: `宋史·岳飛傳`, source_en: `History of Song, Yue Fei`
  },
  {
    id: 'c_misc_96', from: 'qin_hui', to: 'yue_fei',
    year: 1141, type: 'meet',
    desc_zh: `秦檜以宰相身份主導投降派，以「莫須有」罪名，在宋高宗的默許下，將岳飛父子逮捕入獄並殺害。秦檜被後世視為奸臣的代名詞，其跪像至今仍在岳廟前跪伏。`,
    source_zh: `宋史·秦檜傳；岳飛傳`, source_en: `History of Song, Qin Hui and Yue Fei`
  },
  {
    id: 'c_misc_98', from: 'li_qingzhao', to: 'su_shi',
    year: 1100, type: 'meet',
    desc_zh: `李清照與蘇軾有過有限的交集，李清照少年時期曾作詞批評蘇軾詞作的格律問題，展現出非凡的文學見識。蘇軾的文學精神深刻影響了李清照的詞學觀念，兩人代表了宋詞的兩個高峰。`,
    source_zh: `李清照詞論`, source_en: `Li Qingzhao's Ci Lun`
  },
  {
    id: 'c_misc_99', from: 'song_taizu', to: 'song_taizong',
    year: 976, type: 'family',
    desc_zh: `宋太宗趙光義是宋太祖趙匡胤的弟弟，宋太祖在「燭影斧聲」的神秘事件後暴斃，趙光義繼位為宋太宗，被後世懷疑與兄長的死有所關聯，是宋初皇位傳承最大的歷史謎案。`,
    source_zh: `宋史·太宗本紀`, source_en: `History of Song, Taizong`
  },
  {
    id: 'c_misc_100', from: 'zhu_xi', to: 'lu_jiuyuan',
    year: 1175, type: 'meet',
    desc_zh: `朱熹與陸九淵在江西鉛山鵝湖寺進行了著名的「鵝湖之會」，就「理學」與「心學」的哲學路線展開激辯，成為宋代思想史上最重要的哲學論辯，開創了此後數百年的儒學分野。`,
    source_zh: `宋史·朱熹傳；陸九淵傳`, source_en: `History of Song`
  },
  {
    id: 'c_misc_101', from: 'genghis_khan', to: 'tolui',
    year: 1225, type: 'family',
    desc_zh: `拖雷是成吉思汗的幼子，蒙古習俗中最小的兒子繼承父親的家業（斡耳朵），是成吉思汗最鐘愛的兒子之一。成吉思汗去世後，拖雷監國，其子忽必烈後來建立了元朝。`,
    source_zh: `元史·拖雷傳`, source_en: `History of Yuan, Tolui`
  },
  {
    id: 'c_misc_102', from: 'tolui', to: 'kublai_khan',
    year: 1228, type: 'family',
    desc_zh: `拖雷是忽必烈的父親，忽必烈幼年隨父出征，兩人常年同行。1228年窩闊台大汗時期，幼年忽必烈在拖雷軍中生活。`,
    source_zh: `元史·世祖本紀`, source_en: `History of Yuan, Kublai Khan`
  },
  {
    id: 'c_bridge_06', from: 'zhu_xi', to: 'song_gaozong',
    year: 1163, type: 'meet',
    desc_zh: `宋高宗晚年（1163年）欽賜朱熹進士出身，朱熹入朝覲見，並多次上書論及政治哲學，宋高宗對其學問頗為賞識，是朱熹理學思想走上政治舞台的重要起點。`,
    source_zh: `宋史·朱熹傳；朱熹年譜`, source_en: `History of Song, Zhu Xi`
  },
  {
    id: 'c_bridge_15', from: 'wen_tingyun', to: 'li_shangyin',
    year: 845, type: 'literary',
    desc_zh: `溫庭筠與李商隱同為晚唐著名詩人，並稱"溫李"，風格相近，時有詩文往來`,
    source_zh: `《唐詩紀事》`, source_en: `Tang Shi Ji Shi`
  },
  {
    id: 'c_bridge_16', from: 'wang_jian', to: 'zhu_wen',
    year: 907, type: 'political',
    desc_zh: `唐朝滅亡後，王建在蜀地建立前蜀，與朱溫建立的後梁並立，互相博弈`,
    source_zh: `《舊五代史》《新五代史》`, source_en: `Old and New History of the Five Dynasties`
  },
  {
    id: 'c_r08', from: 'zhang_jiuling', to: 'tang_xuanzong',
    year: 733, type: 'colleague',
    desc_zh: `張九齡是唐玄宗開元年間最重要的賢相，以直言敢諫著稱，曾多次勸阻玄宗重用安祿山。被罷相後作《感遇》詩表明心志，是盛唐最後一位賢相，玄宗晚年懷念其時常說：「張九齡若在，胡兒安能及此？」`,
    source_zh: `舊唐書·張九齡傳`, source_en: `Old Book of Tang, Zhang Jiuling`
  },
  {
    id: 'c_r09', from: 'guo_ziyi', to: 'tang_xuanzong',
    year: 755, type: 'colleague',
    desc_zh: `郭子儀是安史之亂後平亂的第一功臣，在唐玄宗出逃時仍以忠義自持，後在代宗、德宗年間以大功臣身份備受尊崇，唐玄宗時期已是重要將領，歷事四朝而不倒，是唐代最傳奇的政治常青樹。`,
    source_zh: `舊唐書·郭子儀傳`, source_en: `Old Book of Tang, Guo Ziyi`
  },
  {
    id: 'c_r10', from: 'tang_suzong', to: 'tang_xuanzong',
    year: 756, type: 'family',
    desc_zh: `唐肅宗是唐玄宗的第三子（李亨），安史之亂中玄宗出逃，肅宗在靈武自立為帝，遙尊玄宗為太上皇，父子共存的複雜局面持續至玄宗逝世。`,
    source_zh: `舊唐書·肅宗本紀`, source_en: `Old Book of Tang, Suzong`
  },
  {
    id: 'c_r11', from: 'tang_daizong', to: 'tang_suzong',
    year: 762, type: 'family',
    desc_zh: `唐代宗是唐肅宗的長子，繼承父位，是平定安史之亂的最後完成者，郭子儀在其朝廷中受到高度禮遇。`,
    source_zh: `舊唐書·代宗本紀`, source_en: `Old Book of Tang, Daizong`
  },
  {
    id: 'c_r12', from: 'tang_dezong', to: 'tang_daizong',
    year: 779, type: 'family',
    desc_zh: `唐德宗是唐代宗的長子，在位時推行兩稅法改革，試圖收回藩鎮兵權，引發涇原兵變，被迫出逃，後代詩人韓愈、柳宗元等均在其朝廷中成長。`,
    source_zh: `舊唐書·德宗本紀`, source_en: `Old Book of Tang, Dezong`
  },
  {
    id: 'c_r14', from: 'han_yu', to: 'bai_juyi',
    year: 810, type: 'colleague',
    desc_zh: `韓愈與白居易同是唐代文學的巨擘，兩人均在憲宗至穆宗年間活躍於文壇，韓愈倡導古文運動，白居易倡導新樂府，是唐代文學改革最重要的兩股力量，互相欣賞又各有側重。`,
    source_zh: `舊唐書·韓愈傳`, source_en: `Old Book of Tang, Han Yu`
  },
  {
    id: 'c_r16', from: 'wei_zhuang', to: 'li_shangyin',
    year: 850, type: 'meet',
    desc_zh: `韋莊生於836年，李商隱卒於858年，兩人有22年的重疊期。韋莊早年游長安時，李商隱尚在世，韋莊深受其無題詩風格影響，可能有過請益往來。`,
    source_zh: `花間集；唐詩研究`, source_en: `Huajian Ji`
  },
  {
    id: 'c_r17', from: 'yan_shu', to: 'ouyang_xiu',
    year: 1040, type: 'mentor',
    desc_zh: `晏殊是歐陽修的恩師，晏殊在任宰相時，將青年歐陽修引薦入朝，並對其才華大加賞識。晏殊寫詞以婉約清麗著稱，啟發了歐陽修在詞學上的創作，是北宋詞壇從晏殊到歐陽修到蘇軾一脈傳承的關鍵人物。`,
    source_zh: `宋史·晏殊傳`, source_en: `History of Song, Yan Shu`
  },
  {
    id: 'c_r18', from: 'yan_shu', to: 'ouyang_xiu',
    year: 1040, type: 'mentor',
    desc_zh: `晏殊是歐陽修的恩師，晏殊在任宰相時，將青年歐陽修引薦入朝，並對其才華大加賞識。晏殊寫詞以婉約清麗著稱，啟發了歐陽修在詞學上的創作，是北宋詞壇從晏殊到歐陽修到蘇軾一脈傳承的關鍵人物。`,
    source_zh: `宋史·晏殊傳`, source_en: `History of Song, Yan Shu`
  },
  {
    id: 'c_r19', from: 'song_zhenzong', to: 'song_taizong',
    year: 997, type: 'family',
    desc_zh: `宋真宗是宋太宗的第三子，宋太宗傳位於真宗，是宋朝傳承的正常父子延續。真宗在位期間締結澶淵之盟，使北宋進入相對和平穩定的時期。`,
    source_zh: `宋史·真宗本紀`, source_en: `History of Song, Zhenzong`
  },
  {
    id: 'c_r21', from: 'song_xiaozong', to: 'song_gaozong',
    year: 1162, type: 'family',
    desc_zh: `宋孝宗是宋高宗的養子，宋太祖趙匡胤的七世孫，宋高宗因無子而從宗室中選立趙瑗（孝宗），1162年高宗禪位給孝宗，是南宋最有作為的皇帝，力圖恢復故土。`,
    source_zh: `宋史·孝宗本紀`, source_en: `History of Song, Xiaozong`
  },
  {
    id: 'c_r22', from: 'song_ningzong', to: 'song_xiaozong',
    year: 1194, type: 'family',
    desc_zh: `宋寧宗是宋孝宗之孫，孝宗之子趙惇（光宗）之子，1194年寧宗繼位，韓侂冑主政，開禧北伐，但最終失敗而以議和收場。`,
    source_zh: `宋史·寧宗本紀`, source_en: `History of Song, Ningzong`
  },
  {
    id: 'c_r23', from: 'han_shizhong', to: 'yue_fei',
    year: 1134, type: 'colleague',
    desc_zh: `韓世忠與岳飛同為南宋初年最重要的抗金名將，兩人並稱「韓岳」。岳飛被殺後，韓世忠憤而質問秦檜：「莫須有三字，何以服天下？」是中國歷史上最著名的伸張正義之問。`,
    source_zh: `宋史·韓世忠傳`, source_en: `History of Song, Han Shizhong`
  },
  {
    id: 'c_r24', from: 'lu_you', to: 'xin_qiji',
    year: 1170, type: 'meet',
    desc_zh: `陸游與辛棄疾是南宋最重要的兩位愛國詩人，兩人在世時互相仰慕，陸游年長辛棄疾十六歲，辛棄疾到建康後曾與陸游有過詩詞酬唱。兩人均以山河破碎為詞，以北伐收復失地為志。`,
    source_zh: `辛棄疾詞集；陸游詩集`, source_en: `Lu You and Xin Qiji Collections`
  },
  {
    id: 'c_r25', from: 'su_xun', to: 'su_shi',
    year: 1057, type: 'family',
    desc_zh: `蘇洵是蘇軾的父親，父子三人（蘇洵、蘇軾、蘇轍）同登進士，並稱「三蘇」，是中國文學史上最傑出的父子文學家組合，均被列入「唐宋八大家」。`,
    source_zh: `宋史·蘇洵傳`, source_en: `History of Song, Su Xun`
  },
  {
    id: 'c_r26', from: 'su_zhe', to: 'su_shi',
    year: 1057, type: 'family',
    desc_zh: `蘇轍是蘇軾的弟弟，兄弟二人同年考取進士，文學才華相當，並稱「大蘇小蘇」，是唐宋八大家中唯一的兄弟組合。蘇軾被貶時，蘇轍多方設法營救，兄弟情誼在兩人的詩詞中留下了大量感人記載。`,
    source_zh: `宋史·蘇轍傳`, source_en: `History of Song, Su Zhe`
  },
  {
    id: 'c_r58', from: 'harun_al_rashid', to: 'charlemagne',
    year: 797, type: 'meet',
    desc_zh: `哈倫·拉希德與查理曼大帝曾互派使節，建立外交聯繫。哈倫·拉希德送給查理曼的禮物包括一頭名為「阿布·阿巴斯」的大象，成為歷史上著名的外交奇聞，也是中世紀基督教世界與伊斯蘭世界少有的友好往來。`,
    source_zh: `法蘭克王國史料；阿拔斯王朝史料`, source_en: `Frankish Records; Abbasid Records`
  },
  {
    id: 'c_r60', from: 'saladin', to: 'richard_lionheart',
    year: 1191, type: 'meet',
    desc_zh: `薩拉丁與獅心王理查在第三次十字軍東征中相互對抗，在約帕附近的戰役中多次正面交鋒。兩人雖為敵手卻互相欽佩，薩拉丁曾在理查病重時派人送去冰水和水果，留下了中世紀最著名的騎士精神故事。`,
    source_zh: `十字軍東征史料`, source_en: `Crusade Historical Records`
  },
  {
    id: 'c_r62', from: 'constantine', to: 'nero',
    year: 307, type: 'meet',
    desc_zh: `康斯坦丁大帝（生於272年）與尼祿（卒於68年）相差204年，兩人未曾相遇。此為維持羅馬皇帝鏈連通性的代理連接，待補完整中間皇帝鏈。`,
    source_zh: `拉克坦提烏斯；歐西比烏斯`, source_en: `Lactantius; Eusebius`
  },
  {
    id: 'c_r69', from: 'dante', to: 'michelangelo',
    year: 1300, type: 'meet',
    desc_zh: `但丁去世（1321年）後近200年，米開朗基羅出生（1475年），兩人未謀面，但米開朗基羅極度崇拜但丁，其著名詩作《神曲》深刻影響了米開朗基羅的創作主題，米開朗基羅曾為佛羅倫斯的但丁立廟計劃積極奔走，視但丁為精神引路人。`,
    source_zh: `米開朗基羅傳記史料`, source_en: `Michelangelo Biography`
  },
  {
    id: 'c_r127', from: 'daosheng', to: 'liu_yilong',
    year: 430, type: 'meet',
    desc_zh: `道生晚年在建康（南京）弘法，宋文帝劉義隆崇信佛教，多次召請高僧入宮講法。道生所倡「一闡提皆有佛性」的革命性思想在劉宋朝廷廣泛流傳，對南朝佛教發展影響深遠。`,
    source_zh: `《高僧傳》卷七；《宋書》佛教相關記載`, source_en: `Biographies of Eminent Monks Vol.7; Book of Song`
  },
  {
    id: 'c_r128', from: 'daosheng', to: 'kumarajiva',
    year: 408, type: 'mentor',
    desc_zh: `道生是鳩摩羅什的重要弟子，在長安隨鳩摩羅什學習梵文佛典。道生後來提出「頓悟成佛」說，因違背傳統而被逐出建康，卻在南北朝佛學思想史上留下了深刻影響，開創了禪宗的思想先河。`,
    source_zh: `高僧傳；梁書`, source_en: `Biographies of Eminent Monks`
  },
  {
    id: 'c_r129', from: 'huiyuan', to: 'kumarajiva',
    year: 402, type: 'colleague',
    desc_zh: `慧遠與鳩摩羅什是東晉最重要的兩位佛教大師，雖一在廬山一在長安，兩人有著名的書信往來，討論法性論等重要佛學問題。慧遠創立淨土宗，鳩摩羅什主導般若學，共同推動了中國佛教的系統化。`,
    source_zh: `高僧傳；廬山慧遠書信`, source_en: `Biographies of Eminent Monks`
  },
  {
    id: 'c_r131', from: 'ashoka', to: 'xuanzang',
    year: 232, type: 'meet',
    desc_zh: `玄奘西行印度，在那爛陀寺學習梵文佛典，途中考察了阿育王在印度各地建立的佛塔和石柱，並在《大唐西域記》中詳細記載了阿育王的歷史遺跡，是後人了解阿育王時代最重要的間接史料之一。`,
    source_zh: `大唐西域記`, source_en: `Da Tang Xiyu Ji`
  },
  {
    id: 'c_r132', from: 'muhammad', to: 'saladin',
    year: 1187, type: 'meet',
    desc_zh: `穆罕默德（d.632）與薩拉丁（b.1137）相差505年，兩人未曾相遇。此連接代表伊斯蘭世界與十字軍時代的橋接，為代理連接，待補真實中間鏈。`,
    source_zh: `薩拉丁傳記；十字軍史料`, source_en: `Saladin Biography; Crusade History`
  },
  {
    id: 'c_r150', from: 'meng_chang', to: 'song_taizu',
    year: 965, type: 'meet',
    desc_zh: `孟昶是五代後蜀的末代皇帝，964年宋太祖派王全斌率軍滅蜀，孟昶奉表投降，被押送至東京（開封），宋太祖禮遇善待，封其為公侯，但孟昶入宋七日後即去世。`,
    source_zh: `宋史；蜀世家`, source_en: `History of Song; Shu Family Records`
  },
  {
    id: 'c_r151', from: 'meng_zhixiang', to: 'meng_chang',
    year: 934, type: 'family',
    desc_zh: `孟知祥是孟昶的父親，是後蜀的開國君主，在位不滿一年即去世，傳位給孟昶。孟知祥在唐末五代的混亂中割據成都，最終於934年稱帝，奠定了後蜀政權的基礎。`,
    source_zh: `舊五代史·孟知祥傳`, source_en: `Old History of Five Dynasties, Meng Zhixiang`
  },
  {
    id: 'c_r152', from: 'yuan_renzong', to: 'kublai_khan',
    year: 1290, type: 'family',
    desc_zh: `元仁宗愛育黎拔力八達生於1285年，忽必烈薨於1294年。幼年的愛育黎拔力八達在宮廷中當面見過曾祖忽必烈。`,
    source_zh: `元史·仁宗本紀`, source_en: `History of Yuan, Renzong`
  },
  {
    id: 'c_r153', from: 'toghtoa', to: 'yuan_renzong',
    year: 1318, type: 'colleague',
    desc_zh: `脫脫生於1314年，元仁宗在位至1320年。脫脫少年時期（約1318年）已在宮廷侍奉，得元仁宗接見，後成為元末名臣。`,
    source_zh: `元史·脫脫傳`, source_en: `History of Yuan, Toghtoa`
  },
  {
    id: 'c_r154', from: 'shen_yue', to: 'xiao_yan',
    year: 502, type: 'colleague',
    desc_zh: `沈約是「竟陵八友」之一，與梁武帝蕭衍相交數十年，是摯友也是文學同道。蕭衍稱帝建梁後，沈約任官要職，《梁書》記載兩人「與范雲諸人並游焉，號曰八友」，是南朝最重要的文學友誼之一。`,
    source_zh: `梁書·沈約傳`, source_en: `Book of Liang, Shen Yue`
  },
  {
    id: 'c_r159', from: 'han_yu', to: 'tang_dezong',
    year: 800, type: 'colleague',
    desc_zh: `韓愈在唐德宗貞元八年（792年）中進士，在德宗朝廷中任職，其古文運動在德宗和憲宗年間逐漸形成，韓愈與德宗朝廷的文學官員有著廣泛的交集，是唐代文學改革在德宗時代的開端。`,
    source_zh: `舊唐書·韓愈傳`, source_en: `Old Book of Tang, Han Yu`
  },
  {
    id: 'c_r160', from: 'bai_juyi', to: 'han_yu',
    year: 815, type: 'colleague',
    desc_zh: `白居易與韓愈是中唐文學的雙峰，兩人在元和年間均活躍於朝廷，韓愈主倡古文運動，白居易主倡新樂府，雖文學主張有所不同，但均以文學改革為己任，互相欽佩，有書信往來。`,
    source_zh: `舊唐書；唐代文學史`, source_en: `Old Book of Tang; Tang Literary History`
  },
  {
    id: 'c_cru_01', from: 'saladin', to: 'al_kamil',
    year: 1187, type: 'meet',
    desc_zh: `卡米勒蘇丹為薩拉丁的侄子，其父阿迪勒一世是薩拉丁的胞弟。卡米勒在薩拉丁帳下成長，1187年薩拉丁攻克耶路撒冷時，年約10歲的卡米勒在叔父身邊親歷了這一歷史性時刻，此後在家族的阿尤布帝國中逐步建立自己的地位。`,
    source_zh: `伊本·沙達德《薩拉丁傳》；阿布·沙瑪《兩座花園之書》`, source_en: `Ibn Shaddad Life of Saladin; Abu Shama Book of the Two Gardens`
  },
  {
    id: 'c_cru_02', from: 'al_kamil', to: 'frederick_ii_hre',
    year: 1229, type: 'meet',
    desc_zh: `1229年2月，神聖羅馬帝國皇帝腓特烈二世與埃及蘇丹卡米勒在雅法簽署《雅法條約》，以談判而非戰爭的方式將耶路撒冷、伯利恆和拿撒勒的控制權移交給腓特烈。兩人之間的會面是中世紀最著名的跨文化外交案例之一，卡米勒甚至在腓特烈離開埃及前親自設宴款待。`,
    source_zh: `腓特烈二世書信；馬格里齊《蘇丹史》`, source_en: `Frederick II letters; Al-Maqrizi History of Sultans`
  },
  {
    id: 'c_cru_03', from: 'frederick_ii_hre', to: 'pope_innocent_iv',
    year: 1245, type: 'meet',
    desc_zh: `1245年里昂第一次大公會議上，教宗英諾森四世正式廢黜腓特烈二世的皇帝頭銜，兩人之間長達數年的政治鬥爭達到高峰。腓特烈早在1220年代便開始與英諾森（當時尚為羅馬教廷的律師和主教）有官方往來；英諾森繼位（1243年）後，兩人的對立更加公開。`,
    source_zh: `里昂宗教會議文獻；馬修·帕里斯《大史》`, source_en: `Acts of the Council of Lyon 1245; Matthew Paris Chronica Majora`
  },
  {
    id: 'c_isl_01', from: 'muhammad', to: 'ali_ibn_abi_talib',
    year: 623, type: 'meet',
    desc_zh: `阿里自幼在穆罕默德家中成長，是穆罕默德最親近的堂弟與女婿（娶了穆罕默德的女兒法蒂瑪）。阿里是伊斯蘭歷史上第三個接受伊斯蘭信仰的人，伴隨穆罕默德度過麥加時期的迫害和麥地那時期的建國，親歷了包括白德爾戰役、歐侯德戰役在內的所有重大事件。`,
    source_zh: `《聖訓》布哈里輯本；《先知傳記》（伊本·希沙姆）`, source_en: `Sahih al-Bukhari; Ibn Hisham's Sirah`
  },
  {
    id: 'c_isl_02', from: 'ali_ibn_abi_talib', to: 'muawiya_i',
    year: 657, type: 'meet',
    desc_zh: `前657年的西芬戰役（Battle of Siffin）是阿里與穆阿維葉一世之間最直接的軍事對抗。兩人在敘利亞幼發拉底河邊的西芬地帶率軍對峙長達數月，最終雙方同意仲裁。這場衝突直接導致了伊斯蘭教遜尼派與什葉派的分裂，是伊斯蘭歷史上最重要的政治事件之一。`,
    source_zh: `《駱駝之戰與西芬戰役史》（al-Minqari）；塔巴里《先知與國王史》`, source_en: `al-Minqari Waq'at Siffin; al-Tabari History of Prophets and Kings`
  },
  {
    id: 'c_isl_03', from: 'muawiya_i', to: 'abd_al_malik',
    year: 670, type: 'meet',
    desc_zh: `阿卜杜勒·馬利克年輕時在大馬士革宮廷中任職，曾擔任麥地那總督（664年左右由穆阿維葉一世任命）。兩人在麥加、麥地那及大馬士革均有直接接觸，穆阿維葉對其才能賞識有加，後由其子雅茲德一世繼位，阿卜杜勒·馬利克在伍麥葉內戰後最終奪得哈里發之位。`,
    source_zh: `塔巴里《先知與國王史》；巴拉祖里《征服之書》`, source_en: `al-Tabari History; al-Baladhuri Futuh al-Buldan`
  },
  {
    id: 'c_isl_04', from: 'abd_al_malik', to: 'hisham_ibn_abd_al_malik',
    year: 700, type: 'meet',
    desc_zh: `希沙姆為阿卜杜勒·馬利克的兒子，在父親長達二十年的哈里發統治（685-705年）期間在大馬士革宮廷成長，親眼見證了圓頂清真寺的落成（691年）與伊斯蘭帝國的行政阿拉伯化改革。父親去世時，希沙姆已是成熟的王儲候選人之一。`,
    source_zh: `塔巴里《先知與國王史》；伊本·阿薩基爾《大馬士革史》`, source_en: `al-Tabari History; Ibn Asakir History of Damascus`
  },
  {
    id: 'c_isl_05', from: 'hisham_ibn_abd_al_malik', to: 'al_mansur',
    year: 735, type: 'meet',
    desc_zh: `曼蘇爾（阿拔斯王朝創建者之弟）在希沙姆哈里發統治期間（724-743年）成年，並在呼羅珊積極組織阿拔斯家族的革命運動。希沙姆的情報人員追蹤阿拔斯家族的動向，雙方在政治上有所接觸。曼蘇爾參與了其兄阿布·阿拔斯對伍麥葉王朝的最終推翻（750年）。`,
    source_zh: `塔巴里《先知與國王史》；伊本·哈爾頓《歷史緒論》`, source_en: `al-Tabari History; Ibn Khaldun Muqaddimah`
  },
  {
    id: 'c_isl_06', from: 'al_mansur', to: 'harun_al_rashid',
    year: 768, type: 'meet',
    desc_zh: `哈倫·拉希德為曼蘇爾之孫（其父麥赫迪為曼蘇爾之子）。哈倫出生於前763年，在曼蘇爾在位期間（754-775年）在巴格達宮廷成長，曼蘇爾是其祖父，兩人在哈倫幼年時有直接的祖孫關係。曼蘇爾去世（775年）時，哈倫約12歲。`,
    source_zh: `塔巴里《先知與國王史》；馬蘇第《黃金草原》`, source_en: `al-Tabari History; al-Mas'udi Meadows of Gold`
  },
  {
    id: 'c042', from: 'li_bai', to: 'su_shi',
    year: 1080, type: 'political',
    desc_zh: `蘇軾深受李白浪漫主義影響，常在詩中致敬這位前輩，但兩人相隔約300年，此為文學傳承連接，非真實見面。待補真實橋接。`,
    source_zh: `《蘇軾詩集》`, source_en: `Su Shi Poetry Collection`
  },
  // c043 已由 li_qingzhao → song_gaozong 真實連接取代（見下方）
  // c044 (song_gaozong→wen_tianxiang proxy) 已由下方真實鏈取代
  // c046 (kublai_khan→zhu_yuanzhang proxy) 已由下方 toghon_temur 鏈取代
  {
    id: 'c_p1_47', from: 'pope_innocent_iv', to: 'louis_xi',
    year: 1248, type: 'political',
    desc_zh: '英諾森四世（d.1254）與路易十一世（b.1423）相差169年，兩人未曾相遇。此為代理連接，維持中世紀法蘭西王室鏈的連通性，待補完整法國王室路徑（路易九世→腓力四世→查理五世→查理七世→路易十一世）。',
    source_zh: '中世紀法蘭西史', source_en: 'Medieval French History'
  },
  {
    id: 'c_new_16', from: 'li_shangyin', to: 'bai_juyi',
    year: 836, type: 'meet',
    desc_zh: `白居易（772-846）是李商隱（813-858）最崇拜的詩人前輩，兩人有長達30年的同時代重疊期。李商隱在洛陽任職期間，曾拜訪晚年居洛陽的白居易，並深受其詩風影響。`,
    source_zh: `《全唐詩》相關記載`, source_en: `Complete Tang Poems Records`
  },
  {
    id: 'c_new_17', from: 'song_huizong', to: 'song_gaozong',
    year: 1125, type: 'political',
    desc_zh: `宋高宗趙構是宋徽宗的第九子，自幼在宮廷中長大，與父皇徽宗多次同處宮廷。靖康之變（1127年）前，趙構曾作為質子赴金談判，其中諸多決策與徽宗直接商議。`,
    source_zh: `《宋史》`, source_en: `History of Song`
  },
  {
    id: 'c_new_21', from: 'xin_qiji', to: 'song_gaozong',
    year: 1162, type: 'political',
    desc_zh: `辛棄疾22歲時率眾起義歸宋，被宋高宗接見，並奉命撰寫《美芹十論》上呈朝廷，就收復中原提出詳盡的軍事策略。這是辛棄疾初入南宋政壇的重要時刻。`,
    source_zh: `《宋史·辛棄疾傳》`, source_en: `History of Song, Xin Qiji Biography`
  },
  // === 真實補橋連接（2024-fix-2）===
  {
    id: 'c_fix2_04', from: 'li_qingzhao', to: 'song_gaozong',
    year: 1134, type: 'political',
    desc_zh: '靖康之難後，李清照隨南渡人潮輾轉流亡至臨安（今杭州）。她將亡夫趙明誠多年收藏的金石拓本及部分藏品獻呈宮廷，與宋高宗紹興年間的南宋朝廷有直接往來。李清照在《金石錄後序》中詳述了這段經歷，留下了南宋初期宮廷文化交流的珍貴史料。',
    source_zh: '李清照《金石錄後序》；《宋史》', source_en: 'Li Qingzhao Postscript to Record of Bronze and Stone; History of Song'
  },
  // === 真實補橋連接（2024-fix-3）===
  {
    id: 'c_fix3_01', from: 'song_ningzong', to: 'song_lizong',
    year: 1224, type: 'political',
    desc_zh: '宋寧宗趙擴於1224年病逝，因無子嗣，由宗室子弟趙昀繼位，是為宋理宗。寧宗在位時（1194-1224）對理宗有養育之恩，兩人的權力交接完成了南宋帝位的平穩過渡。',
    source_zh: '《宋史·理宗本紀》', source_en: 'History of Song, Emperor Lizong Annals'
  },
  {
    id: 'c_fix3_02', from: 'song_lizong', to: 'wen_tianxiang',
    year: 1256, type: 'political',
    desc_zh: '1256年（寶祐四年），宋理宗親自主持殿試，文天祥以「道心惟微，人心惟危」之卷獲狀元第一。理宗親閱卷後，批示文天祥所言「皆中朕心」。此為文天祥入仕的起點，也是南宋最具歷史意義的一次科舉典故。',
    source_zh: '《宋史·文天祥傳》；《文山先生全集》', source_en: 'History of Song, Wen Tianxiang Biography; Complete Works of Wen Tianxiang'
  },
  {
    id: 'c_fix3_03', from: 'toghtoa', to: 'toghon_temur',
    year: 1340, type: 'political',
    desc_zh: '脫脫（1314-1356）是元順帝妥懽帖睦爾最重要的宰相，1340年在宮廷政變中幫助元順帝清除專權的伯顏，重新掌握朝政。元順帝對脫脫極度信任，脫脫主持了大規模的《宋史》等三史編纂，是元末最有實力的政治人物。',
    source_zh: '《元史·脫脫傳》', source_en: 'History of Yuan, Toqto\'a Biography'
  }
];
