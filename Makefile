
show-slides:
	cd slides && npm install
	cd slides && npm run dev &
	open http://localhost:3456

run-linux-monitoring:
	cd linux && docker compose up --build -d

run-mongodb-monitoring:
	cd mongodb && docker compose up --build -d

run-app-monitoring:
	cd app-monitoring && docker compose up --build -d

show-linux-slides:
	npm --prefix slides install
	npm --prefix slides run dev &
	cd linux && docker compose up --build -d
	open http://localhost:3456/linux

show-mongodb-slides:
	npm install
	npm run dev &
	cd mongodb && docker compose up --build -d
	open http://localhost:3456/mongodb

show-app-slides:
	npm install
	npm run dev
	cd app-monitoring && docker compose up --build -d
	open http://localhost:3456/app

stop-all:
	cd linux && docker compose down
	cd mongodb && docker compose down
	cd app-monitoring && docker compose down

help:
	@echo "Usage: make <target>"
	@echo "Targets:"
	@echo "  run-linux-monitoring    -- Build and run linux monitoring stack"
	@echo "  run-mongodb-monitoring  -- Build and run mongodb monitoring stack"
	@echo "  run-app-monitoring      -- Build and run app monitoring stack"
	@echo "  show-slides             -- Run npm install and npm run dev in slides folder"
	@echo "  show-linux-slides       -- Run linux monitoring stack and slides"
	@echo "  show-mongodb-slides     -- Run mongodb monitoring stack and slides"
	@echo "  show-app-slides         -- Run app monitoring stack and slides"
	@echo "  help                    -- Show this help message"