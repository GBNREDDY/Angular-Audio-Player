import { Component, OnInit } from '@angular/core';
import { DataService } from '../data-service.service';

@Component({
  selector: 'app-audio-list',
  templateUrl: './audio-list.component.html',
  styleUrls: ['./audio-list.component.css']
})
export class AudioListComponent implements OnInit {
  message:string;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
  }

  onRecordClick(record){
      // console.log(record);
      this.data.changeMessage(record); 
  }

  records = [  
    {  
      "name":"_001 - Al-Fatiha.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_001 - Al-Fatiha.mp3"
    },
    {  
      "name":"_001 - Al-Fatiha.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_001 - Al-Fatiha.mp3"
    },
    {  
      "name":"_002 - Al-Baqarah.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_002 - Al-Baqarah.mp3"
    },
    {  
      "name":"_003 - Al-e-Imran.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_003 - Al-e-Imran.mp3"
    },
    {  
      "name":"_004 - An-Nisa.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_004 - An-Nisa.mp3"
    },
    {  
      "name":"_005 - Al-Maida.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_005 - Al-Maida.mp3"
    },
    {  
      "name":"_006 - Anaam.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_006 - Anaam.mp3"
    },
    {  
      "name":"_007 - Al-Aaraaf.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_007 - Al-Aaraaf.mp3"
    },
    {  
      "name":"_008 - Al-Anfal.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_008 - Al-Anfal.mp3"
    },
    {  
      "name":"_009 - At-Tauba.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_009 - At-Tauba.mp3"
    },
    {  
      "name":"_001 - Al-Fatiha.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_001 - Al-Fatiha.mp3"
    },
    {  
      "name":"_010 - Yunus.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_010 - Yunus.mp3"
    },
    {  
      "name":"_011 - Hud.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_011 - Hud.mp3"
    },
    {  
      "name":"_012 - Yusuf.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_012 - Yusuf.mp3"
    },
    {  
      "name":"_013 - Ar-Raad.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_013 - Ar-Raad.mp3"
    },
    {  
      "name":"_014 - Ibrahim.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_014 - Ibrahim.mp3"
    },
    {  
      "name":"_015 - Al-Hijr.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_015 - Al-Hijr.mp3"
    },
    {  
      "name":"_016 - An-Nahl.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_016 - An-Nahl.mp3"
    },
    {  
      "name":"_017 - Al-Isra.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_017 - Al-Isra.mp3"
    },
    {  
      "name":"_018 - Al-Kahf.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_018 - Al-Kahf.mp3"
    },
    {  
      "name":"_019 - Maryam.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_019 - Maryam.mp3"
    },
    {  
      "name":"_020 - Taha.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_020 - Taha.mp3"
    },
    {  
      "name":"_021 - Al-Anbiya.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_021 - Al-Anbiya.mp3"
    },
    {  
      "name":"_022 - Al-Hajj.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_022 - Al-Hajj.mp3"
    },
    {  
      "name":"_023 - Muminun.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_023 - Muminun.mp3"
    },
    {  
      "name":"_024 - An-Noor.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_024 - An-Noor.mp3"
    },
    {  
      "name":"_025 - Al-Furqan.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_025 - Al-Furqan.mp3"
    },
    {  
      "name":"_001 - Al-Fatiha.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_001 - Al-Fatiha.mp3"
    },
    {  
      "name":"_026 - Ash-Shuara.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_026 - Ash-Shuara.mp3"
    },
    {  
      "name":"_027 - An-Naml.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_027 - An-Naml.mp3"
    },
    {  
      "name":"_028 - Al-Qasas.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_028 - Al-Qasas.mp3"
    },
    {  
      "name":"_029 - Ankabut.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_029 - Ankabut.mp3"
    },
    {  
      "name":"_001 - Al-Fatiha.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_001 - Al-Fatiha.mp3"
    },
    {  
      "name":"_030 - Ar-Rum.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_030 - Ar-Rum.mp3"
    },
    {  
      "name":"_031 - Luqman.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_031 - Luqman.mp3"
    },
    {  
      "name":"_032 - As-Sajda.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_032 - As-Sajda.mp3"
    },
    {  
      "name":"_033 - Al-Ahzaab.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_033 - Al-Ahzaab.mp3"
    },
    {  
      "name":"_034 - Saba.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_034 - Saba.mp3"
    },
    {  
      "name":"_035 - Fatir.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_035 - Fatir.mp3"
    },
    {  
      "name":"_036 - Ya Seen.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_036 - Ya Seen.mp3"
    },
    {  
      "name":"_037 - Saffaat.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_037 - Saffaat.mp3"
    },
    {  
      "name":"_038 - Sad.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_038 - Sad.mp3"
    },
    {  
      "name":"_039 - Az-Zumar.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_039 - Az-Zumar.mp3"
    },
    {  
      "name":"_040 - Al-Ghafir.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_040 - Al-Ghafir.mp3"
    },
    {  
      "name":"_041 - Fussilat.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_041 - Fussilat.mp3"
    },
    {  
      "name":"_042 - Ash-Shura.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_042 - Ash-Shura.mp3"
    },
    {  
      "name":"_043 - Az-Zukhruf.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_043 - Az-Zukhruf.mp3"
    },
    {  
      "name":"_044 - Ad-Dukhan.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_044 - Ad-Dukhan.mp3"
    },
    {  
      "name":"_045 - Al-Jathiya.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_045 - Al-Jathiya.mp3"
    },
    {  
      "name":"_046 - Al-Ahqaaf.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_046 - Al-Ahqaaf.mp3"
    },
    {  
      "name":"_047 - Muhammad.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_047 - Muhammad.mp3"
    },
    {  
      "name":"_048 - Al-Fath.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_048 - Al-Fath.mp3"
    },
    {  
      "name":"_049 - Al-Hujraat.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_049 - Al-Hujraat.mp3"
    },
    {  
      "name":"_050 - Qaaf.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_050 - Qaaf.mp3"
    },
    {  
      "name":"_051 - Adh-Dhariyat.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_051 - Adh-Dhariyat.mp3"
    },
    {  
      "name":"_052 - At-Tur.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_052 - At-Tur.mp3"
    },
    {  
      "name":"_053 - An-Najm.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_053 - An-Najm.mp3"
    },
    {  
      "name":"_054 - Al-Qamar.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_054 - Al-Qamar.mp3"
    },
    {  
      "name":"_055 - Ar-Rahmaan.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_055 - Ar-Rahmaan.mp3"
    },
    {  
      "name":"_056 - Al-Waaqiya.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_056 - Al-Waaqiya.mp3"
    },
    {  
      "name":"_057 - Al-Hadid.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_057 - Al-Hadid.mp3"
    },
    {  
      "name":"_058 - Al-Mujaadila.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_058 - Al-Mujaadila.mp3"
    },
    {  
      "name":"_059 - Al-Hashr.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_059 - Al-Hashr.mp3"
    },
    {  
      "name":"_060 - Al-Mumtahina.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_060 - Al-Mumtahina.mp3"
    },
    {  
      "name":"_061 - As-Saff.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_061 - As-Saff.mp3"
    },
    {  
      "name":"_062 - Al-Jumuah.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_062 - Al-Jumuah.mp3"
    },
    {  
      "name":"_063 - Al-Munafiqoon.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_063 - Al-Munafiqoon.mp3"
    },
    {  
      "name":"_064 - At-Taghabun.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_064 - At-Taghabun.mp3"
    },
    {  
      "name":"_065 - At-Talaq.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_065 - At-Talaq.mp3"
    },
    {  
      "name":"_066 - At-Tahrim.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_066 - At-Tahrim.mp3"
    },
    {  
      "name":"_067 - Al-Mulk.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_067 - Al-Mulk.mp3"
    },
    {  
      "name":"_068 - Al-Qalam.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_068 - Al-Qalam.mp3"
    },
    {  
      "name":"_069 - Al-Haaqqa.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_069 - Al-Haaqqa.mp3"
    },
    {  
      "name":"_070 - Al-Maarij.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_070 - Al-Maarij.mp3"
    },
    {  
      "name":"_071 - Nooh.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_071 - Nooh.mp3"
    },
    {  
      "name":"_072 - Al-Jinn.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_072 - Al-Jinn.mp3"
    },
    {  
      "name":"_073 - Al-Muzzammil.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_073 - Al-Muzzammil.mp3"
    },
    {  
      "name":"_074 - Al-Mudatthir.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_074 - Al-Mudatthir.mp3"
    },
    {  
      "name":"_075 Al-Qiyama.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_075 Al-Qiyama.mp3"
    },
    {  
      "name":"_076 - Al-Insan.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_076 - Al-Insan.mp3"
    },
    {  
      "name":"_077 - Al-Mursalat.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_077 - Al-Mursalat.mp3"
    },
    {  
      "name":"_078 - An-Naba.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_078 - An-Naba.mp3"
    },
    {  
      "name":"_079 - An-Naziat.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_079 - An-Naziat.mp3"
    },
    {  
      "name":"_080 - Al-Abasa.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_080 - Al-Abasa.mp3"
    },
    {  
      "name":"_081 - At-Takwir.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_081 - At-Takwir.mp3"
    },
    {  
      "name":"_082 - Al-Infitar.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_082 - Al-Infitar.mp3"
    },
    {  
      "name":"_083 - Al-Mutaffifeen.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_083 - Al-Mutaffifeen.mp3"
    },
    {  
      "name":"_084 - Al-Inshiqaq.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_084 - Al-Inshiqaq.mp3"
    },
    {  
      "name":"_085 - Al-Burooj.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_085 - Al-Burooj.mp3"
    },
    {  
      "name":"_086 - At-Tariq.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_086 - At-Tariq.mp3"
    },
    {  
      "name":"_087 - Al-Aala.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_087 - Al-Aala.mp3"
    },
    {  
      "name":"_088 - Al-Ghashiya.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_088 - Al-Ghashiya.mp3"
    },
    {  
      "name":"_089 - Al-Fajr.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_089 - Al-Fajr.mp3"
    },
    {  
      "name":"_090 - Al-Balad.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_090 - Al-Balad.mp3"
    },
    {  
      "name":"_091 - Ash-Shams.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_091 - Ash-Shams.mp3"
    },
    {  
      "name":"_092 - Al-Layl.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_092 - Al-Layl.mp3"
    },
    {  
      "name":"_093 - Ad-Duha.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_093 - Ad-Duha.mp3"
    },
    {  
      "name":"_094 - Al-Inshirah.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_094 - Al-Inshirah.mp3"
    },
    {  
      "name":"_095 - At-Teen.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_095 - At-Teen.mp3"
    },
    {  
      "name":"_096 - Al-Alaq.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_096 - Al-Alaq.mp3"
    },
    {  
      "name":"_097 - Al-Qadr.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_097 - Al-Qadr.mp3"
    },
    {  
      "name":"_098 - Al-Bayyinah.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_098 - Al-Bayyinah.mp3"
    },
    {  
      "name":"_099 - Al-Zilzaal.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_099 - Al-Zilzaal.mp3"
    },
    {  
      "name":"_100 - Al-Aadiyaat.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_100 - Al-Aadiyaat.mp3"
    },
    {  
      "name":"_101 - Al-Qariyah.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_101 - Al-Qariyah.mp3"
    },
    {  
      "name":"_102 - At-Takathur.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_102 - At-Takathur.mp3"
    },
    {  
      "name":"_103 - Al-Asr.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_103 - Al-Asr.mp3"
    },
    {  
      "name":"_104 - Al-Humaza.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_104 - Al-Humaza.mp3"
    },
    {  
      "name":"_105 - Al-Feel.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_105 - Al-Feel.mp3"
    },
    {  
      "name":"_106 - Al-Quraysh.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_106 - Al-Quraysh.mp3"
    },
    {  
      "name":"_107 - Al-Maoon.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_107 - Al-Maoon.mp3"
    },
    {  
      "name":"_108 - Al-Kawthar.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_108 - Al-Kawthar.mp3"
    },
    {  
      "name":"_109 - Al-Kaafirun.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_109 - Al-Kaafirun.mp3"
    },
    {  
      "name":"_110 - An-Nasr.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_110 - An-Nasr.mp3"
    },
    {  
      "name":"_111 - Al-Lahab.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_111 - Al-Lahab.mp3"
    },
    {  
      "name":"_112 - Al-Ikhlaas.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_112 - Al-Ikhlaas.mp3"
    },
    {  
      "name":"_113 - Al-Falaq.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_113 - Al-Falaq.mp3"
    },
    {  
      "name":"_114 - An-Naas.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/_114 - An-Naas.mp3"
    },
    {  
      "name":"001 - Al-Fatiha.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/001 - Al-Fatiha.mp3"
    },
    {  
      "name":"002 - Al-Baqarah.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/002 - Al-Baqarah.mp3"
    },
    {  
      "name":"003 - Al-e-Imran.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/003 - Al-e-Imran.mp3"
    },
    {  
      "name":"004 - An-Nisa.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/004 - An-Nisa.mp3"
    },
    {  
      "name":"005 - Al-Maida.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/005 - Al-Maida.mp3"
    },
    {  
      "name":"006 - Anaam.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/006 - Anaam.mp3"
    },
    {  
      "name":"007 - Al-Aaraaf.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/007 - Al-Aaraaf.mp3"
    },
    {  
      "name":"008 - Al-Anfal.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/008 - Al-Anfal.mp3"
    },
    {  
      "name":"009 - At-Tauba.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/009 - At-Tauba.mp3"
    },
    {  
      "name":"010 - Yunus.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/010 - Yunus.mp3"
    },
    {  
      "name":"011 - Hud.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/011 - Hud.mp3"
    },
    {  
      "name":"012 - Yusuf.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/012 - Yusuf.mp3"
    },
    {  
      "name":"013 - Ar-Raad.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/013 - Ar-Raad.mp3"
    },
    {  
      "name":"014 - Ibrahim.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/014 - Ibrahim.mp3"
    },
    {  
      "name":"015 - Al-Hijr.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/015 - Al-Hijr.mp3"
    },
    {  
      "name":"016 - An-Nahl.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/016 - An-Nahl.mp3"
    },
    {  
      "name":"017 - Al-Isra.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/017 - Al-Isra.mp3"
    },
    {  
      "name":"018 - Al-Kahf.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/018 - Al-Kahf.mp3"
    },
    {  
      "name":"019 - Maryam.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/019 - Maryam.mp3"
    },
    {  
      "name":"020 - Taha.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/020 - Taha.mp3"
    },
    {  
      "name":"021 - Al-Anbiya.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/021 - Al-Anbiya.mp3"
    },
    {  
      "name":"022 - Al-Hajj.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/022 - Al-Hajj.mp3"
    },
    {  
      "name":"023 - Muminun.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/023 - Muminun.mp3"
    },
    {  
      "name":"024 - An-Noor.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/024 - An-Noor.mp3"
    },
    {  
      "name":"025 - Al-Furqan.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/025 - Al-Furqan.mp3"
    },
    {  
      "name":"026 - Ash-Shuara.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/026 - Ash-Shuara.mp3"
    },
    {  
      "name":"027 - An-Naml.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/027 - An-Naml.mp3"
    },
    {  
      "name":"028 - Al-Qasas.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/028 - Al-Qasas.mp3"
    },
    {  
      "name":"029 - Ankabut.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/029 - Ankabut.mp3"
    },
    {  
      "name":"030 - Ar-Rum.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/030 - Ar-Rum.mp3"
    },
    {  
      "name":"031 - Luqman.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/031 - Luqman.mp3"
    },
    {  
      "name":"032 - As-Sajda.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/032 - As-Sajda.mp3"
    },
    {  
      "name":"033 - Al-Ahzaab.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/033 - Al-Ahzaab.mp3"
    },
    {  
      "name":"034 - Saba.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/034 - Saba.mp3"
    },
    {  
      "name":"035 - Fatir.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/035 - Fatir.mp3"
    },
    {  
      "name":"036 - Ya Seen.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/036 - Ya Seen.mp3"
    },
    {  
      "name":"037 - Saffaat.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/037 - Saffaat.mp3"
    },
    {  
      "name":"038 - Sad.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/038 - Sad.mp3"
    },
    {  
      "name":"039 - Az-Zumar.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/039 - Az-Zumar.mp3"
    },
    {  
      "name":"040 - Al-Ghafir.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/040 - Al-Ghafir.mp3"
    },
    {  
      "name":"041 - Fussilat.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/041 - Fussilat.mp3"
    },
    {  
      "name":"042 - Ash-Shura.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/042 - Ash-Shura.mp3"
    },
    {  
      "name":"043 - Az-Zukhruf.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/043 - Az-Zukhruf.mp3"
    },
    {  
      "name":"044 - Ad-Dukhan.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/044 - Ad-Dukhan.mp3"
    },
    {  
      "name":"045 - Al-Jathiya.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/045 - Al-Jathiya.mp3"
    },
    {  
      "name":"046 - Al-Ahqaaf.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/046 - Al-Ahqaaf.mp3"
    },
    {  
      "name":"047 - Muhammad.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/047 - Muhammad.mp3"
    },
    {  
      "name":"048 - Al-Fath.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/048 - Al-Fath.mp3"
    },
    {  
      "name":"049 - Al-Hujraat.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/049 - Al-Hujraat.mp3"
    },
    {  
      "name":"050 - Qaaf.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/050 - Qaaf.mp3"
    },
    {  
      "name":"051 - Adh-Dhariyat.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/051 - Adh-Dhariyat.mp3"
    },
    {  
      "name":"052 - At-Tur.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/052 - At-Tur.mp3"
    },
    {  
      "name":"053 - An-Najm.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/053 - An-Najm.mp3"
    },
    {  
      "name":"054 - Al-Qamar.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/054 - Al-Qamar.mp3"
    },
    {  
      "name":"055 - Ar-Rahmaan.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/055 - Ar-Rahmaan.mp3"
    },
    {  
      "name":"056 - Al-Waaqiya.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/056 - Al-Waaqiya.mp3"
    },
    {  
      "name":"057 - Al-Hadid.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/057 - Al-Hadid.mp3"
    },
    {  
      "name":"058 - Al-Mujaadila.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/058 - Al-Mujaadila.mp3"
    },
    {  
      "name":"059 - Al-Hashr.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/059 - Al-Hashr.mp3"
    },
    {  
      "name":"060 - Al-Mumtahina.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/060 - Al-Mumtahina.mp3"
    },
    {  
      "name":"061 - As-Saff.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/061 - As-Saff.mp3"
    },
    {  
      "name":"062 - Al-Jumuah.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/062 - Al-Jumuah.mp3"
    },
    {  
      "name":"063 - Al-Munafiqoon.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/063 - Al-Munafiqoon.mp3"
    },
    {  
      "name":"064 - At-Taghabun.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/064 - At-Taghabun.mp3"
    },
    {  
      "name":"065 - At-Talaq.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/065 - At-Talaq.mp3"
    },
    {  
      "name":"066 - At-Tahrim.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/066 - At-Tahrim.mp3"
    },
    {  
      "name":"067 - Al-Mulk.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/067 - Al-Mulk.mp3"
    },
    {  
      "name":"068 - Al-Qalam.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/068 - Al-Qalam.mp3"
    },
    {  
      "name":"069 - Al-Haaqqa.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/069 - Al-Haaqqa.mp3"
    },
    {  
      "name":"070 - Al-Maarij.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/070 - Al-Maarij.mp3"
    },
    {  
      "name":"071 - Nooh.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/071 - Nooh.mp3"
    },
    {  
      "name":"072 - Al-Jinn.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/072 - Al-Jinn.mp3"
    },
    {  
      "name":"073 - Al-Muzzammil.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/073 - Al-Muzzammil.mp3"
    },
    {  
      "name":"074 - Al-Mudatthir.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/074 - Al-Mudatthir.mp3"
    },
    {  
      "name":"075 Al-Qiyama.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/075 Al-Qiyama.mp3"
    },
    {  
      "name":"076 - Al-Insan.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/076 - Al-Insan.mp3"
    },
    {  
      "name":"077 - Al-Mursalat.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/077 - Al-Mursalat.mp3"
    },
    {  
      "name":"078 - An-Naba.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/078 - An-Naba.mp3"
    },
    {  
      "name":"079 - An-Naziat.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/079 - An-Naziat.mp3"
    },
    {  
      "name":"080 - Al-Abasa.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/080 - Al-Abasa.mp3"
    },
    {  
      "name":"081 - At-Takwir.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/081 - At-Takwir.mp3"
    },
    {  
      "name":"082 - Al-Infitar.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/082 - Al-Infitar.mp3"
    },
    {  
      "name":"083 - Al-Mutaffifeen.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/083 - Al-Mutaffifeen.mp3"
    },
    {  
      "name":"084 - Al-Inshiqaq.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/084 - Al-Inshiqaq.mp3"
    },
    {  
      "name":"085 - Al-Burooj.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/085 - Al-Burooj.mp3"
    },
    {  
      "name":"086 - At-Tariq.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/086 - At-Tariq.mp3"
    },
    {  
      "name":"087 - Al-Aala.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/087 - Al-Aala.mp3"
    },
    {  
      "name":"088 - Al-Ghashiya.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/088 - Al-Ghashiya.mp3"
    },
    {  
      "name":"089 - Al-Fajr.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/089 - Al-Fajr.mp3"
    },
    {  
      "name":"090 - Al-Balad.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/090 - Al-Balad.mp3"
    },
    {  
      "name":"091 - Ash-Shams.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/091 - Ash-Shams.mp3"
    },
    {  
      "name":"092 - Al-Layl.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/092 - Al-Layl.mp3"
    },
    {  
      "name":"093 - Ad-Duha.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/093 - Ad-Duha.mp3"
    },
    {  
      "name":"094 - Al-Inshirah.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/094 - Al-Inshirah.mp3"
    },
    {  
      "name":"095 - At-Teen.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/095 - At-Teen.mp3"
    },
    {  
      "name":"096 - Al-Alaq.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/096 - Al-Alaq.mp3"
    },
    {  
      "name":"097 - Al-Qadr.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/097 - Al-Qadr.mp3"
    },
    {  
      "name":"098 - Al-Bayyinah.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/098 - Al-Bayyinah.mp3"
    },
    {  
      "name":"099 - Al-Zilzaal.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/099 - Al-Zilzaal.mp3"
    },
    {  
      "name":"100 - Al-Aadiyaat.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/100 - Al-Aadiyaat.mp3"
    },
    {  
      "name":"101 - Al-Qariyah.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/101 - Al-Qariyah.mp3"
    },
    {  
      "name":"102 - At-Takathur.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/102 - At-Takathur.mp3"
    },
    {  
      "name":"103 - Al-Asr.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/103 - Al-Asr.mp3"
    },
    {  
      "name":"104 - Al-Humaza.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/104 - Al-Humaza.mp3"
    },
    {  
      "name":"105 - Al-Feel.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/105 - Al-Feel.mp3"
    },
    {  
      "name":"106 - Al-Quraysh.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/106 - Al-Quraysh.mp3"
    },
    {  
      "name":"107 - Al-Maoon.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/107 - Al-Maoon.mp3"
    },
    {  
      "name":"108 - Al-Kawthar.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/108 - Al-Kawthar.mp3"
    },
    {  
      "name":"109 - Al-Kaafirun.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/109 - Al-Kaafirun.mp3"
    },
    {  
      "name":"110 - An-Nasr.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/110 - An-Nasr.mp3"
    },
    {  
      "name":"111 - Al-Lahab.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/111 - Al-Lahab.mp3"
    },
    {  
      "name":"112 - Al-Ikhlaas.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/112 - Al-Ikhlaas.mp3"
    },
    {  
      "name":"113 - Al-Falaq.mp3",
      "link":"https://landsman.in/ramdhan/Kareem/113 - Al-Falaq.mp3"
    }
  ]
}
