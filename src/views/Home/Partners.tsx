import React from 'react';

import PartnerV2 from '@/views/Home/components/PartnerV2';

export default function Partners() {
  return (
    <section className="container mx-auto mb-24 flex flex-col items-center justify-center gap-10 px-2">
      <h2 className=" pb-5 text-center font-montserrat text-4xl font-medium tracking-widest">
        Backers & Partners
      </h2>

      <div className="flex flex-wrap place-content-center items-center justify-center gap-10 md:w-4/5 md:gap-10">
        <PartnerV2
          image="/images/partners/ventures.png"
          width="279"
          heigth="28"
          name="ventures"
        />

        <PartnerV2
          image="/images/partners/tenset.png"
          name="tenset"
          width="88"
          heigth="47"
        />
        <PartnerV2
          image="/images/partners/vemp.png"
          name="vemp"
          width="100"
          heigth="21"
        />
        <PartnerV2
          image="/images/partners/gda.png"
          width="186"
          heigth="43"
          name="gda"
        />
        <PartnerV2
          image="/images/partners/ATH.png"
          width="82"
          heigth="63"
          name="gda"
        />
      </div>
    </section>
  );
}
