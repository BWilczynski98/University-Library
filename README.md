![University-Library](https://socialify.git.ci/BWilczynski98/University-Library/image?description=1&descriptionEditable=Library%20management%20system&font=Jost&name=1&pattern=Plus&theme=Auto)

A university library management application consisting of a backend created in Python using FastAPI and a frontend based on Next.js.

## Table of contents

- [Requirements](#requirements)
- [Installing and running Backend](#installing-and-running-Backend)
- [Installing and running frontend](#installing-and-running-frontend)

# Requirements

- Python 3.8 or later
- Node.js 14.0 or later
- Yarn (preferred for managing Node.js packages)

## Installing and running Backend

1. Navigate to the root directory of the project:

```bash
 cd university-library
```

2. Create and activate a virtual environment:

_Unix/macOS_

```bash
python3 -m venv env
source env/bin/activate
```

_Windows_

```bash
python -m venv env
.\env\Scripts\activate
```

3. Install the dependencies from the `requirements.txt` file:

```bash
pip install -r backend/requirements.txt
```

4. Start the FastAPI server:

```bash
uvicorn backend.main:app --reload
```

## Installing and running frontend

1. Go to the `frontend` directory:

```bash
cd frontend
```

2. Install the dependencies:

```bash
yarn install
```

3. Start the Next.js development server:

```bash
yarn run dev
```
