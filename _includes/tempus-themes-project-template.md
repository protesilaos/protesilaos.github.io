{% assign themes = site.data.tempus-themes %}

{% for theme in themes %}
{% if page.permalink contains theme.slug %}

{{ theme.description }}.

![{{ theme.slugunderscore }}_sample](https://gitlab.com/protesilaos/tempus-themes/raw/master/screenshots/{{ theme.slugunderscore}}.png)

## {{ theme.name }} Palette

{% include tempus-themes-palette.html %}

***

## About the Tempus Themes project

Tempus is a collection of themes for Vim, text editors, and terminal emulators that are compliant at *the very least* with the WCAG AA accessibility standard for colour contrast. The contrast between foreground and background values is >= 4.50:1 or >= 7.00:1. The idea is to provide consistent colour palettes, while preserving legibility.

## Tempus themes repositories

Each repo has instructions on how to use the themes for the application of your choice.

{% include tempus-themes-repos.html %}

## GNU/Linux distro packages

**UPDATE 2018-08-09.** These packages are out of date. I am no longer using Arch Linux. I still intend to maintain them, though it will take some more time. If you need help, [contact me](/contact/).
{:.critical}

At present, users of Arch Linux and derivatives can get the following packages from the Arch User Repository. They contain the entire theme collection.

{% include tempus-themes-packages.html %}

## Contributing

The project revolves around the Tempus themes generator. This is the tool that contains the colour scheme specs and the application templates. See its [CONTRIBUTING.md](https://gitlab.com/protesilaos/tempus-themes-generator/blob/master/CONTRIBUTING.md).

## License

GNU General Public License Version 3.

## Meta

The project is maintained with a set of helper scripts and utilities that streamline the deployment and maintenance of the git repos. Those interested can refer to the [tempus-themes-utils repository](https://gitlab.com/protesilaos/tempus-themes-utils).

The screenshot on this page is an ad hoc demo within my custom `bspwm` working environment. The Tempus Themes are a core part of it. See [my dotfiles](https://gitlab.com/protesilaos/dotfiles).

{% endif %}
{% endfor %}
