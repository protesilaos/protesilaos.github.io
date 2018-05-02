{% assign themes = site.data.themes %}

{% for theme in themes %}
{% if page.permalink contains theme.url %}

All Prot16 themes (including {{ theme.name }}) are bundled together as a plugin for Vim. To install them, use your favourite plugin manager. With [vim-plug](https://github.com/junegunn/vim-plug):

```vim
Plug 'protesilaos/prot16-vim'
```

Then specify your choice in `.vimrc`. Use either the light or dark variant:

```vim
" the light variant
colorscheme {{ theme.url }}_light

" or the dark variant
colorscheme {{ theme.url }}_dark
```

{% endif %}
{% endfor %}
