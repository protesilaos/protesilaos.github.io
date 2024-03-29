---
title: "Modus themes: report on the review of the main blue colours"
excerpt: "Detailed explanation of the minor tweaks to the three main blue foreground values.  The 'Modus themes' is a pair of themes for Emacs."
---

The "Modus themes" is a pair of highly accessible themes for Emacs that
conform with the WCAG AAA standard for colour contrast between
combinations of designated background and foreground values (a minimum
contrast ratio of 7:1).

Modus Operandi is a light theme.  Modus Vivendi is dark.  The themes are
part of Emacs' `master` branch, each of them currently tagged with
version `0.12.0`, while they are also distributed through various
package archives.  Consult their Info manual for the specifics (the
manual is not yet in Emacs---coming in version `0.13.0`):
<https://protesilaos.com/emacs/modus-themes>.

The present report documents changes that will be made available in
version `0.13.0` of the themes, expected at the end of September 2020.

The following is a valid `org-mode` text that was used to prepare this
report.  The gist is that even seemingly trivial changes require a lot
of work.  If, by the way, anyone knows of a more elegant syntax to write
those tables, please do [contact me](https://protesilaos.com/contact/):
I have little experience with spread sheets, formulas, etc.

```org
#+TITLE: Modus themes: report on the minor review of the main blue colours
#+AUTHOR: Protesilaos Stavrou

* Scope of the review

To refine the three main blue foreground values so as to improve the
distinction between themselves which, in turn, means that they work
better in various contexts.

* Conformance with the WCAG AAA standard

This test compares the new and the old colour values relative to the
three main backgrounds they are intended to be combined with: =bg-main=, 
=bg-dim=, =bg-alt= in this order from columns 3 to 5.  The minimum
contrast ratio must be 7.00:1.

#+NAME: Modus Operandi main blue colours against main backgrounds (new vs old)
| Colour name          |         | #ffffff | #f8f8f8 | #f0f0f0 |
|----------------------+---------+---------+---------+---------|
| blue                 | #0031a9 |   10.44 |    9.83 |    9.16 |
| blue (old)           | #0030a6 |   10.64 |   10.02 |    9.34 |
| blue-alt             | #2544bb |    8.01 |    7.54 |    7.03 |
| blue-alt (old)       | #223fbf |    8.30 |    7.81 |    7.28 |
| blue-alt-other       | #0000c0 |   11.92 |   11.23 |   10.46 |
| blue-alt-other (old) | #0000bb |   12.23 |   11.51 |   10.73 |
#+TBLFM: $3='(clr $2 @1$3);%0.2f :: $4='(clr $2 @1$4);%0.2f :: $5='(clr $2 @1$5);%0.2f

#+NAME: Modus Vivendi main blue colours against main backgrounds (new vs old)
| Colour name        |         | #000000 | #110b11 | #181a20 |
|--------------------+---------+---------+---------+---------|
| blue               | #2fafff |    8.70 |    8.05 |    7.20 |
| blue (o)           | #29aeff |    8.59 |    7.96 |    7.12 |
| blue-alt           | #79a8ff |    8.86 |    8.20 |    7.34 |
| blue-alt (o)       | #72a4ff |    8.47 |    7.84 |    7.01 |
| blue-alt-other     | #00bcff |    9.64 |    8.93 |    7.98 |
| blue-alt-other (o) | #00bdfa |    9.66 |    8.95 |    8.00 |
#+TBLFM: $3='(clr $2 @1$3);%0.2f :: $4='(clr $2 @1$4);%0.2f :: $5='(clr $2 @1$5);%0.2f

* Distance relative to selected colours

These tables show the distance in colour space between the blue values
and selected colours which are deemed relevant based on either their
proximity to the blue side of the spectrum or their use in various
contexts (e.g. syntax highlighting).  We do not target a specific number
here.  Just to show the effect of the review.  A higher value means that
there is a greater distance between two colours.

+ Columns 3 and 4 are the new and old =blue= respectively.
+ Columns 5 and 6 are the same for =blue-alt=.
+ Columns 7 and 8 are for =blue-alt-other=.

For Modus Operandi the table shows that the new =blue= and =blue-alt-other=
are slightly more distinct than relevant colours: we witness a modest
increase throughout.  Whereas =blue-alt= has been corrected to be slightly
less distinct than its old value (in relative terms, as the colour
distance is still considerable).  The rationale for this becomes
apparent in the next section, where we compare the blue colours between
themselves.

#+NAME: Modus Operandi colour distance of blue colours (new vs old by column pair)
| Name              |         | #0031a9 | #0030a6 | #2544bb | #223fbf | #0000c0 | #0000bb |
|-------------------+---------+---------+---------+---------+---------+---------+---------|
| fg-main           | #000000 |   96032 |   92602 |  124671 |  126256 |  111457 |  105727 |
| fg-dim            | #282828 |   52676 |   50355 |   65226 |   67814 |   77829 |   73427 |
| fg-alt            | #505050 |   40482 |   39232 |   36703 |   40383 |   75655 |   72518 |
| cyan              | #00538b |    7381 |    7142 |   10564 |   12014 |   36264 |   34737 |
| cyan-alt          | #30517f |   14156 |   13707 |   11225 |   13453 |   43685 |   41855 |
| cyan-alt-other    | #005a5f |   23333 |   22352 |   29782 |   32591 |   61101 |   58244 |
| green             | #005e00 |   94516 |   91844 |  108755 |  114129 |  147077 |  141348 |
| green-alt         | #315b00 |   95771 |   93172 |  102232 |  107966 |  146343 |  140797 |
| green-alt-other   | #145c33 |   49824 |   48089 |   56775 |   60974 |   94266 |   90134 |
| magenta           | #721045 |   61495 |   59579 |   62564 |   64325 |   72489 |   69117 |
| magenta-alt       | #8f0075 |   64087 |   62865 |   58357 |   58745 |   62414 |   60426 |
| magenta-alt-other | #5317ac |   17766 |   17638 |   13557 |   12852 |   18292 |   17791 |
#+TBLFM: $3='(color-distance $2 @1$3) :: $4='(color-distance $2 @1$4) :: $5='(color-distance $2 @1$5) :: $6='(color-distance $2 @1$6) :: $7='(color-distance $2 @1$7) :: $8='(color-distance $2 @1$8)

For Modus Vivendi we have slightly increased the luminance of =blue= and
=blue-alt=, while we have decreased it a tiny bit for =blue-alt-other=.
These minor adjustments mean that the first two have been toned down in
terms of their colour distance to relevant values, while the latter has
been marginally amplified.  The differences are negligible in practice.
Again, the intent is to make the blue colours more distinct between
themselves, as illustrated in the next section.

Recall that:

+ Columns 3 and 4 are the new and old =blue= respectively.
+ Columns 5 and 6 are the same for =blue-alt=.
+ Columns 7 and 8 are for =blue-alt-other=.

#+NAME: Modus Vivendi colour distance of blue colours (new vs old by column pair)
| Name              |         | #2fafff | #29aeff | #79a8ff | #72a4ff | #00bcff | #00bdfa |
|-------------------+---------+---------+---------+---------+---------+---------+---------|
| fg-main           | #ffffff |  138824 |  145545 |   80047 |   87953 |  181930 |  181457 |
| fg-dim            | #e0e6f0 |   92680 |   98243 |   44639 |   50561 |  131039 |  130382 |
| fg-alt            | #a8a8a8 |   55597 |   59075 |   24276 |   26233 |   88244 |   86135 |
| cyan              | #00d3d0 |   16356 |   15543 |   46616 |   44209 |    8811 |    7284 |
| cyan-alt          | #4ae8fc |   14766 |   16029 |   21839 |   22484 |   19669 |   19303 |
| cyan-alt-other    | #6ae4b9 |   32726 |   34890 |   27684 |   29353 |   45240 |   43022 |
| green             | #44bc44 |   99451 |  100612 |  100991 |  100499 |  110970 |  105644 |
| green-alt         | #80d200 |  194546 |  197894 |  171840 |  174524 |  219273 |  212104 |
| green-alt-other   | #00cd68 |   75106 |   74489 |  102017 |   99701 |   70103 |   65480 |
| magenta           | #feacd0 |  117256 |  123303 |   53869 |   59090 |  169026 |  168037 |
| magenta-alt       | #f78fe7 |  109400 |  114975 |   47387 |   51382 |  162374 |  162196 |
| magenta-alt-other | #b6a0ff |   45889 |   49624 |    9986 |   12089 |   81840 |   82136 |
#+TBLFM: $3='(color-distance $2 @1$3) :: $4='(color-distance $2 @1$4) :: $5='(color-distance $2 @1$5) :: $6='(color-distance $2 @1$6) :: $7='(color-distance $2 @1$7) :: $8='(color-distance $2 @1$8)

* Colour distance of the blues between themselves

Here we compare the blue colours between them.  The first table shows
the new values, while the second holds the old ones.  The order for
columns and rows is =blue=, =blue-alt=, =blue-alt-other=.

For Modus Operandi, this proves that by correcting =blue-alt= and slightly
tweaking =blue= and =blue-alt-other= we are able to make these colours more
distinct, which is good when they are combined in various contexts (blue
is one of the dominant foreground colours in the themes).

#+NAME: Modus Operandi new blues between them (blue, blue-alt, blue-alt-other)
|---------+---------+---------+---------|
|         | #0031a9 | #2544bb | #0000c0 |
|---------+---------+---------+---------|
| #0031a9 |       0 |    5270 |   11278 |
| #2544bb |    5270 |       0 |   21574 |
| #0000c0 |   11278 |   21574 |       0 |
#+TBLFM: $2='(color-distance $1 @1$2) :: $3='(color-distance $1 @1$3) :: $4='(color-distance $1 @1$4)

#+NAME: Modus Operandi old blues between them (blue, blue-alt, blue-alt-other)
|---------+---------+---------+---------|
|         | #0030a6 | #223fbf | #0000bb |
|---------+---------+---------+---------|
| #0030a6 |       0 |    5162 |   10621 |
| #223fbf |    5162 |       0 |   18455 |
| #0000bb |   10621 |   18455 |       0 |
#+TBLFM: $2='(color-distance $1 @1$2) :: $3='(color-distance $1 @1$3) :: $4='(color-distance $1 @1$4)

Same principle for Modus Vivendi, where we increased the luminance of
=blue= and =blue-alt= while reducing it for =blue-alt-other=.

#+NAME: Modus Vivendi new blues between them (blue, blue-alt, blue-alt-other)
|---------+---------+---------+---------|
|         | #2fafff | #79a8ff | #00bcff |
|---------+---------+---------+---------|
| #2fafff |       0 |   13053 |    5339 |
| #79a8ff |   13053 |       0 |   34624 |
| #00bcff |    5339 |   34624 |       0 |
#+TBLFM: $2='(color-distance $1 @1$2) :: $3='(color-distance $1 @1$3) :: $4='(color-distance $1 @1$4)

#+NAME: Modus Vivendi old blues between them (blue, blue-alt, blue-alt-other)
|---------+---------+---------+---------|
|         | #29aeff | #72a4ff | #00bdfa |
|---------+---------+---------+---------|
| #29aeff |       0 |   12776 |    4505 |
| #72a4ff |   12776 |       0 |   31712 |
| #00bdfa |    4505 |   31712 |       0 |
#+TBLFM: $2='(color-distance $1 @1$2) :: $3='(color-distance $1 @1$3) :: $4='(color-distance $1 @1$4)

* ANNEX: Tools for measuring relative luminance and previewing colours

This is the implementation of the WCAG formula.

#+begin_src emacs-lisp
;; Code is courtesy of Omar Antolín Camarena:
;; https://github.com/oantolin/emacs-config
(defun wcag (hex)
  (apply #'+
         (cl-mapcar
          (lambda (k x)
            (* k (if (<= x 0.03928)
                     (/ x 12.92)
                   (expt (/ (+ x 0.055) 1.055) 2.4))))
          '(0.2126 0.7152 0.0722)
          (color-name-to-rgb hex))))

(defun clr (c1 c2)
  (let ((ct (/ (+ (wcag c1) 0.05)
               (+ (wcag c2) 0.05))))
    (max ct (/ ct))))
#+end_src

Use =rainbow-mode= to preview the colour values presented herein.

#+begin_src emacs-lisp
(use-package rainbow-mode
  :ensure
  :commands rainbow-mode
  :config
  (setq rainbow-ansi-colors nil)
  (setq rainbow-x-colors nil))
#+end_src

The =color-distance= function is built into Emacs.
```
