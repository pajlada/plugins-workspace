---
"store": patch
---

Add a setting `auto_save` to enable a store to debounce save on modification (on calls like set, clear, delete, reset)

**Breaking change**: Removed the `with_store` API and added `StoreExt::store_builder`.
