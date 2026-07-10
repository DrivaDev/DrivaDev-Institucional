/**
 * Root, la mascota de Driva Dev, como acompañante de una sección.
 *
 * Root no se muestra por debajo de lg. Ocultarlo con CSS no alcanza: el
 * navegador descarga igual las imágenes con un ancestro display:none. El
 * <source> con media hace que en mobile se resuelva al GIF vacío y el .webp
 * nunca se pida.
 *
 * Los .webp de public/ ya vienen recortados y al tamaño en que se muestran,
 * por eso van como <img> plano en vez de next/image (que además no soporta
 * art direction por media query).
 *
 * El loading="lazy" es parte del truco, no una optimización aparte: con
 * eager o fetchPriority=high el preload scanner de Chrome pide el src del
 * <img> antes de evaluar el media del <source>, y mobile termina bajando
 * la imagen igual.
 */
const EMPTY_PIXEL =
  "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

type RootFigureProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Sombra elíptica al piso. Solo para Root parado, como en el hero. */
  groundShadow?: boolean;
  className?: string;
};

export default function RootFigure({
  src,
  alt,
  width,
  height,
  groundShadow = false,
  className = "",
}: RootFigureProps) {
  return (
    <div className={`relative hidden w-full lg:block ${className}`}>
      {/* Halo naranja detrás de Root */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[130%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(234,88,12,0.30)_0%,rgba(234,88,12,0.10)_38%,transparent_68%)] blur-2xl"
      />

      {groundShadow && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute bottom-[3%] left-1/2 h-8 w-[55%] -translate-x-1/2 rounded-[50%] bg-black/70 blur-lg"
        />
      )}

      <picture>
        <source media="(max-width: 1023px)" srcSet={EMPTY_PIXEL} />
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          decoding="async"
          loading="lazy"
          className="relative h-auto w-full select-none drop-shadow-[0_18px_45px_rgba(234,88,12,0.28)]"
        />
      </picture>
    </div>
  );
}
