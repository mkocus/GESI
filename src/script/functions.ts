/**
 * List all active player alliances
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return List of Alliance IDs
 * @customfunction
 */
function alliances(opt_headers: boolean): any[][] {
  return parseData_('alliances',{opt_headers:opt_headers})
}

/**
 * Return custom labels for an alliance's contacts
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of alliance contact labels
 * @customfunction
 */
function alliances_alliance_contacts_labels(name: string, opt_headers: boolean): any[][] {
  return parseData_('alliances_alliance_contacts_labels',{name:name,opt_headers:opt_headers})
}

/**
 * List all current member corporations of an alliance
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return List of corporation IDs
 * @customfunction
 */
function alliances_alliance_corporations(opt_headers: boolean): any[][] {
  return parseData_('alliances_alliance_corporations',{opt_headers:opt_headers})
}

/**
 * Get the icon urls for a alliance
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return Icon URLs for the given alliance id and server
 * @customfunction
 */
function alliances_alliance_icons(opt_headers: boolean): any[][] {
  return parseData_('alliances_alliance_icons',{opt_headers:opt_headers})
}

/**
 * Bulk lookup of character IDs to corporation, alliance and faction
 * @param {number[]} characters (Required) The character IDs to fetch affiliations for. All characters must exist, or none will be returned
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return Character corporation, alliance and faction IDs
 * @customfunction
 */
function characters_affiliation(characters: number[], opt_headers: boolean): any[][] {
  if(!characters) throw 'characters is required';
  return parseData_('characters_affiliation',{characters:characters,opt_headers:opt_headers})
}

/**
 * Return a list of agents research information for a character. The formula for finding the current research points with an agent is: currentPoints = remainderPoints + pointsPerDay * days(currentTime 
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of agents research information
 * @customfunction
 */
function characters_character_agents_research(name: string, opt_headers: boolean): any[][] {
  return parseData_('characters_character_agents_research',{name:name,opt_headers:opt_headers})
}

/**
 * Return names for a set of item ids, which you can get from character assets endpoint. Typically used for items that can customize names, like containers or ships.
 * @param {number[]} item_ids (Required) A list of item ids
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return List of asset names
 * @customfunction
 */
function characters_character_assets_names(item_ids: number[], name: string, opt_headers: boolean): any[][] {
  if(!item_ids) throw 'item_ids is required';
  return parseData_('characters_character_assets_names',{item_ids:item_ids,name:name,opt_headers:opt_headers})
}

/**
 * Return attributes of a character
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return Attributes of a character
 * @customfunction
 */
function characters_character_attributes(name: string, opt_headers: boolean): any[][] {
  return parseData_('characters_character_attributes',{name:name,opt_headers:opt_headers})
}

/**
 * Get 50 event summaries from the calendar. If no from_event ID is given, the resource will return the next 50 chronological event summaries from now. If a from_event ID is specified, it will return the next 50 chronological event summaries from after that event
 * @param {number} from_event  The event ID to retrieve events from
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A collection of event summaries
 * @customfunction
 */
function characters_character_calendar(from_event: number, name: string, opt_headers: boolean): any[][] {
  return parseData_('characters_character_calendar',{from_event:from_event,name:name,opt_headers:opt_headers})
}

/**
 * Get all invited attendees for a given event
 * @param {number} event_id (Required) The id of the event requested
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return List of attendees
 * @customfunction
 */
function characters_character_calendar_event_attendees(event_id: number, name: string, opt_headers: boolean): any[][] {
  if(!event_id) throw 'event_id is required';
  return parseData_('characters_character_calendar_event_attendees',{event_id:event_id,name:name,opt_headers:opt_headers})
}

/**
 * Return custom labels for a character's contacts
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of contact labels
 * @customfunction
 */
function characters_character_contacts_labels(name: string, opt_headers: boolean): any[][] {
  return parseData_('characters_character_contacts_labels',{name:name,opt_headers:opt_headers})
}

/**
 * Returns contracts available to a character, only if the character is issuer, acceptor or assignee. Only returns contracts no older than 30 days, or if the status is "in_progress".
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {number} page  Which page of results to return
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of contracts
 * @customfunction
 */
function characters_character_contracts(name: string, page: number, opt_headers: boolean): any[][] {
  return parseData_('characters_character_contracts',{name:name,page:page,opt_headers:opt_headers})
}

/**
 * Lists bids on a particular auction contract
 * @param {number} contract_id (Required) ID of a contract
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of bids
 * @customfunction
 */
function characters_character_contracts_contract_bids(contract_id: number, name: string, opt_headers: boolean): any[][] {
  if(!contract_id) throw 'contract_id is required';
  return parseData_('characters_character_contracts_contract_bids',{contract_id:contract_id,name:name,opt_headers:opt_headers})
}

/**
 * Lists items of a particular contract
 * @param {number} contract_id (Required) ID of a contract
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of items in this contract
 * @customfunction
 */
function characters_character_contracts_contract_items(contract_id: number, name: string, opt_headers: boolean): any[][] {
  if(!contract_id) throw 'contract_id is required';
  return parseData_('characters_character_contracts_contract_items',{contract_id:contract_id,name:name,opt_headers:opt_headers})
}

/**
 * Get a list of all the corporations a character has been a member of
 * @param {number} character_id (Required) An EVE character ID
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return Corporation history for the given character
 * @customfunction
 */
function characters_character_corporationhistory(character_id: number, opt_headers: boolean): any[][] {
  if(!character_id) throw 'character_id is required';
  return parseData_('characters_character_corporationhistory',{character_id:character_id,opt_headers:opt_headers})
}

/**
 * Return a character's jump activation and fatigue information
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return Jump activation and fatigue information
 * @customfunction
 */
function characters_character_fatigue(name: string, opt_headers: boolean): any[][] {
  return parseData_('characters_character_fatigue',{name:name,opt_headers:opt_headers})
}

/**
 * Return fittings of a character
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of fittings
 * @customfunction
 */
function characters_character_fittings(name: string, opt_headers: boolean): any[][] {
  return parseData_('characters_character_fittings',{name:name,opt_headers:opt_headers})
}

/**
 * Return the fleet ID the character is in, if any.
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return Details about the character's fleet
 * @customfunction
 */
function characters_character_fleet(name: string, opt_headers: boolean): any[][] {
  return parseData_('characters_character_fleet',{name:name,opt_headers:opt_headers})
}

/**
 * Statistical overview of a character involved in faction warfare
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return Faction warfare statistics for a given character
 * @customfunction
 */
function characters_character_fw_stats(name: string, opt_headers: boolean): any[][] {
  return parseData_('characters_character_fw_stats',{name:name,opt_headers:opt_headers})
}

/**
 * Return implants on the active clone of a character
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of implant type ids
 * @customfunction
 */
function characters_character_implants(name: string, opt_headers: boolean): any[][] {
  return parseData_('characters_character_implants',{name:name,opt_headers:opt_headers})
}

/**
 * List industry jobs placed by a character
 * @param {boolean} include_completed  Whether to retrieve completed character industry jobs. Only includes jobs from the past 90 days
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return Industry jobs placed by a character
 * @customfunction
 */
function characters_character_industry_jobs(include_completed: boolean, name: string, opt_headers: boolean): any[][] {
  return parseData_('characters_character_industry_jobs',{include_completed:include_completed,name:name,opt_headers:opt_headers})
}

/**
 * Return a list of a character's kills and losses going back 90 days
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {number} page  Which page of results to return
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of killmail IDs and hashes
 * @customfunction
 */
function characters_character_killmails_recent(name: string, page: number, opt_headers: boolean): any[][] {
  return parseData_('characters_character_killmails_recent',{name:name,page:page,opt_headers:opt_headers})
}

/**
 * Information about the characters current location. Returns the current solar system id, and also the current station or structure ID if applicable
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return Information about the characters current location. Returns the current solar system id, and also the current station or structure ID if applicable
 * @customfunction
 */
function characters_character_location(name: string, opt_headers: boolean): any[][] {
  return parseData_('characters_character_location',{name:name,opt_headers:opt_headers})
}

/**
 * Return a list of loyalty points for all corporations the character has worked for
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of loyalty points
 * @customfunction
 */
