interface LogoProps {
  tagline: string;
  imagePath?: string;
}

export function Logo({ tagline, imagePath }: LogoProps) {
  return (
    <div className="text-center mb-8">
      <div className="mx-auto w-[240px] h-[80px] flex items-center justify-center">
        {imagePath ? (
          <img 
            src={imagePath} 
            alt="GULFTECH" 
            className="w-full h-full object-contain"
          />
        ) : (
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#68C1C4] to-[#48C94F] text-transparent bg-clip-text leading-none">
            GULFTECH
          </h1>
        )}
      </div>
      <p className="mt-4 text-xl md:text-2xl text-[#68C1C4]">
        {tagline}
      </p>
    </div>
  );
}