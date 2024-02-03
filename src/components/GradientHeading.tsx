interface IGradientHeading {
  title: string;
  from?: string;
  to?: string;
  heading?: 1 | 2 | 3 | 4 | 5 | 6;
}

const GradientHeading = ({ title, from, to, heading }: IGradientHeading) => {
  if (heading === 1) {
    return (
      <h1
        className={`bg-gradient-to-r bg-clip-text text-8xl font-extrabold text-transparent ${
          from ?? "from-pink-300"
        } ${to ?? "to-pink-700"}`}
      >
        {title}
      </h1>
    );
  }

  if (heading === 2) {
    return (
      <h2
        className={`bg-gradient-to-r bg-clip-text text-6xl font-extrabold text-transparent ${
          from ?? "from-pink-300"
        } ${to ?? "to-pink-700"}`}
      >
        {title}
      </h2>
    );
  }

  if (heading === 3) {
    return (
      <h3
        className={`bg-gradient-to-r bg-clip-text text-4xl font-extrabold text-transparent ${
          from ?? "from-pink-300"
        } ${to ?? "to-pink-700"}`}
      >
        {title}
      </h3>
    );
  }

  if (heading === 4) {
    return (
      <h4
        className={`bg-gradient-to-r bg-clip-text text-2xl font-extrabold text-transparent ${
          from ?? "from-pink-300"
        } ${to ?? "to-pink-700"}`}
      >
        {title}
      </h4>
    );
  }

  if (heading === 5) {
    return (
      <h5
        className={`bg-gradient-to-r bg-clip-text text-xl font-extrabold text-transparent ${
          from ?? "from-pink-300"
        } ${to ?? "to-pink-700"}`}
      >
        {title}
      </h5>
    );
  }

  if (heading === 6) {
    return (
      <h6
        className={`bg-gradient-to-r bg-clip-text text-lg font-extrabold text-transparent ${
          from ?? "from-pink-300"
        } ${to ?? "to-pink-700"}`}
      >
        {title}
      </h6>
    );
  }

  return (
    <h1
      className={`bg-gradient-to-r bg-clip-text text-8xl font-extrabold text-transparent ${
        from ?? "from-pink-300"
      } ${to ?? "to-pink-700"}`}
    >
      {title}
    </h1>
  );
};

export default GradientHeading;