function characters_character_loyalty_points(name: string, opt_headers: boolean): any[][] {
  return parseData_('characters_character_loyalty_points',{name:name,opt_headers:opt_headers})
}

/**
 * Return the 50 most recent mail headers belonging to the character that match the query criteria. Queries can be filtered by label, and last_mail_id can be used to paginate backwards
 * @param {number[]} labels  Fetch only mails that match one or more of the given labels
 * @param {number} last_mail_id  List only mail with an ID lower than the given ID, if present
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return The requested mail
 * @customfunction
 */
function characters_character_mail(labels: number[], last_mail_id: number, name: string, opt_headers: boolean): any[][] {
  return parseData_('characters_character_mail',{labels:labels,last_mail_id:last_mail_id,name:name,opt_headers:opt_headers})
}

/**
 * Return all mailing lists that the character is subscribed to
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return Mailing lists
 * @customfunction
 */
function characters_character_mail_lists(name: string, opt_headers: boolean): any[][] {
  return parseData_('characters_character_mail_lists',{name:name,opt_headers:opt_headers})
}

/**
 * Return the contents of an EVE mail
 * @param {number} mail_id (Required) An EVE mail ID
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return Contents of a mail
 * @customfunction
 */
function characters_character_mail_mail(mail_id: number, name: string, opt_headers: boolean): any[][] {
  if(!mail_id) throw 'mail_id is required';
  return parseData_('characters_character_mail_mail',{mail_id:mail_id,name:name,opt_headers:opt_headers})
}

/**
 * Return a list of medals the character has
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of medals
 * @customfunction
 */
function characters_character_medals(name: string, opt_headers: boolean): any[][] {
  return parseData_('characters_character_medals',{name:name,opt_headers:opt_headers})
}

/**
 * Paginated record of all mining done by a character for the past 30 days
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {number} page  Which page of results to return
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return Mining ledger of a character
 * @customfunction
 */
function characters_character_mining(name: string, page: number, opt_headers: boolean): any[][] {
  return parseData_('characters_character_mining',{name:name,page:page,opt_headers:opt_headers})
}

/**
 * Return notifications about having been added to someone's contact list
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of contact notifications
 * @customfunction
 */
function characters_character_notifications_contacts(name: string, opt_headers: boolean): any[][] {
  return parseData_('characters_character_notifications_contacts',{name:name,opt_headers:opt_headers})
}

/**
 * Return a list of tasks finished by a character
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of opportunities task ids
 * @customfunction
 */
function characters_character_opportunities(name: string, opt_headers: boolean): any[][] {
  return parseData_('characters_character_opportunities',{name:name,opt_headers:opt_headers})
}

/**
 * List cancelled and expired market orders placed by a character up to 90 days in the past.
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {number} page  Which page of results to return
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return Expired and cancelled market orders placed by a character
 * @customfunction
 */
function characters_character_orders_history(name: string, page: number, opt_headers: boolean): any[][] {
  return parseData_('characters_character_orders_history',{name:name,page:page,opt_headers:opt_headers})
}

/**
 * Returns a list of all planetary colonies owned by a character.
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return List of colonies
 * @customfunction
 */
function characters_character_planets(name: string, opt_headers: boolean): any[][] {
  return parseData_('characters_character_planets',{name:name,opt_headers:opt_headers})
}

/**
 * Get the current ship type, name and id
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return Get the current ship type, name and id
 * @customfunction
 */
function characters_character_ship(name: string, opt_headers: boolean): any[][] {
  return parseData_('characters_character_ship',{name:name,opt_headers:opt_headers})
}

/**
 * Return character standings from agents, NPC corporations, and factions
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of standings
 * @customfunction
 */
function characters_character_standings(name: string, opt_headers: boolean): any[][] {
  return parseData_('characters_character_standings',{name:name,opt_headers:opt_headers})
}

/**
 * Returns a character's titles
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of titles
 * @customfunction
 */
function characters_character_titles(name: string, opt_headers: boolean): any[][] {
  return parseData_('characters_character_titles',{name:name,opt_headers:opt_headers})
}

/**
 * Returns a character's wallet balance
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return Wallet balance
 * @customfunction
 */
function characters_character_wallet(name: string, opt_headers: boolean): any[][] {
  return parseData_('characters_character_wallet',{name:name,opt_headers:opt_headers})
}

/**
 * Get wallet transactions of a character
 * @param {number} from_id  Only show transactions happened before the one referenced by this id
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return Wallet transactions
 * @customfunction
 */
function characters_character_wallet_transactions(from_id: number, name: string, opt_headers: boolean): any[][] {
  return parseData_('characters_character_wallet_transactions',{from_id:from_id,name:name,opt_headers:opt_headers})
}

/**
 * Lists bids on a public auction contract
 * @param {number} contract_id (Required) ID of a contract
 * @param {number} page  Which page of results to return
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of bids
 * @customfunction
 */
function contracts_public_bids_contract(contract_id: number, page: number, opt_headers: boolean): any[][] {
  if(!contract_id) throw 'contract_id is required';
  return parseData_('contracts_public_bids_contract',{contract_id:contract_id,page:page,opt_headers:opt_headers})
}

/**
 * Lists items of a public contract
 * @param {number} contract_id (Required) ID of a contract
 * @param {number} page  Which page of results to return
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of items in this contract
 * @customfunction
 */
function contracts_public_items_contract(contract_id: number, page: number, opt_headers: boolean): any[][] {
  if(!contract_id) throw 'contract_id is required';
  return parseData_('contracts_public_items_contract',{contract_id:contract_id,page:page,opt_headers:opt_headers})
}

/**
 * Returns a paginated list of all public contracts in the given region
 * @param {number} region_id (Required) An EVE region id
 * @param {number} page  Which page of results to return
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of contracts
 * @customfunction
 */
function contracts_public_region(region_id: number, page: number, opt_headers: boolean): any[][] {
  if(!region_id) throw 'region_id is required';
  return parseData_('contracts_public_region',{region_id:region_id,page:page,opt_headers:opt_headers})
}

/**
 * Extraction timers for all moon chunks being extracted by refineries belonging to a corporation.
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {number} page  Which page of results to return
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of chunk timers
 * @customfunction
 */
function corporation_corporation_mining_extractions(name: string, page: number, opt_headers: boolean): any[][] {
  return parseData_('corporation_corporation_mining_extractions',{name:name,page:page,opt_headers:opt_headers})
}

/**
 * Paginated list of all entities capable of observing and recording mining for a corporation
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {number} page  Which page of results to return
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return Observer list of a corporation
 * @customfunction
 */
function corporation_corporation_mining_observers(name: string, page: number, opt_headers: boolean): any[][] {
  return parseData_('corporation_corporation_mining_observers',{name:name,page:page,opt_headers:opt_headers})
}

/**
 * Paginated record of all mining seen by an observer
 * @param {number} observer_id (Required) A mining observer id
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {number} page  Which page of results to return
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return Mining ledger of an observer
 * @customfunction
 */
function corporation_corporation_mining_observers_observer(observer_id: number, name: string, page: number, opt_headers: boolean): any[][] {
  if(!observer_id) throw 'observer_id is required';
  return parseData_('corporation_corporation_mining_observers_observer',{observer_id:observer_id,name:name,page:page,opt_headers:opt_headers})
}

/**
 * Get a list of npc corporations
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of npc corporation ids
 * @customfunction
 */
function corporations_npccorps(opt_headers: boolean): any[][] {
  return parseData_('corporations_npccorps',{opt_headers:opt_headers})
}

/**
 * Return names for a set of item ids, which you can get from corporation assets endpoint. Only valid for items that can customize names, like containers or ships
 * @param {number[]} item_ids (Required) A list of item ids
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return List of asset names
 * @customfunction
 */
function corporations_corporation_assets_names(item_ids: number[], name: string, opt_headers: boolean): any[][] {
  if(!item_ids) throw 'item_ids is required';
  return parseData_('corporations_corporation_assets_names',{item_ids:item_ids,name:name,opt_headers:opt_headers})
}

