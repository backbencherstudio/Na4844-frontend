/** @format */

import Row from "./Row";
import Cell from "./Cell";

export default function ComparePlans() {
  return (
    <section className='relative overflow-hidden py-10'>
      {/* 🔹 MIDDLE BACKGROUND GRADIENT */}
      <div
        className='pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 h-[920px] z-0'
        style={{
          background:
            "linear-gradient(180deg, #FFFFFF 0%, #7FCCE9 37.29%, #2E9AF0 66.53%, #D6E1EA 88.26%, #FFFFFF 100%)",
        }}
      />

      {/* 🔹 CONTENT ABOVE GRADIENT */}
      <div className='relative z-20'>
        {/* Title */}
        <h2 className='text-center text-4xl font-semibold mb-16'>
          Compare Plans
        </h2>

        {/* Table Wrapper */}
        <div className='max-w-6xl mx-auto rounded-3xl bg-[#89cceb]/25 backdrop-blur overflow-hidden p-16'>
          {/* Header Row */}
          <div className='grid grid-cols-5 border-b border-white/40 gap-[15px]'>
            <div />
            {["Launch", "Core", "Creator", "Studio"].map((title) => (
              <div
                key={title}
                className='py-6 text-center font-medium rounded-t-2xl bg-white/30'>
                {title}
              </div>
            ))}
          </div>

          {/* Rows */}
          <div className='gap-9'>
            {/* Price Row */}
            <Row>
              <Cell left>Per video</Cell>
              <Cell>
                <p className='text-3xl font-semibold'>$0</p>
                <span className='text-sm text-gray-500'>Per video</span>
              </Cell>
              <Cell>
                <p className='text-3xl font-semibold'>$79</p>
                <span className='text-sm text-gray-500'>Per video</span>
              </Cell>
              <Cell highlight>
                <p className='text-3xl font-semibold'>$112</p>
                <span className='text-sm text-gray-500'>Per video</span>
              </Cell>
              <Cell>
                <p className='text-3xl font-semibold'>$158</p>
                <span className='text-sm text-gray-500'>Per video</span>
              </Cell>
            </Row>

            {/* Feature Rows */}
            <Row>
              <Cell left>Unlimited Videos</Cell>
              <Cell>—</Cell>
              <Cell>✓</Cell>
              <Cell highlight>✓</Cell>
              <Cell>✓</Cell>
            </Row>

            <Row>
              <Cell left>Professional Editing</Cell>
              <Cell>✓</Cell>
              <Cell>✓</Cell>
              <Cell highlight>✓</Cell>
              <Cell>✓</Cell>
            </Row>

            <Row>
              <Cell left>Branding Included</Cell>
              <Cell>✓</Cell>
              <Cell>✓</Cell>
              <Cell highlight>✓</Cell>
              <Cell>✓</Cell>
            </Row>

            <Row>
              <Cell left>Custom Thumbnails</Cell>
              <Cell>—</Cell>
              <Cell>✓</Cell>
              <Cell highlight>✓</Cell>
              <Cell>✓</Cell>
            </Row>

            <Row last>
              <Cell left>SEO Optimization</Cell>
              <Cell>21 days</Cell>
              <Cell>21 days</Cell>
              <Cell highlight>21 days</Cell>
              <Cell>21 days</Cell>
            </Row>
          </div>

          {/* Footer Note */}
          <p className='text-base font-medium pt-[44px] text-black/80'>
            *Launch includes 1 video per month, footage limited to 5 minutes or
            less. Watermark applied. Plans billed monthly or annually. Unlimited
            = No cap policy applies.
          </p>
        </div>
      </div>
    </section>
  );
}
