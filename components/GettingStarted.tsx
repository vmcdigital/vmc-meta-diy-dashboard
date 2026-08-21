export default function GettingStarted() {
  return (
    <div className="section-content onboarding-steps">
      <div className="step-item">
        <h3 className="step-title">Step 0: Business Portfolio and Ad Account Setup</h3>
        <p className="step-description">
          Before you can run any ads, you need a Meta Business Portfolio and an active ad account
          connected to it. Watch the walkthrough below to get both set up correctly from the start.
        </p>
        <div className="pdf-embed-wrapper">
          <iframe
            title="Business Portfolio and Ad Account Setup Walkthrough"
            src="https://drive.google.com/file/d/1uGSIzbtaAhdLqOftW9rTsNDHt9ZSFZUZ/preview"
            width="100%"
            height="600"
            allow="autoplay"
            className="pdf-embed"
          />
        </div>
        <p className="pdf-note">
          Already have a Business Portfolio and ad account up and running? You can skip this step
          and head straight to Step 1.
        </p>
      </div>

      <div className="step-item">
        <h3 className="step-title">Step 1: Add Vector Marketing as a Partner</h3>
        <p className="step-description">
          Connect your ad account by adding Vector Marketing as an agency partner. This gives our team the
          access needed to support your account and troubleshoot issues.
        </p>
        <div className="pdf-embed-wrapper">
          <iframe
            title="Add VMC as a Partner Walkthrough"
            src="https://drive.google.com/file/d/1BrwFo9QO-OooQ-OYEwxNJ9S0zaKJqODL/preview"
            width="100%"
            height="600"
            allow="autoplay"
            className="pdf-embed"
          />
        </div>
        <p className="pdf-note">Need the PDF directly? You'll receive this via email. If not, reach out to Joel.</p>
      </div>

      <div className="step-item">
        <h3 className="step-title">Step 2: Join the WhatsApp Community</h3>
        <p className="step-description">
          Connect with other DIY managers, share wins, ask questions, and learn together.
        </p>
        <a
          href="https://chat.whatsapp.com/DvmlfXRNYHt7IfSy1BgQ5L?s=cl&p=i&ilr=4"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-1.56.934-2.846 2.243-3.652 3.738-1.627 3.122-.756 6.845 2.19 8.75 1.51.904 3.065 1.345 4.593 1.345 1.215 0 2.413-.268 3.586-.804 1.56-.934 2.846-2.243 3.652-3.738 1.627-3.122.757-6.845-2.19-8.75-1.51-.904-3.065-1.345-4.593-1.345zm0-2.183c1.894 0 3.75.474 5.418 1.407 2.257 1.352 4.09 3.362 5.172 5.814 1.082 2.453 1.001 5.17-.232 7.584-1.233 2.414-3.191 4.233-5.447 5.585-1.668 1.003-3.523 1.532-5.418 1.532-2.018 0-4.003-.563-5.755-1.663-2.25-1.354-4.084-3.365-5.167-5.819-1.082-2.454-1.001-5.171.232-7.585 1.233-2.414 3.191-4.233 5.447-5.585 1.668-1.003 3.523-1.532 5.418-1.532z" />
          </svg>
          Join WhatsApp Community
        </a>
      </div>

      <div className="step-item">
        <h3 className="step-title">Step 3: Schedule Your Strategy Call</h3>
        <p className="step-description">
          Before you launch, schedule a quick strategy call to walk through your budget, target schools, and timeline.
        </p>
        <a
          href="https://calendly.com/koncinskyj/diy-meta-ads"
          target="_blank"
          rel="noopener noreferrer"
          className="calendly-button"
        >
          Book Your Strategy Call
        </a>
        <p className="pdf-note">Prefer to reach out directly? Email Joel at jkoncinsky@cutco.com or call (318) 542-9251.</p>
      </div>
    </div>
  );
}