/**
 * A list of your corporation's bookmarks
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {number} page  Which page of results to return
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return List of corporation owned bookmarks
 * @customfunction
 */
function corporations_corporation_bookmarks(name: string, page: number, opt_headers: boolean): any[][] {
  return parseData_('corporations_corporation_bookmarks',{name:name,page:page,opt_headers:opt_headers})
}

/**
 * A list of your corporation's bookmark folders
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {number} page  Which page of results to return
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return List of corporation owned bookmark folders
 * @customfunction
 */
function corporations_corporation_bookmarks_folders(name: string, page: number, opt_headers: boolean): any[][] {
  return parseData_('corporations_corporation_bookmarks_folders',{name:name,page:page,opt_headers:opt_headers})
}

/**
 * Return custom labels for a corporation's contacts
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of corporation contact labels
 * @customfunction
 */
function corporations_corporation_contacts_labels(name: string, opt_headers: boolean): any[][] {
  return parseData_('corporations_corporation_contacts_labels',{name:name,opt_headers:opt_headers})
}

/**
 * Returns contracts available to a corporation, only if the corporation is issuer, acceptor or assignee. Only returns contracts no older than 30 days, or if the status is "in_progress".
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {number} page  Which page of results to return
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of contracts
 * @customfunction
 */
function corporations_corporation_contracts(name: string, page: number, opt_headers: boolean): any[][] {
  return parseData_('corporations_corporation_contracts',{name:name,page:page,opt_headers:opt_headers})
}

/**
 * Lists bids on a particular auction contract
 * @param {number} contract_id (Required) ID of a contract
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {number} page  Which page of results to return
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of bids
 * @customfunction
 */
function corporations_corporation_contracts_contract_bids(contract_id: number, name: string, page: number, opt_headers: boolean): any[][] {
  if(!contract_id) throw 'contract_id is required';
  return parseData_('corporations_corporation_contracts_contract_bids',{contract_id:contract_id,name:name,page:page,opt_headers:opt_headers})
}

/**
 * Lists items of a particular contract
 * @param {number} contract_id (Required) ID of a contract
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of items in this contract
 * @customfunction
 */
function corporations_corporation_contracts_contract_items(contract_id: number, name: string, opt_headers: boolean): any[][] {
  if(!contract_id) throw 'contract_id is required';
  return parseData_('corporations_corporation_contracts_contract_items',{contract_id:contract_id,name:name,opt_headers:opt_headers})
}

/**
 * List customs offices owned by a corporation
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {number} page  Which page of results to return
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of customs offices and their settings
 * @customfunction
 */
function corporations_corporation_customs_offices(name: string, page: number, opt_headers: boolean): any[][] {
  return parseData_('corporations_corporation_customs_offices',{name:name,page:page,opt_headers:opt_headers})
}

/**
 * Return corporation hangar and wallet division names, only show if a division is not using the default name
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return List of corporation division names
 * @customfunction
 */
function corporations_corporation_divisions(name: string, opt_headers: boolean): any[][] {
  return parseData_('corporations_corporation_divisions',{name:name,opt_headers:opt_headers})
}

/**
 * Return a corporation's facilities
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return List of corporation facilities
 * @customfunction
 */
function corporations_corporation_facilities(name: string, opt_headers: boolean): any[][] {
  return parseData_('corporations_corporation_facilities',{name:name,opt_headers:opt_headers})
}

/**
 * Statistics about a corporation involved in faction warfare
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return Faction warfare statistics for a given corporation
 * @customfunction
 */
function corporations_corporation_fw_stats(name: string, opt_headers: boolean): any[][] {
  return parseData_('corporations_corporation_fw_stats',{name:name,opt_headers:opt_headers})
}

/**
 * Get the icon urls for a corporation
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return Urls for icons for the given corporation id and server
 * @customfunction
 */
function corporations_corporation_icons(opt_headers: boolean): any[][] {
  return parseData_('corporations_corporation_icons',{opt_headers:opt_headers})
}

/**
 * List industry jobs run by a corporation
 * @param {boolean} include_completed  Whether to retrieve completed corporation industry jobs. Only includes jobs from the past 90 days
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {number} page  Which page of results to return
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of corporation industry jobs
 * @customfunction
 */
function corporations_corporation_industry_jobs(include_completed: boolean, name: string, page: number, opt_headers: boolean): any[][] {
  return parseData_('corporations_corporation_industry_jobs',{include_completed:include_completed,name:name,page:page,opt_headers:opt_headers})
}

/**
 * Get a list of a corporation's kills and losses going back 90 days
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {number} page  Which page of results to return
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of killmail IDs and hashes
 * @customfunction
 */
function corporations_corporation_killmails_recent(name: string, page: number, opt_headers: boolean): any[][] {
  return parseData_('corporations_corporation_killmails_recent',{name:name,page:page,opt_headers:opt_headers})
}

/**
 * Returns a corporation's medals
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {number} page  Which page of results to return
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of medals
 * @customfunction
 */
function corporations_corporation_medals(name: string, page: number, opt_headers: boolean): any[][] {
  return parseData_('corporations_corporation_medals',{name:name,page:page,opt_headers:opt_headers})
}

/**
 * Returns medals issued by a corporation
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {number} page  Which page of results to return
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of issued medals
 * @customfunction
 */
function corporations_corporation_medals_issued(name: string, page: number, opt_headers: boolean): any[][] {
  return parseData_('corporations_corporation_medals_issued',{name:name,page:page,opt_headers:opt_headers})
}

/**
 * Return a corporation's member limit, not including CEO himself
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return The corporation's member limit
 * @customfunction
 */
function corporations_corporation_members_limit(name: string, opt_headers: boolean): any[][] {
  return parseData_('corporations_corporation_members_limit',{name:name,opt_headers:opt_headers})
}

/**
 * Returns a corporation's members' titles
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of members and theirs titles
 * @customfunction
 */
function corporations_corporation_members_titles(name: string, opt_headers: boolean): any[][] {
  return parseData_('corporations_corporation_members_titles',{name:name,opt_headers:opt_headers})
}

/**
 * Returns additional information about a corporation's members which helps tracking their activities
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return List of member character IDs
 * @customfunction
 */
function corporations_corporation_membertracking(name: string, opt_headers: boolean): any[][] {
  return parseData_('corporations_corporation_membertracking',{name:name,opt_headers:opt_headers})
}

/**
 * Return the roles of all members if the character has the personnel manager role or any grantable role.
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return List of member character ID's and roles
 * @customfunction
 */
function corporations_corporation_roles(name: string, opt_headers: boolean): any[][] {
  return parseData_('corporations_corporation_roles',{name:name,opt_headers:opt_headers})
}

/**
 * Return how roles have changed for a coporation's members, up to a month
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {number} page  Which page of results to return
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return List of role changes
 * @customfunction
 */
function corporations_corporation_roles_history(name: string, page: number, opt_headers: boolean): any[][] {
  return parseData_('corporations_corporation_roles_history',{name:name,page:page,opt_headers:opt_headers})
}

/**
 * Return the current shareholders of a corporation.
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {number} page  Which page of results to return
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return List of shareholders
 * @customfunction
 */
function corporations_corporation_shareholders(name: string, page: number, opt_headers: boolean): any[][] {
  return parseData_('corporations_corporation_shareholders',{name:name,page:page,opt_headers:opt_headers})
}

/**
 * Return corporation standings from agents, NPC corporations, and factions
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {number} page  Which page of results to return
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of standings
 * @customfunction
 */
function corporations_corporation_standings(name: string, page: number, opt_headers: boolean): any[][] {
  return parseData_('corporations_corporation_standings',{name:name,page:page,opt_headers:opt_headers})
}

/**
 * Returns list of corporation starbases (POSes)
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {number} page  Which page of results to return
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return List of starbases (POSes)
 * @customfunction
 */
function corporations_corporation_starbases(name: string, page: number, opt_headers: boolean): any[][] {
  return parseData_('corporations_corporation_starbases',{name:name,page:page,opt_headers:opt_headers})
}

/**
 * Returns various settings and fuels of a starbase (POS)
 * @param {number} starbase_id (Required) An EVE starbase (POS) ID
 * @param {number} system_id (Required) The solar system this starbase (POS) is located in,
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return List of starbases (POSes)
 * @customfunction
 */
