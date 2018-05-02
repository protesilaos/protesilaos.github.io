{% assign themes = site.data.themes %}

{% for theme in themes %}
{% if page.permalink contains theme.url %}

Packages or ports of it are available for Vim and Atom, as well as the Xfce4, RXVT-Unicode (urxvt), and XTERM terminal emulators.

## Palette

{% include prot16-palette.html %}

## Vim themes

{% include prot16-vim-packages.md %}

## Atom packages

{% include prot16-packages.html %}

## Terminal emulators

{% include prot16-terminal-mapping.html %}

## Palette specs

```sh
# Palette variables and values

dbg={{ theme.palette.dbg }} # Dark background
dhl={{ theme.palette.dhl }} # Dark background highlight
dt2={{ theme.palette.dt2 }} # Dark background secondary text
dt1={{ theme.palette.dt1 }} # Dark background primary text

lbg={{ theme.palette.lbg }} # Light background
lhl={{ theme.palette.lhl }} # Light background highlight
lt2={{ theme.palette.lt2 }} # Light background secondary text
lt1={{ theme.palette.lt1 }} # Light background primary text

red={{ theme.palette.red }} # Red variant
ora={{ theme.palette.ora }} # Orange variant
yel={{ theme.palette.yel }} # Yellow variant
gre={{ theme.palette.gre }} # Green variant

cya={{ theme.palette.cya }} # Cyan variant
blu={{ theme.palette.blu }} # Blue variant
vio={{ theme.palette.vio }} # Violet variant
mag={{ theme.palette.mag }} # Magenta variant
```

```sh
# Terminal colour codes
# corresponding to the palette
# followed by termcol description

dbg=0      # black
red=1      # red
gre=2      # green
yel=3      # yellow
blu=4      # blue
mag=5      # magenta
cya=6      # cyan
lhl=7      # white
dhl=8      # brblack
ora=9      # brred
lt1=10     # brgreen
dt2=11     # bryellow
lt2=12     # brblue
vio=13     # brmagenta
dt1=14     # brcyan
lbg=15     # brwhite
```

## Related projects

Note that this theme is part of the wider Prot16 collection. The [Prot16 git repo](https://github.com/protesilaos/prot16) includes all files (except the Atom packages) for each and every item.

*Wish to contribute?* Work can be done to port the themes to other applications. The program that handles the process is the [Prot16 Generator](https://github.com/protesilaos/prot16-generator) (a bash script to build themes on demand or to work with other scripts in automating the process).

Application-specific Prot16 repositories:

- [Prot16 Colour values](https://github.com/protesilaos/prot16-data)
- [Prot16 URXVT](https://github.com/protesilaos/prot16-urxvt)
- [Prot16 Vim](https://github.com/protesilaos/prot16-vim)
- [Prot16 Xfce4 Terminal](https://github.com/protesilaos/prot16-xfce4-terminal)
- [Prot16 XTERM](https://github.com/protesilaos/prot16-xterm)

{% endif %}
{% endfor %}
