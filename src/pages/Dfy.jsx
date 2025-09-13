export default function Dfy() {
  // Paste your full DFY HTML (body content only) between the backticks.
  // Keep <script> tags OUT for now (see “Assets & CSS/JS” below).
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `
<!-- ================== START DFY HTML ================== -->
<h1>Your DFY homepage goes here</h1>
<p>Replace this whole block with your real HTML.</p>
<!-- =================== END DFY HTML =================== -->
        `
      }}
    />
  );
}