function corporations_corporation_starbases_starbase(starbase_id: number, system_id: number, name: string, opt_headers: boolean): any[][] {
  if(!starbase_id) throw 'starbase_id is required';
  if(!system_id) throw 'system_id is required';
  return parseData_('corporations_corporation_starbases_starbase',{starbase_id:starbase_id,system_id:system_id,name:name,opt_headers:opt_headers})
}

/**
 * Returns a corporation's titles
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of titles
 * @customfunction
 */
function corporations_corporation_titles(name: string, opt_headers: boolean): any[][] {
  return parseData_('corporations_corporation_titles',{name:name,opt_headers:opt_headers})
}

/**
 * Get a corporation's wallets
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return List of corporation wallets
 * @customfunction
 */
function corporations_corporation_wallets(name: string, opt_headers: boolean): any[][] {
  return parseData_('corporations_corporation_wallets',{name:name,opt_headers:opt_headers})
}

/**
 * Get wallet transactions of a corporation
 * @param {number} division (Required) Wallet key of the division to fetch journals from
 * @param {number} from_id  Only show journal entries happened before the transaction referenced by this id
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return Wallet transactions
 * @customfunction
 */
function corporations_corporation_wallets_division_transactions(division: number, from_id: number, name: string, opt_headers: boolean): any[][] {
  if(!division) throw 'division is required';
  return parseData_('corporations_corporation_wallets_division_transactions',{division:division,from_id:from_id,name:name,opt_headers:opt_headers})
}

/**
 * Get a list of dogma attribute ids
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of dogma attribute ids
 * @customfunction
 */
function dogma_attributes(opt_headers: boolean): any[][] {
  return parseData_('dogma_attributes',{opt_headers:opt_headers})
}

/**
 * Get information on a dogma attribute
 * @param {number} attribute_id (Required) A dogma attribute ID
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return Information about a dogma attribute
 * @customfunction
 */
function dogma_attributes_attribute(attribute_id: number, opt_headers: boolean): any[][] {
  if(!attribute_id) throw 'attribute_id is required';
  return parseData_('dogma_attributes_attribute',{attribute_id:attribute_id,opt_headers:opt_headers})
}

/**
 * Returns info about a dynamic item resulting from mutation with a mutaplasmid.
 * @param {number} item_id (Required) item_id integer
 * @param {number} type_id (Required) type_id integer
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return Details about a dynamic item
 * @customfunction
 */
function dogma_dynamic_items_type_item(item_id: number, type_id: number, opt_headers: boolean): any[][] {
  if(!item_id) throw 'item_id is required';
  if(!type_id) throw 'type_id is required';
  return parseData_('dogma_dynamic_items_type_item',{item_id:item_id,type_id:type_id,opt_headers:opt_headers})
}

/**
 * Get a list of dogma effect ids
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of dogma effect ids
 * @customfunction
 */
function dogma_effects(opt_headers: boolean): any[][] {
  return parseData_('dogma_effects',{opt_headers:opt_headers})
}

/**
 * Return details about a fleet
 * @param {number} fleet_id (Required) ID for a fleet
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return Details about a fleet
 * @customfunction
 */
function fleets_fleet(fleet_id: number, name: string, opt_headers: boolean): any[][] {
  if(!fleet_id) throw 'fleet_id is required';
  return parseData_('fleets_fleet',{fleet_id:fleet_id,name:name,opt_headers:opt_headers})
}

/**
 * Return information about fleet members
 * @param {number} fleet_id (Required) ID for a fleet
 * @param {string} language  Language to use in the response, takes precedence over Accept-Language
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of fleet members
 * @customfunction
 */
function fleets_fleet_members(fleet_id: number, language: string, name: string, opt_headers: boolean): any[][] {
  if(!fleet_id) throw 'fleet_id is required';
  return parseData_('fleets_fleet_members',{fleet_id:fleet_id,language:language,name:name,opt_headers:opt_headers})
}

/**
 * Return information about wings in a fleet
 * @param {number} fleet_id (Required) ID for a fleet
 * @param {string} language  Language to use in the response, takes precedence over Accept-Language
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of fleet wings
 * @customfunction
 */
function fleets_fleet_wings(fleet_id: number, language: string, name: string, opt_headers: boolean): any[][] {
  if(!fleet_id) throw 'fleet_id is required';
  return parseData_('fleets_fleet_wings',{fleet_id:fleet_id,language:language,name:name,opt_headers:opt_headers})
}

/**
 * Top 4 leaderboard of factions for kills and victory points separated by total, last week and yesterday
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return Corporation leaderboard of kills and victory points within faction warfare
 * @customfunction
 */
function fw_leaderboards(opt_headers: boolean): any[][] {
  return parseData_('fw_leaderboards',{opt_headers:opt_headers})
}

/**
 * Top 100 leaderboard of pilots for kills and victory points separated by total, last week and yesterday
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return Character leaderboard of kills and victory points within faction warfare
 * @customfunction
 */
function fw_leaderboards_characters(opt_headers: boolean): any[][] {
  return parseData_('fw_leaderboards_characters',{opt_headers:opt_headers})
}

/**
 * Top 10 leaderboard of corporations for kills and victory points separated by total, last week and yesterday
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return Corporation leaderboard of kills and victory points within faction warfare
 * @customfunction
 */
function fw_leaderboards_corporations(opt_headers: boolean): any[][] {
  return parseData_('fw_leaderboards_corporations',{opt_headers:opt_headers})
}

/**
 * Statistical overviews of factions involved in faction warfare
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return Per faction breakdown of faction warfare statistics
 * @customfunction
 */
function fw_stats(opt_headers: boolean): any[][] {
  return parseData_('fw_stats',{opt_headers:opt_headers})
}

/**
 * Data about which NPC factions are at war
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of NPC factions at war
 * @customfunction
 */
function fw_wars(opt_headers: boolean): any[][] {
  return parseData_('fw_wars',{opt_headers:opt_headers})
}

/**
 * Return a list of current incursions
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of incursions
 * @customfunction
 */
function incursions(opt_headers: boolean): any[][] {
  return parseData_('incursions',{opt_headers:opt_headers})
}

/**
 * Return a list of industry facilities
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of facilities
 * @customfunction
 */
function industry_facilities(opt_headers: boolean): any[][] {
  return parseData_('industry_facilities',{opt_headers:opt_headers})
}

/**
 * Return cost indices for solar systems
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of cost indicies
 * @customfunction
 */
function industry_systems(opt_headers: boolean): any[][] {
  return parseData_('industry_systems',{opt_headers:opt_headers})
}

/**
 * Return available insurance levels for all ship types
 * @param {string} language  Language to use in the response, takes precedence over Accept-Language
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of insurance levels for all ship types
 * @customfunction
 */
function insurance_prices(language: string, opt_headers: boolean): any[][] {
  return parseData_('insurance_prices',{language:language,opt_headers:opt_headers})
}

/**
 * Return a single killmail from its ID and hash
 * @param {string} killmail_hash (Required) The killmail hash for verification
 * @param {number} killmail_id (Required) The killmail ID to be queried
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A killmail
 * @customfunction
 */
function killmails_killmail_killmail_hash(killmail_hash: string, killmail_id: number, opt_headers: boolean): any[][] {
  if(!killmail_hash) throw 'killmail_hash is required';
  if(!killmail_id) throw 'killmail_id is required';
  return parseData_('killmails_killmail_killmail_hash',{killmail_hash:killmail_hash,killmail_id:killmail_id,opt_headers:opt_headers})
}

/**
 * Return a list of offers from a specific corporation's loyalty store
 * @param {number} corporation_id (Required) An EVE corporation ID
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of offers
 * @customfunction
 */
function loyalty_stores_corporation_offers(corporation_id: number, opt_headers: boolean): any[][] {
  if(!corporation_id) throw 'corporation_id is required';
  return parseData_('loyalty_stores_corporation_offers',{corporation_id:corporation_id,opt_headers:opt_headers})
}

/**
 * Get a list of item groups
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of item group ids
 * @customfunction
 */
