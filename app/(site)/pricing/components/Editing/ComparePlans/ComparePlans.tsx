/** @format */

import Row from "./Row";
import Cell from "./Cell";
import Image from "next/image";

export default function ComparePlans() {
  return (
    <section
      className='h-auto bg-contain  pt-[120px] '
      style={{
        backgroundImage: "url('/homepage/compare.png')",
        // backgroundSize: "cover",
        backgroundPosition: "center",
        // minHeight: "100vh",
      }}>
      {/* Background gradient */}
      {/* <div className='absolute z-20 object-cover '>
        <Image src='/homepage/compare.png' alt='ing' height={500} width={500} />
      </div> */}
      <h2 className='text-center text-4xl font-semibold mb-16'>
        Compare Plans
      </h2>
      <div className=''>
        <div className='max-w-6xl mx-auto rounded-3xl shdaow   overflow-hidden p-16'>
          {/* Header Row */}
          <div className='grid grid-cols-5 border-b border-white/40 gap-[15px]  '>
            <div />
            {["Launch", "Core", "Creator", "Studio"].map((title) => (
              <div
                key={title}
                className={`py-6 text-center font-medium   rounded-t-2xl
              ${title === "Creator" ? "bg-white/20" : "bg-white/20"}`}>
                {title}
              </div>
            ))}
          </div>

          {/* Price Row */}
          <div className='gap-9 '>
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

            <Row last className=''>
              <Cell left>SEO Optimization</Cell>
              <Cell>21 days</Cell>
              <Cell>21 days</Cell>
              <Cell highlight>21 days</Cell>
              <Cell>21 days</Cell>
            </Row>
          </div>
        </div>
      </div>
    </section>
  );
}
