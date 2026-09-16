export const metadata = {
    title: 'Placing an Ad | The Ads Kitchen',
};

export default function PlacingAnAdPage() {
    return (
          <section className="page-section">
                <h2 className="page-title">2. Placing an Ad</h2>
                  <p className="step-description">
                          Placing a Meta ad is roughly forty clicks, and most of them are the same no matter what you're doing. The guide below walks the full build end to end, including the two decisions that change the rest of it: whether you declare Employment as a Special Ad Category, and where your leads land. Read it once, then keep the quick reference open next to the keyboard for every build after that.
                  </p>
          
                <div className="embeds-section">
                        <h3 className="embed-title">Complete Guide</h3>
                        <p className="step-description">
                                  The four paths through Ads Manager, the Employment decision, and step-by-step setup for the campaign, ad set, and ad.
                        </p>
                        <div className="pdf-embed-wrapper">
                                  <iframe
                                                title="How to Place a Meta Ad - Complete Guide"
                                                src="https://drive.google.com/file/d/1osju49P6F9mLT9OIwOcfAjtWYVXRPJFw/preview"
                                                width="100%"
                                                height="800"
                                                allow="autoplay"
                                                className="pdf-embed"
                                              />
                                
                        </div>
                </div>
          
                <div className="embeds-section">
                        <h3 className="embed-title">Quick Reference</h3>
                        <p className="step-description">
                                  Naming conventions, budget numbers, and the always-off placements list on one page. Keep this open while you build.
                        </p>
                        <div className="pdf-embed-wrapper">
                                  <iframe
                                                title="Placing a Meta Ad - Quick Reference"
                                                src="https://drive.google.com/file/d/1Px4VMCpp8py0YAvR-4lFnDCayK5XVC4l/preview"
                                                width="100%"
                                                height="800"
                                                allow="autoplay"
                                                className="pdf-embed"
                                              />
                        </div>
                </div>
          </section>
        );
}
