{% assign themes = site.data.tempus-themes %}

{% for theme in themes %}
{% if page.permalink contains theme.slug %}

{{ theme.description }}.

![{{ theme.slugunderscore }}_sample](https://gitlab.com/protesilaos/tempus-themes/raw/master/screenshots/{{ theme.slugunderscore}}.png)

## {{ theme.name }} Palette

{% include tempus-themes-palette.html %}

## Tempus themes repositories

Each repo has instructions on how to use the themes for the application of your choice.

{% include tempus-themes-repos.html %}

## GNU/Linux distro packages

At present, users of Arch Linux and derivatives can get the following packages from the Arch User Repository. They contain the entire theme collection.

{% include tempus-themes-packages.html %}

## Contributing

The project revolves around the Tempus themes generator. This is the tool that contains the colour scheme specs and the application templates. See its [CONTRIBUTING.md](https://gitlab.com/protesilaos/tempus-themes-generator/blob/master/CONTRIBUTING.md).

## License

GNU General Public License Version 3.

## Meta

The project is maintained with a set of helper scripts and utilities that streamline the deployment and maintenance of the git repos. Those interested can refer to the [tempus-themes-utils repository](https://gitlab.com/protesilaos/tempus-themes-utils).

{% endif %}
{% endfor %}