function markets_groups(opt_headers: boolean): any[][] {
  return parseData_('markets_groups',{opt_headers:opt_headers})
}

/**
 * Get information on an item group
 * @param {number} market_group_id (Required) An Eve item group ID
 * @param {string} language  Language to use in the response, takes precedence over Accept-Language
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return Information about an item group
 * @customfunction
 */
function markets_groups_market_group(market_group_id: number, language: string, opt_headers: boolean): any[][] {
  if(!market_group_id) throw 'market_group_id is required';
  return parseData_('markets_groups_market_group',{market_group_id:market_group_id,language:language,opt_headers:opt_headers})
}

/**
 * Return a list of prices
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of prices
 * @customfunction
 */
function markets_prices(opt_headers: boolean): any[][] {
  return parseData_('markets_prices',{opt_headers:opt_headers})
}

/**
 * Return all orders in a structure
 * @param {number} structure_id (Required) Return orders in this structure
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {number} page  Which page of results to return
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of orders
 * @customfunction
 */
function markets_structures_structure(structure_id: number, name: string, page: number, opt_headers: boolean): any[][] {
  if(!structure_id) throw 'structure_id is required';
  return parseData_('markets_structures_structure',{structure_id:structure_id,name:name,page:page,opt_headers:opt_headers})
}

/**
 * Return a list of historical market statistics for the specified type in a region
 * @param {number} region_id (Required) Return statistics in this region
 * @param {number} type_id (Required) Return statistics for this type
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of historical market statistics
 * @customfunction
 */
function markets_region_history(region_id: number, type_id: number, opt_headers: boolean): any[][] {
  if(!region_id) throw 'region_id is required';
  if(!type_id) throw 'type_id is required';
  return parseData_('markets_region_history',{region_id:region_id,type_id:type_id,opt_headers:opt_headers})
}

/**
 * Return a list of orders in a region
 * @param {string} order_type (Required) Filter buy/sell orders, return all orders by default. If you query without type_id, we always return both buy and sell orders
 * @param {number} region_id (Required) Return orders in this region
 * @param {number} page  Which page of results to return
 * @param {number} type_id  Return orders only for this type
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of orders
 * @customfunction
 */
function markets_region_orders(order_type: string, region_id: number, page: number, type_id: number, opt_headers: boolean): any[][] {
  if(!order_type) throw 'order_type is required';
  if(!region_id) throw 'region_id is required';
  return parseData_('markets_region_orders',{order_type:order_type,region_id:region_id,page:page,type_id:type_id,opt_headers:opt_headers})
}

/**
 * Return a list of type IDs that have active orders in the region, for efficient market indexing.
 * @param {number} region_id (Required) Return statistics in this region
 * @param {number} page  Which page of results to return
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of type IDs
 * @customfunction
 */
function markets_region_types(region_id: number, page: number, opt_headers: boolean): any[][] {
  if(!region_id) throw 'region_id is required';
  return parseData_('markets_region_types',{region_id:region_id,page:page,opt_headers:opt_headers})
}

/**
 * Return a list of opportunities groups
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of opportunities group ids
 * @customfunction
 */
function opportunities_groups(opt_headers: boolean): any[][] {
  return parseData_('opportunities_groups',{opt_headers:opt_headers})
}

/**
 * Return information of an opportunities group
 * @param {number} group_id (Required) ID of an opportunities group
 * @param {string} language  Language to use in the response, takes precedence over Accept-Language
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return Details of an opportunities group
 * @customfunction
 */
function opportunities_groups_group(group_id: number, language: string, opt_headers: boolean): any[][] {
  if(!group_id) throw 'group_id is required';
  return parseData_('opportunities_groups_group',{group_id:group_id,language:language,opt_headers:opt_headers})
}

/**
 * Return a list of opportunities tasks
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of opportunities task ids
 * @customfunction
 */
function opportunities_tasks(opt_headers: boolean): any[][] {
  return parseData_('opportunities_tasks',{opt_headers:opt_headers})
}

/**
 * Return information of an opportunities task
 * @param {number} task_id (Required) ID of an opportunities task
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return Details of an opportunities task
 * @customfunction
 */
function opportunities_tasks_task(task_id: number, opt_headers: boolean): any[][] {
  if(!task_id) throw 'task_id is required';
  return parseData_('opportunities_tasks_task',{task_id:task_id,opt_headers:opt_headers})
}

/**
 * Get the systems between origin and destination
 * @param {number} destination (Required) destination solar system ID
 * @param {number} origin (Required) origin solar system ID
 * @param {number[]} avoid  avoid solar system ID(s)
 * @param {number[]} connections  connected solar system pairs
 * @param {string} flag  route security preference
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return Solar systems in route from origin to destination
 * @customfunction
 */
function route_origin_destination(destination: number, origin: number, avoid: number[], connections: number[], flag: string, opt_headers: boolean): any[][] {
  if(!destination) throw 'destination is required';
  if(!origin) throw 'origin is required';
  return parseData_('route_origin_destination',{destination:destination,origin:origin,avoid:avoid,connections:connections,flag:flag,opt_headers:opt_headers})
}

/**
 * Shows sovereignty data for campaigns.
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of sovereignty campaigns
 * @customfunction
 */
function sovereignty_campaigns(opt_headers: boolean): any[][] {
  return parseData_('sovereignty_campaigns',{opt_headers:opt_headers})
}

/**
 * Shows sovereignty information for solar systems
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of sovereignty information for solar systems in New Eden
 * @customfunction
 */
function sovereignty_map(opt_headers: boolean): any[][] {
  return parseData_('sovereignty_map',{opt_headers:opt_headers})
}

/**
 * Shows sovereignty data for structures.
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of sovereignty structures
 * @customfunction
 */
function sovereignty_structures(opt_headers: boolean): any[][] {
  return parseData_('sovereignty_structures',{opt_headers:opt_headers})
}

/**
 * EVE Server status
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return Server status
 * @customfunction
 */
function status(opt_headers: boolean): any[][] {
  return parseData_('status',{opt_headers:opt_headers})
}

/**
 * Get all character ancestries
 * @param {string} language  Language to use in the response, takes precedence over Accept-Language
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of ancestries
 * @customfunction
 */
function universe_ancestries(language: string, opt_headers: boolean): any[][] {
  return parseData_('universe_ancestries',{language:language,opt_headers:opt_headers})
}

/**
 * Get information on an asteroid belt
 * @param {number} asteroid_belt_id (Required) asteroid_belt_id integer
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return Information about an asteroid belt
 * @customfunction
 */
function universe_asteroid_belts_asteroid_belt(asteroid_belt_id: number, opt_headers: boolean): any[][] {
  if(!asteroid_belt_id) throw 'asteroid_belt_id is required';
  return parseData_('universe_asteroid_belts_asteroid_belt',{asteroid_belt_id:asteroid_belt_id,opt_headers:opt_headers})
}

/**
 * Get a list of bloodlines
 * @param {string} language  Language to use in the response, takes precedence over Accept-Language
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of bloodlines
 * @customfunction
 */
function universe_bloodlines(language: string, opt_headers: boolean): any[][] {
  return parseData_('universe_bloodlines',{language:language,opt_headers:opt_headers})
}

/**
 * Get a list of item categories
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of item category ids
 * @customfunction
 */
function universe_categories(opt_headers: boolean): any[][] {
  return parseData_('universe_categories',{opt_headers:opt_headers})
}

/**
 * Get information of an item category
 * @param {number} category_id (Required) An Eve item category ID
 * @param {string} language  Language to use in the response, takes precedence over Accept-Language
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return Information about an item category
 * @customfunction
 */
function universe_categories_category(category_id: number, language: string, opt_headers: boolean): any[][] {
  if(!category_id) throw 'category_id is required';
  return parseData_('universe_categories_category',{category_id:category_id,language:language,opt_headers:opt_headers})
}

/**
 * Get a list of constellations
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of constellation ids
 * @customfunction
 */
function universe_constellations(opt_headers: boolean): any[][] {
  return parseData_('universe_constellations',{opt_headers:opt_headers})
}

