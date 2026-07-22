import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { FAQPill } from "@/components/FAQPill";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";
import { hotels, hotelsPage, venue, venueUberUrl } from "@/content/site";

const HotelsPage = () => (
  <>
    <Navigation />
    <main className="pt-[76px]">
      <section className="py-20 lg:py-32">
        <div className="container">
          <SectionHeading
            kicker={hotelsPage.kicker}
            title={hotelsPage.title}
            description={hotelsPage.description}
          />

          <Reveal delay={200}>
            <div className="mb-10 flex flex-wrap gap-3">
              <ButtonLink
                href={venue.mapsUrl}
                variant="outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Open venue in Maps
              </ButtonLink>
              <ButtonLink
                href={venueUberUrl}
                variant="ghost"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get a ride (Uber)
              </ButtonLink>
            </div>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {hotels.map((hotel, index) => (
              <Reveal key={hotel.name} delay={(index % 6) * 60}>
                <div className="flex h-full flex-col justify-between gap-6 rounded-[22px] border border-white/10 bg-card p-6">
                  <p className="font-display text-lg font-semibold leading-snug">
                    {hotel.name}
                  </p>
                  <ButtonLink
                    href={hotel.mapsUrl}
                    variant="outline"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="self-start"
                  >
                    View on Google Maps
                  </ButtonLink>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={120}>
            <p className="mt-10 max-w-2xl font-sans text-sm text-white/50">
              {hotelsPage.note}
            </p>
          </Reveal>
        </div>
      </section>
    </main>
    <Footer />
    <FAQPill />
  </>
);

export default HotelsPage;
