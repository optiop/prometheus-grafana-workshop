slides:
	npm install
	npm run dev

linux-monitoring:
	cd ../linux && docker compose up --build -d

mongodb-monitoring:
	cd ../mongodb && docker compose up --build -d

app-monitoring:
	cd ../app-monitoring && docker compose up --build -d

linux-slides:
	npm install
	npm run dev &
	cd ../linux && docker compose up --build -d

mongodb-slides:
	npm install
	npm run dev &
	cd ../mongodb && docker compose up --build -d

app-slides:
	npm install
	npm run dev
	cd ../app-monitoring && docker compose up --build -d

help:
	@echo "make slides"
	@echo "make linux-monitoring"
	@echo "make mongodb-monitoring"
	@echo "make app-monitoring"
	@echo "make linux-slides"
	@echo "make mongodb-slides"
	@echo "make app-slides"
	@echo "make help"