/**
 * Get information on a constellation
 * @param {number} constellation_id (Required) constellation_id integer
 * @param {string} language  Language to use in the response, takes precedence over Accept-Language
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return Information about a constellation
 * @customfunction
 */
function universe_constellations_constellation(constellation_id: number, language: string, opt_headers: boolean): any[][] {
  if(!constellation_id) throw 'constellation_id is required';
  return parseData_('universe_constellations_constellation',{constellation_id:constellation_id,language:language,opt_headers:opt_headers})
}

/**
 * Get a list of graphics
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of graphic ids
 * @customfunction
 */
function universe_graphics(opt_headers: boolean): any[][] {
  return parseData_('universe_graphics',{opt_headers:opt_headers})
}

/**
 * Get information on a graphic
 * @param {number} graphic_id (Required) graphic_id integer
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return Information about a graphic
 * @customfunction
 */
function universe_graphics_graphic(graphic_id: number, opt_headers: boolean): any[][] {
  if(!graphic_id) throw 'graphic_id is required';
  return parseData_('universe_graphics_graphic',{graphic_id:graphic_id,opt_headers:opt_headers})
}

/**
 * Get a list of item groups
 * @param {number} page  Which page of results to return
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of item group ids
 * @customfunction
 */
function universe_groups(page: number, opt_headers: boolean): any[][] {
  return parseData_('universe_groups',{page:page,opt_headers:opt_headers})
}

/**
 * Get information on an item group
 * @param {number} group_id (Required) An Eve item group ID
 * @param {string} language  Language to use in the response, takes precedence over Accept-Language
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return Information about an item group
 * @customfunction
 */
function universe_groups_group(group_id: number, language: string, opt_headers: boolean): any[][] {
  if(!group_id) throw 'group_id is required';
  return parseData_('universe_groups_group',{group_id:group_id,language:language,opt_headers:opt_headers})
}

/**
 * Resolve a set of names to IDs in the following categories: agents, alliances, characters, constellations, corporations factions, inventory_types, regions, stations, and systems. Only exact matches will be returned. All names searched for are cached for 12 hours
 * @param {string[]} names (Required) The names to resolve
 * @param {string} language  Language to use in the response, takes precedence over Accept-Language
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return List of id/name associations for a set of names divided by category. Any name passed in that did not have a match will be ommitted
 * @customfunction
 */
function universe_ids(names: string[], language: string, opt_headers: boolean): any[][] {
  if(!names) throw 'names is required';
  return parseData_('universe_ids',{names:names,language:language,opt_headers:opt_headers})
}

/**
 * Get information on a moon
 * @param {number} moon_id (Required) moon_id integer
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return Information about a moon
 * @customfunction
 */
function universe_moons_moon(moon_id: number, opt_headers: boolean): any[][] {
  if(!moon_id) throw 'moon_id is required';
  return parseData_('universe_moons_moon',{moon_id:moon_id,opt_headers:opt_headers})
}

/**
 * Get information on a planet
 * @param {number} planet_id (Required) planet_id integer
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return Information about a planet
 * @customfunction
 */
function universe_planets_planet(planet_id: number, opt_headers: boolean): any[][] {
  if(!planet_id) throw 'planet_id is required';
  return parseData_('universe_planets_planet',{planet_id:planet_id,opt_headers:opt_headers})
}

/**
 * Get a list of character races
 * @param {string} language  Language to use in the response, takes precedence over Accept-Language
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of character races
 * @customfunction
 */
function universe_races(language: string, opt_headers: boolean): any[][] {
  return parseData_('universe_races',{language:language,opt_headers:opt_headers})
}

/**
 * Get a list of regions
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of region ids
 * @customfunction
 */
function universe_regions(opt_headers: boolean): any[][] {
  return parseData_('universe_regions',{opt_headers:opt_headers})
}

/**
 * Get information on a region
 * @param {number} region_id (Required) region_id integer
 * @param {string} language  Language to use in the response, takes precedence over Accept-Language
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return Information about a region
 * @customfunction
 */
function universe_regions_region(region_id: number, language: string, opt_headers: boolean): any[][] {
  if(!region_id) throw 'region_id is required';
  return parseData_('universe_regions_region',{region_id:region_id,language:language,opt_headers:opt_headers})
}

/**
 * Get information on a planetary factory schematic
 * @param {number} schematic_id (Required) A PI schematic ID
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return Public data about a schematic
 * @customfunction
 */
function universe_schematics_schematic(schematic_id: number, opt_headers: boolean): any[][] {
  if(!schematic_id) throw 'schematic_id is required';
  return parseData_('universe_schematics_schematic',{schematic_id:schematic_id,opt_headers:opt_headers})
}

/**
 * Get information on a stargate
 * @param {number} stargate_id (Required) stargate_id integer
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return Information about a stargate
 * @customfunction
 */
function universe_stargates_stargate(stargate_id: number, opt_headers: boolean): any[][] {
  if(!stargate_id) throw 'stargate_id is required';
  return parseData_('universe_stargates_stargate',{stargate_id:stargate_id,opt_headers:opt_headers})
}

/**
 * Get information on a star
 * @param {number} star_id (Required) star_id integer
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return Information about a star
 * @customfunction
 */
function universe_stars_star(star_id: number, opt_headers: boolean): any[][] {
  if(!star_id) throw 'star_id is required';
  return parseData_('universe_stars_star',{star_id:star_id,opt_headers:opt_headers})
}

/**
 * List all public structures
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return List of public structure IDs
 * @customfunction
 */
function universe_structures(opt_headers: boolean): any[][] {
  return parseData_('universe_structures',{opt_headers:opt_headers})
}

/**
 * Get the number of jumps in solar systems within the last hour ending at the timestamp of the Last
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of systems and number of jumps
 * @customfunction
 */
function universe_system_jumps(opt_headers: boolean): any[][] {
  return parseData_('universe_system_jumps',{opt_headers:opt_headers})
}

/**
 * Get a list of solar systems
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of solar system ids
 * @customfunction
 */
function universe_systems(opt_headers: boolean): any[][] {
  return parseData_('universe_systems',{opt_headers:opt_headers})
}

/**
 * Get a list of type ids
 * @param {number} page  Which page of results to return
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of type ids
 * @customfunction
 */
function universe_types(page: number, opt_headers: boolean): any[][] {
  return parseData_('universe_types',{page:page,opt_headers:opt_headers})
}

/**
 * Return a list of wars
 * @param {number} max_war_id  Only return wars with ID smaller than this
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of war IDs, in descending order by war_id
 * @customfunction
 */
function wars(max_war_id: number, opt_headers: boolean): any[][] {
  return parseData_('wars',{max_war_id:max_war_id,opt_headers:opt_headers})
}

/**
 * Return details about a war
 * @param {number} war_id (Required) ID for a war
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return Details about a war
 * @customfunction
 */
function wars_war(war_id: number, opt_headers: boolean): any[][] {
  if(!war_id) throw 'war_id is required';
  return parseData_('wars_war',{war_id:war_id,opt_headers:opt_headers})
}

/**
 * Return a list of kills related to a war
 * @param {number} war_id (Required) A valid war ID
 * @param {number} page  Which page of results to return
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of killmail IDs and hashes
 * @customfunction
 */
function wars_war_killmails(war_id: number, page: number, opt_headers: boolean): any[][] {
  if(!war_id) throw 'war_id is required';
  return parseData_('wars_war_killmails',{war_id:war_id,page:page,opt_headers:opt_headers})
}

/**
 * Return contacts of an alliance
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {number} page  Which page of results to return
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of contacts
 * @customfunction
 */
function alliances_alliance_contacts(name: string, page: number, opt_headers: boolean): any[][] {
  return parseData_('alliances_alliance_contacts',{name:name,page:page,opt_headers:opt_headers})
}

/**
 * Return locations for a set of item ids, which you can get from character assets endpoint. Coordinates for items in hangars or stations are set to (0,0,0)
 * @param {number[]} item_ids (Required) A list of item ids
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return List of asset locations
 * @customfunction
 */
function characters_character_assets_locations(item_ids: number[], name: string, opt_headers: boolean): any[][] {
  if(!item_ids) throw 'item_ids is required';
  return parseData_('characters_character_assets_locations',{item_ids:item_ids,name:name,opt_headers:opt_headers})
}

