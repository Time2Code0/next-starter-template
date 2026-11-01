import NextLink from "next/link";

export function Link({
  href: url,
  ...props
}: React.ComponentProps<typeof NextLink>) {
  const href = typeof url === "string" ? url : (url.pathname ?? "");

  const isExternal = href.startsWith("http");
  const isProtocal = href.startsWith("mailto:") || href.startsWith("tel:");

  return (
    <NextLink
      href={href}
      {...((isProtocal || isExternal) && {
        rel: "noopener noreferrer",
        target: "_blank",
      })}
      {...props}
    />
  );
}
