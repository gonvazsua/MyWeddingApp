import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent {

  constructor(private router: Router) { }

  posadaDeLasCuevas() {
    window.open("https://www.booking.com/hotel/es/posada-de-las-cuevas.es.html?aid=318615;label=Spanish_Spain_ES_ES_29562095065-jgz4MF3npPzmKMBx%2AjMkjwS217289515564%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap1t1%3Aneg%3Afi3171137264%3Atiaud-294080460146%3Adsa-300759777270%3Alp9061038%3Ali%3Adec%3Adm;sid=44dce62e33912d18654b77b9070b47e5;all_sr_blocks=159319501_93068557_2_2_0;bshb=2;checkin=2018-09-14;checkout=2018-09-16;dest_id=-371175;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;highlighted_blocks=159319501_93068557_2_2_0;hpos=1;no_rooms=1;room1=A%2CA;sb_price_type=total;srepoch=1520886183;srfid=bfaec7ad63db8fda99b00c5ae7c6f7eb1067fac0X1;srpvid=32f58f526747005e;type=total;ucfs=1&#hotelTmpl", "_blank")
  }

  mesonMolinera() {
    window.open("https://www.booking.com/searchresults.es.html?aid=311090;label=meson-de-la-molinera-6TK7bKQIMbLWhtyTKUnO5wS161717050024%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap1t1%3Aneg%3Afi%3Atiaud-146342138230%3Akwd-2315096212%3Alp9061038%3Ali%3Adec%3Adm;sid=44dce62e33912d18654b77b9070b47e5;checkin=2018-09-14;checkout=2018-09-16;city=-371175;highlighted_hotels=19359;hlrd=without_av;keep_landing=1;redirected=1;source=hotel&gclid=Cj0KCQjwkKPVBRDtARIsAA2CG6HnQDiV-1HVgYYCc4wyrXbKSXM3muyvz4i2Ciy5DWMrksrQWn-RiYoaAmrzEALw_wcB&", "_blank")
  }

}
