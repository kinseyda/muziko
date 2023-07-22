function makeLink(name: string, href: string) {
  return (
    <a href={href} className="link">
      {name}
    </a>
  );
}

export const spotifyLink = makeLink("Spotify", "https://open.spotify.com/");

export const spotifyAPILink = makeLink(
  "API",
  "https://developer.spotify.com/documentation/web-api"
);

export const reactLink = makeLink("React", "https://react.dev/");

export const tailwindLink = makeLink(
  "Tailwind CSS",
  "https://tailwindcss.com/"
);

export const daisyLink = makeLink("daisyUI", "https://daisyui.com/");

export const stripeLink = makeLink("Stripe", "https://stripe.com");

export const kevinLink = makeLink(
  "website",
  "https://kevinhufnagl.com/how-to-stripe-website-gradient-effect/"
);

export const muzikoGithubLink = makeLink(
  "GitHub",
  "https://github.com/kinseyda/muziko"
);