/**
 * Return a list of blueprints the character owns
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {number} page  Which page of results to return
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of blueprints
 * @customfunction
 */
function characters_character_blueprints(name: string, page: number, opt_headers: boolean): any[][] {
  return parseData_('characters_character_blueprints',{name:name,page:page,opt_headers:opt_headers})
}

/**
 * A list of your character's personal bookmarks
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {number} page  Which page of results to return
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of bookmarks
 * @customfunction
 */
function characters_character_bookmarks(name: string, page: number, opt_headers: boolean): any[][] {
  return parseData_('characters_character_bookmarks',{name:name,page:page,opt_headers:opt_headers})
}

/**
 * A list of your character's personal bookmark folders
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {number} page  Which page of results to return
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return List of bookmark folders
 * @customfunction
 */
function characters_character_bookmarks_folders(name: string, page: number, opt_headers: boolean): any[][] {
  return parseData_('characters_character_bookmarks_folders',{name:name,page:page,opt_headers:opt_headers})
}

/**
 * Return contacts of a character
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {number} page  Which page of results to return
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of contacts
 * @customfunction
 */
function characters_character_contacts(name: string, page: number, opt_headers: boolean): any[][] {
  return parseData_('characters_character_contacts',{name:name,page:page,opt_headers:opt_headers})
}

/**
 * Checks if the character is currently online
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return Object describing the character's online status
 * @customfunction
 */
function characters_character_online(name: string, opt_headers: boolean): any[][] {
  return parseData_('characters_character_online',{name:name,opt_headers:opt_headers})
}

/**
 * List open market orders placed by a character
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return Open market orders placed by a character
 * @customfunction
 */
function characters_character_orders(name: string, opt_headers: boolean): any[][] {
  return parseData_('characters_character_orders',{name:name,opt_headers:opt_headers})
}

/**
 * Get portrait urls for a character
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return Public data for the given character
 * @customfunction
 */
function characters_character_portrait(opt_headers: boolean): any[][] {
  return parseData_('characters_character_portrait',{opt_headers:opt_headers})
}

/**
 * Returns a character's corporation roles
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return The character's roles in thier corporation
 * @customfunction
 */
function characters_character_roles(name: string, opt_headers: boolean): any[][] {
  return parseData_('characters_character_roles',{name:name,opt_headers:opt_headers})
}

/**
 * List the configured skill queue for the given character
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return The current skill queue, sorted ascending by finishing time
 * @customfunction
 */
function characters_character_skillqueue(name: string, opt_headers: boolean): any[][] {
  return parseData_('characters_character_skillqueue',{name:name,opt_headers:opt_headers})
}

/**
 * Returns aggregate yearly stats for a character
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return Character stats
 * @customfunction
 */
function characters_character_stats(name: string, opt_headers: boolean): any[][] {
  return parseData_('characters_character_stats',{name:name,opt_headers:opt_headers})
}

/**
 * Get a list of all the alliances a corporation has been a member of
 * @param {number} corporation_id (Required) An EVE corporation ID
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return Alliance history for the given corporation
 * @customfunction
 */
function corporations_corporation_alliancehistory(corporation_id: number, opt_headers: boolean): any[][] {
  if(!corporation_id) throw 'corporation_id is required';
  return parseData_('corporations_corporation_alliancehistory',{corporation_id:corporation_id,opt_headers:opt_headers})
}

/**
 * Return locations for a set of item ids, which you can get from corporation assets endpoint. Coordinates for items in hangars or stations are set to (0,0,0)
 * @param {number[]} item_ids (Required) A list of item ids
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return List of asset locations
 * @customfunction
 */
function corporations_corporation_assets_locations(item_ids: number[], name: string, opt_headers: boolean): any[][] {
  if(!item_ids) throw 'item_ids is required';
  return parseData_('corporations_corporation_assets_locations',{item_ids:item_ids,name:name,opt_headers:opt_headers})
}

/**
 * Returns a list of blueprints the corporation owns
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {number} page  Which page of results to return
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return List of corporation blueprints
 * @customfunction
 */
function corporations_corporation_blueprints(name: string, page: number, opt_headers: boolean): any[][] {
  return parseData_('corporations_corporation_blueprints',{name:name,page:page,opt_headers:opt_headers})
}

/**
 * Return contacts of a corporation
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {number} page  Which page of results to return
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of contacts
 * @customfunction
 */
function corporations_corporation_contacts(name: string, page: number, opt_headers: boolean): any[][] {
  return parseData_('corporations_corporation_contacts',{name:name,page:page,opt_headers:opt_headers})
}

/**
 * Returns logs recorded in the past seven days from all audit log secure containers (ALSC) owned by a given corporation
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {number} page  Which page of results to return
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return List of corporation ALSC logs
 * @customfunction
 */
function corporations_corporation_containers_logs(name: string, page: number, opt_headers: boolean): any[][] {
  return parseData_('corporations_corporation_containers_logs',{name:name,page:page,opt_headers:opt_headers})
}

/**
 * List cancelled and expired market orders placed on behalf of a corporation up to 90 days in the past.
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {number} page  Which page of results to return
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return Expired and cancelled market orders placed on behalf of a corporation
 * @customfunction
 */
function corporations_corporation_orders_history(name: string, page: number, opt_headers: boolean): any[][] {
  return parseData_('corporations_corporation_orders_history',{name:name,page:page,opt_headers:opt_headers})
}

/**
 * Get a list of corporation structures. This route's version includes the changes to structures detailed in this blog: https://www.eveonline.com/article/upwell
 * @param {string} language  Language to use in the response, takes precedence over Accept-Language
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {number} page  Which page of results to return
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return List of corporation structures' information
 * @customfunction
 */
function corporations_corporation_structures(language: string, name: string, page: number, opt_headers: boolean): any[][] {
  return parseData_('corporations_corporation_structures',{language:language,name:name,page:page,opt_headers:opt_headers})
}

/**
 * Get information on a dogma effect
 * @param {number} effect_id (Required) A dogma effect ID
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return Information about a dogma effect
 * @customfunction
 */
function dogma_effects_effect(effect_id: number, opt_headers: boolean): any[][] {
  if(!effect_id) throw 'effect_id is required';
  return parseData_('dogma_effects_effect',{effect_id:effect_id,opt_headers:opt_headers})
}

/**
 * An overview of the current ownership of faction warfare solar systems
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return All faction warfare solar systems
 * @customfunction
 */
function fw_systems(opt_headers: boolean): any[][] {
  return parseData_('fw_systems',{opt_headers:opt_headers})
}

/**
 * Search for entities that match a given sub
 * @param {string[]} categories (Required) Type of entities to search for
 * @param {string} search (Required) The string to search on
 * @param {string} language  Language to use in the response, takes precedence over Accept-Language
 * @param {boolean} strict  Whether the search should be a strict match
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of search results
 * @customfunction
 */
function eve_search(categories: string[], search: string, language: string, strict: boolean, opt_headers: boolean): any[][] {
  if(!categories) throw 'categories is required';
  if(!search) throw 'search is required';
  return parseData_('eve_search',{categories:categories,search:search,language:language,strict:strict,opt_headers:opt_headers})
}

/**
 * Get a list of factions
 * @param {string} language  Language to use in the response, takes precedence over Accept-Language
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of factions
 * @customfunction
 */
function universe_factions(language: string, opt_headers: boolean): any[][] {
  return parseData_('universe_factions',{language:language,opt_headers:opt_headers})
}

/**
 * Resolve a set of IDs to names and categories. Supported ID's for resolving are: Characters, Corporations, Alliances, Stations, Solar Systems, Constellations, Regions, Types
 * @param {number[]} ids (Required) The ids to resolve
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return List of id/name associations for a set of ID's. All ID's must resolve to a name, or nothing will be returned
 * @customfunction
 */
function universe_names(ids: number[], opt_headers: boolean): any[][] {
  if(!ids) throw 'ids is required';
  return parseData_('universe_names',{ids:ids,opt_headers:opt_headers})
}

