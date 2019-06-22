# jasanoff-lab

This github repository contains the Jasanoff Lab website.

## Editing content

Site content is in the `_data/` directory. In this directory, there is one `json` file per page of the site. For more information about the `json` format, see [this resource](https://www.digitalocean.com/community/tutorials/an-introduction-to-json) or search for more examples online.

Find the `json` file corresponding to the page you want to edit. For example, `about.json`. Edit this file to edit the text that will appear on the website.

1. In the directory structure, at the top of the page, click on `_data`
2. Click on the `json` file
3. Click the pencil in the top right of the file preview to edit.
4. When finished editing, scroll to the bottom and click "commit changes"

### Putting links in content

To put a link in content, you can put an HTML `<a>` tag into your text. For example:
```
{
...
  "body": "Our laboratory is developing <a href=\"www.example.com\">unprecedented technology</a> for molecular-level imaging in the nervous system."
...
}
```

Please note the `\"` backslash before the quotes. This is slightly different from normal HTML, but is necessary in `json` files.

## Making backups

Github will automatically keep a history of changes to each file. To view previous versions of a file, go to that file and click "History" in the top right of the file preview.

To make a manual backup, click the green "Clone or download" button at the top right of the file explorer above. Then click "Download ZIP" to download a zip file containing all of the website files including content.
