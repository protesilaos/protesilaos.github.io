---
title: 'BREAKING: my BSPWM now uses the Hyper key'
excerpt: 'This is the first step to a comprehensive review of my dotfiles. It includes several breaking changes.'
---

My [dotfiles on GitLab](https://gitlab.com/protesilaos/dotfiles) contain
a series of breaking changes.  **Relax:** if you read that repo's
README, you should know that I do not recommend tracking it directly.
Still, there may be something for you to learn here.  Read more for a
comprehensive overview of the state of affairs.

* * *

In a previous entry, I documented how to [set up the Hyper key on
Debian](https://protesilaos.com/codelog/2019-10-10-debian-xmodmap/).  My
motive then was to use it inside of my Emacs setup.  However, I have
since revised this approach.  Hyper shall now be used as the main
modifier key for my tiling window manager.  Because of this I am
reverting back full time to my BSPWM session.

I had switched away from my bespoke desktop session in early July, just
after I published my "Prot's Dots For Debian" or just [PDFD](https://protesilaos.com/pdfd/)
(the book that helps users reproduce my setup).  The publication of the
book was an ideal opportunity for me to try something new, so I went
with Emacs.  Because I wanted to use the Super key inside of Emacs, I
could no longer stay on BSPWM, hence my temporary switch to Xfce, where
I disabled all of the desktop environment's key bindings in an attempt
to focus exclusively on Emacs.

That was the right decision at the time, as it helped me learn this
truly special tool.  With the Hyper key now in place, I no longer face
the constraints that forced me away from BSPWM.  As such, I just pushed
a set of **breaking changes** to my dotfiles' repo, which do the
following:

+ Enable the Hyper key, mapping it to the Caps Lock and the right "Win"
  respectively.  The Super key is now only available on the left "Win".
+ Implement the necessary `setxkbmap` options and perform the
  concomitant `xmodmap` configurations during BSPWM initialisation.
+ Remove all references to the Super key (`mod4`) in my SXHKD
  configuration files.  The key `mod3` (aka Hyper) takes their place.

I am including the full text of the two commits in the annex to this
blog post (see below).

My longer term objective is to merge my dotfiles with my new Emacs
setup.  The implications will be far-reaching, as I will eventually
remove or otherwise reconsider the inclusion of program configs that are
not part of my Emacs workflow.  This means that I might delete my Vim
settings, as well as anything that has to do with emailing, reading
feeds, etc.

Whatever the case, PDFD continues to work as intended.  I was prescient
enough to use a "snapshot" of my dotfiles, placed in a separate repo,
and to rely on Debian's legendary stability.

## ANNEX with commit ec885d16 and 257e6ca3

First the latest fix
([257e6ca3](https://gitlab.com/protesilaos/dotfiles/commit/257e6ca3b584cee20d08ac7dec0d7bfe19a96d22))
that allowed me to finally write this post.
```
origin/master 257e6ca3b584cee20d08ac7dec0d7bfe19a96d22
Author:     Protesilaos Stavrou <info@protesilaos.com>
AuthorDate: Sat Oct 19 22:41:22 2019 +0300
Commit:     Protesilaos Stavrou <info@protesilaos.com>
CommitDate: Sat Oct 19 22:41:22 2019 +0300

Parent:     809345e Fix typo in Xmodmap and specify Compose key.
Merged:     dynamicDesktops master mateTerminalDefault modularSXHKD xtermSwitch
Contained:  master
Follows:    v1.0.2-pdfd (10)

Fix mod3 configs (expands on commit ec885d1)

There are many parts to getting this right.

+ Some changes were necessary in Xmodmap.
+ A few options need to be specified.
+ The Maté settings daemon had to be disabled.

I tried switching layouts between the ones I use: US QWERTY and Greek.
The mod3 setup flawlessly now.

Concerning the settings daemon, I still need to find a solution, because
it provides some nice functionality I wish to keep.  Perhaps a more
lightweight daemon could be used here.  Will need to investigate.

3 files changed, 26 insertions(+), 33 deletions(-)
bspwm/.Xmodmap              | 26 +++++++-------------------
bspwm/.config/bspwm/bspwmrc | 31 ++++++++++++++++++-------------
bspwm/.config/sxhkd/sxhkdrc |  2 +-
```

And the first one that ushered in the Hyper era
([ec885d1](https://gitlab.com/protesilaos/dotfiles/commit/ec885d16be726df122d88bcf4494210ae300cfa7))

```
ec885d16be726df122d88bcf4494210ae300cfa7
Author:     Protesilaos Stavrou <info@protesilaos.com>
AuthorDate: Sat Oct 19 17:08:45 2019 +0300
Commit:     Protesilaos Stavrou <info@protesilaos.com>
CommitDate: Sat Oct 19 17:08:45 2019 +0300

Parent:     582dac7 Change the way Git selects its editor
Merged:     dynamicDesktops mateTerminalDefault modularSXHKD xtermSwitch
Contained:  master
Follows:    v1.0.2-pdfd (8)

BREAKING CHANGES: control session with Hyper key

My entire session is no longer dependent on using the Super key (mod4).
Its function is now performed by Hyper (mod3).  This new modifier key is
defined in `.Xmodmap', which is included in the same Stow package as the
core BSPWM/SXHKD configs (because it is equally important to them).

The `.Xmodmap' enables Hyper and binds it to the Caps lock and the right
"Windows" key.  This means that there no longer exists a toggle for
writing all capital letters.  The Super key is also limited to just the
left Windows key.  This is a tentative design that might be reviewed
upon further consideration.

* * *

The present commit is merely _the first step_ in a major review of my
custom desktop session.  The overarching objective is to eventually
merge my bespoke BSPWM setup with my newer Emacs environment.

For the time being, my "dotemacs" is available from my website[0] and is
stored in a separate repo,[1] but will ultimately be merged with my
dotfiles once all the prerequisites are met.

Expect far-reaching changes to practically everything that I now do
inside of Emacs (writing, emailing, reading…) and is still covered by
specialised tools (vim, mutt, newsboat, ncmpcpp…).  For more on that,
see my video blog on the Emacs mindset and the Unix philosophy (ignore
my remarks on Xfce, as I did not know about `mod3' back then).[2]

[0]: https://protesilaos.com/emacs/dotemacs
[1]: https://protesilaos.com/emacs/dotemacs
[2]: https://protesilaos.com/codelog/2019-08-09-vlog-emacs-unix/

* * *

If anyone reviewing this has read my "Prot's Dots For Debian",[4] they
should be reminded that PDFD does not track this repo directly.  It has
its own "snapshot" of my dotfiles.[5]

I will not be pushing any of these breaking changes to PDFD for the time
being.  That is a longer term objective that _might happen_ with the
release of Debian 11 'bullseye' (about 22 months from now).

[4]: https://protesilaos.com/pdfd
[5]: https://gitlab.com/protesilaos/cpdfd

4 files changed, 195 insertions(+), 68 deletions(-)
bspwm/.Xmodmap                   |  67 ++++++++++++++++++++++++
bspwm/.config/bspwm/bspwmrc      |   5 ++
bspwm/.config/sxhkd/sxhkdrc      |  83 ++++++++++++++++++++----------
bspwm/.config/sxhkd/sxhkdrc_bspc | 108 ++++++++++++++++++++++++---------------
```