/**
 * Get information on a station
 * @param {number} station_id (Required) station_id integer
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return Information about a station
 * @customfunction
 */
function universe_stations_station(station_id: number, opt_headers: boolean): any[][] {
  if(!station_id) throw 'station_id is required';
  return parseData_('universe_stations_station',{station_id:station_id,opt_headers:opt_headers})
}

/**
 * Returns information on requested structure if you are on the ACL. Otherwise, returns "Forbidden" for all inputs.
 * @param {number} structure_id (Required) An Eve structure ID
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return Data about a structure
 * @customfunction
 */
function universe_structures_structure(structure_id: number, name: string, opt_headers: boolean): any[][] {
  if(!structure_id) throw 'structure_id is required';
  return parseData_('universe_structures_structure',{structure_id:structure_id,name:name,opt_headers:opt_headers})
}

/**
 * Get the number of ship, pod and NPC kills per solar system within the last hour ending at the timestamp of the Last
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of systems and number of ship, pod and NPC kills
 * @customfunction
 */
function universe_system_kills(opt_headers: boolean): any[][] {
  return parseData_('universe_system_kills',{opt_headers:opt_headers})
}

/**
 * Public information about an alliance
 * @param {number} alliance_id (Required) An EVE alliance ID
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return Public data about an alliance
 * @customfunction
 */
function alliances_alliance(alliance_id: number, opt_headers: boolean): any[][] {
  if(!alliance_id) throw 'alliance_id is required';
  return parseData_('alliances_alliance',{alliance_id:alliance_id,opt_headers:opt_headers})
}

/**
 * Return a list of the characters assets
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {number} page  Which page of results to return
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A flat list of the users assets
 * @customfunction
 */
function characters_character_assets(name: string, page: number, opt_headers: boolean): any[][] {
  return parseData_('characters_character_assets',{name:name,page:page,opt_headers:opt_headers})
}

/**
 * Get all the information for a specific event
 * @param {number} event_id (Required) The id of the event requested
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return Full details of a specific event
 * @customfunction
 */
function characters_character_calendar_event(event_id: number, name: string, opt_headers: boolean): any[][] {
  if(!event_id) throw 'event_id is required';
  return parseData_('characters_character_calendar_event',{event_id:event_id,name:name,opt_headers:opt_headers})
}

/**
 * A list of the character's clones
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return Clone information for the given character
 * @customfunction
 */
function characters_character_clones(name: string, opt_headers: boolean): any[][] {
  return parseData_('characters_character_clones',{name:name,opt_headers:opt_headers})
}

/**
 * Return a list of the users mail labels, unread counts for each label and a total unread count.
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of mail labels and unread counts
 * @customfunction
 */
function characters_character_mail_labels(name: string, opt_headers: boolean): any[][] {
  return parseData_('characters_character_mail_labels',{name:name,opt_headers:opt_headers})
}

/**
 * Return character notifications
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return Returns your recent notifications
 * @customfunction
 */
function characters_character_notifications(name: string, opt_headers: boolean): any[][] {
  return parseData_('characters_character_notifications',{name:name,opt_headers:opt_headers})
}

/**
 * Returns full details on the layout of a single planetary colony, including links, pins and routes. Note: Planetary information is only recalculated when the colony is viewed through the client. Information will not update until this criteria is met.
 * @param {number} planet_id (Required) Planet id of the target planet
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return Colony layout
 * @customfunction
 */
function characters_character_planets_planet(planet_id: number, name: string, opt_headers: boolean): any[][] {
  if(!planet_id) throw 'planet_id is required';
  return parseData_('characters_character_planets_planet',{planet_id:planet_id,name:name,opt_headers:opt_headers})
}

/**
 * Search for entities that match a given sub
 * @param {string[]} categories (Required) Type of entities to search for
 * @param {string} search (Required) The string to search on
 * @param {string} language  Language to use in the response, takes precedence over Accept-Language
 * @param {boolean} strict  Whether the search should be a strict match
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of search results
 * @customfunction
 */
function characters_character_search(categories: string[], search: string, language: string, strict: boolean, name: string, opt_headers: boolean): any[][] {
  if(!categories) throw 'categories is required';
  if(!search) throw 'search is required';
  return parseData_('characters_character_search',{categories:categories,search:search,language:language,strict:strict,name:name,opt_headers:opt_headers})
}

/**
 * Return a list of the corporation assets
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {number} page  Which page of results to return
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of assets
 * @customfunction
 */
function corporations_corporation_assets(name: string, page: number, opt_headers: boolean): any[][] {
  return parseData_('corporations_corporation_assets',{name:name,page:page,opt_headers:opt_headers})
}

/**
 * Return the current member list of a corporation, the token's character need to be a member of the corporation.
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return List of member character IDs
 * @customfunction
 */
function corporations_corporation_members(name: string, opt_headers: boolean): any[][] {
  return parseData_('corporations_corporation_members',{name:name,opt_headers:opt_headers})
}

/**
 * List open market orders placed on behalf of a corporation
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {number} page  Which page of results to return
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return A list of open market orders
 * @customfunction
 */
function corporations_corporation_orders(name: string, page: number, opt_headers: boolean): any[][] {
  return parseData_('corporations_corporation_orders',{name:name,page:page,opt_headers:opt_headers})
}

/**
 * Retrieve the given corporation's wallet journal for the given division going 30 days back
 * @param {number} division (Required) Wallet key of the division to fetch journals from
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {number} page  Which page of results to return
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return Journal entries
 * @customfunction
 */
function corporations_corporation_wallets_division_journal(division: number, name: string, page: number, opt_headers: boolean): any[][] {
  if(!division) throw 'division is required';
  return parseData_('corporations_corporation_wallets_division_journal',{division:division,name:name,page:page,opt_headers:opt_headers})
}

/**
 * Get information on a type
 * @param {number} type_id (Required) An Eve item type ID
 * @param {string} language  Language to use in the response, takes precedence over Accept-Language
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return Information about a type
 * @customfunction
 */
function universe_types_type(type_id: number, language: string, opt_headers: boolean): any[][] {
  if(!type_id) throw 'type_id is required';
  return parseData_('universe_types_type',{type_id:type_id,language:language,opt_headers:opt_headers})
}

/**
 * Public information about a character
 * @param {number} character_id (Required) An EVE character ID
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return Public data for the given character
 * @customfunction
 */
function characters_character(character_id: number, opt_headers: boolean): any[][] {
  if(!character_id) throw 'character_id is required';
  return parseData_('characters_character',{character_id:character_id,opt_headers:opt_headers})
}

/**
 * List all trained skills for the given character
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return Known skills for the character
 * @customfunction
 */
function characters_character_skills(name: string, opt_headers: boolean): any[][] {
  return parseData_('characters_character_skills',{name:name,opt_headers:opt_headers})
}

/**
 * Retrieve the given character's wallet journal going 30 days back
 * @param {string} name  Name of the character used for auth. If none is given, defaults to MAIN_CHARACTER.
 * @param {number} page  Which page of results to return
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return Journal entries
 * @customfunction
 */
function characters_character_wallet_journal(name: string, page: number, opt_headers: boolean): any[][] {
  return parseData_('characters_character_wallet_journal',{name:name,page:page,opt_headers:opt_headers})
}

/**
 * Public information about a corporation
 * @param {number} corporation_id (Required) An EVE corporation ID
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return Public information about a corporation
 * @customfunction
 */
function corporations_corporation(corporation_id: number, opt_headers: boolean): any[][] {
  if(!corporation_id) throw 'corporation_id is required';
  return parseData_('corporations_corporation',{corporation_id:corporation_id,opt_headers:opt_headers})
}

/**
 * Get information on a solar system.
 * @param {number} system_id (Required) system_id integer
 * @param {string} language  Language to use in the response, takes precedence over Accept-Language
 * @param {boolean} opt_headers  Default: true, Boolean if column headings should be listed or not.
 * @return Information about a solar system
 * @customfunction
 */
function universe_systems_system(system_id: number, language: string, opt_headers: boolean): any[][] {
  if(!system_id) throw 'system_id is required';
  return parseData_('universe_systems_system',{system_id:system_id,language:language,opt_headers:opt_headers})
}
