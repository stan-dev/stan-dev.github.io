"""
Make it so that the top-level searching for the website includes the Stan
documentation stubs as well
"""

import pathlib
import argparse
import json

import requests


DOCS_JSON_URL = "https://mc-stan.org/docs/search.json"

arguments = argparse.ArgumentParser()
arguments.add_argument(
    "--output_dir", type=pathlib.Path, default=pathlib.Path(__file__).parent
)

args = arguments.parse_args()

out = args.output_dir

search = out / "search.json"

search_data = json.loads(search.read_text())

docs_search = json.loads(requests.get(DOCS_JSON_URL).text)

for item in docs_search:
    # need to add the /docs/ prefix to the objectID and href
    objectID = item["objectID"]
    href = item["href"]
    item |= {
        "objectID": f"docs/{objectID}",
        "href": f"docs/{href}",
    }

    search_data.append(item)

search.write_text(json.dumps(search_data, indent=2))
